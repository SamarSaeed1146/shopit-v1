## Server Running Port & Starting Structure

#### step # 1:

- Open vs code.
- Make file of frontend in project.
- Make file of backend in project.
- Open terminal
- Add `npm init` command it will give package.json file.

#### step # 2:

- install : `npm i express dotenv mongoose --save`
- --save is used for save the package in package.json file.

#### step # 3:

- Go to backend folder and make a file of app.js
- Add this to app.js file :

```
  import express from "express";

const app = express();

app.listen(3000, () => {
console.log("Server is running on port 3000");
});
```

- Then go to package.json file and set : `"type": "module"`,
- Go to terminal add : cd backend
- On terminal add : node app.js

#### step # 4:

- Go on backend folder then make a folder of : config and then make a file of : config.env
- Config.env add port=3000
- Then make changes in app.js file :

```
  import express from "express";

const app = express();
import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
console.log(`Server is running on port ${process.env.PORT}`);
});
```

- Then run : `node app.js` it will show undefine.

#### step # 5:

- `npm i nodemon --save-dev`
- This will install devdependences of nodemon
- remove test and add this `"start": "node backend/app.js"` in package.json file.
- then try this in terminal `npm start`
- Add this with `"scripts":

```
{
  "start": "node backend/app.js",
  "dev": "nodemon backend/app.js"
  },
```

- Update this to : app.js :

```
import express from "express";

const app = express();
import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

```

- Add this to config.env file `NODE_ENV=DEVELOPMENT`

#### step # 6:

- Make a folder of `controllers` in backend folder.
- In controllers folder make `productControllers.js` file.
- In productControllers.js file add this code:

```
export const getProducts = async (req, res) => {
  res.status(200).json({ message: "All products" });
};

```

#### step # 7:

- Make a folder of `routes` in backend folder.
- In routes folder make `products.js` file.
- In products.js file add this code:

```
import express from "express";
import { getProducts } from "../controllers/productControllers.js";
const router = express.Router();

router.route("/products").get(getProducts);

export default router;

```

- Add this to app.js file:

```
import express from "express";

const app = express();
import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });

import productRoutes from "./routes/products.js";

app.use("/api/v1", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

```

## Database Connection MongoDB

- In config folder make a new file : `dbconnect.js`.
- Add this in `dbconnect.js` :

```
import mongoose from "mongoose";

export const connectDatabase = async () => {
  let DB_URI = "";

  if (process.env.NODE_ENV === "DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URI;
  if (process.env.NODE_ENV === "PRODUCTION") DB_URI = process.env.DB_URI;

  mongoose.connect(DB_URI).then((con) => {
    console.log(
      `MongoDB Database connected with HOST: ${con?.connection?.host}`
    );
  });
};

```

- In `config.env file` add this: `DB_LOCAL_URI=mongodb://127.0.0.1:27017/shopit` `DB_URI=`
- In app.js file add: `import { connectDatabase } from "./config/dbConnect.js";` & `connectDatabase();`

```
import express from "express";

const app = express();
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

import productRoutes from "./routes/products.js";

app.use("/api/v1", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

```

## Product Schema

#### step # 1:

- In backend folder make a new folder : `models`
- In `models` folder make a new file : `product.js` & add this :

```
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      maxLength: [200, "Product name cannot exceed 200 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      maxLength: [5, "Product price cannot exceed 5 digits"],
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please enter product category"],
      enum: {
        values: [
          "Electronics",
          "Cameras",
          "Laptops",
          "Accessories",
          "Headphones",
          "Food",
          "Books",
          "Sports",
          "Outdoor",
          "Home",
        ],
        message: "Please select correct category for product",
      },
    },
    seller: {
      type: String,
      required: [true, "Please enter product seller"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);

```

- Then Go to `productControllers.js` file add this:

```
import Product from "../models/product.js";

// create new product => /api/v1/products

export const getProducts = async (req, res) => {
  res.status(200).json({ message: "All products" });
};

// Create new product => /api/v1/admin/products
export const newProducts = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
};

```

- Then go to `product.js` file & Add this :

```
import express from "express";
import { getProducts } from "../controllers/productControllers.js";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(getProducts);

export default router;

```

- Update app.js file with this :

```
import express from "express";

const app = express();
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

app.use(express.json());

import productRoutes from "./routes/products.js";

app.use("/api/v1", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

```

#### step # 2:

- Make a new folder in `backend`
- `seeder` in `seeder` folder make two files : `data.js` & `seeder.js`
- In `data.js` file add this:

```
export default [
  {
    name: "Sample Product 1",
    description: "This is a sample product",
    price: 29.99,
    images: [
      {
        public_id: "sample_image_1",
        url: "http://example.com/sample_image_1.jpg",
      },
    ],
    category: "Electronics",
    stock: 100,
    reviews: [
      {
        user: "user_id_1",
        name: "John Doe",
        rating: 4,
        comment: "Great product!",
      },
      {
        user: "user_id_2",
        name: "Jane Smith",
        rating: 5,
        comment: "Excellent quality!",
      },
    ],
    numReviews: 2,
    ratings: 4.5,
    images: [
      [
        {
          public_id: "sample_image_1",
          url: "http://example.com/sample_image_1.jpg",
        },
        {
          public_id: "sample_image_2",
          url: "http://example.com/sample_image_2.jpg",
        },
      ],
      [
        {
          public_id: "sample_image_3",
          url: "http://example.com/sample_image_3.jpg",
        },
        {
          public_id: "sample_image_4",
          url: "http://example.com/sample_image_4.jpg",
        },
      ],
    ],
    images: [
      [
        {
          public_id: "sample_image_1",
          url: "http://example.com/sample_image_1.jpg",
        },
        {
          public_id: "sample_image_2",
          url: "http://example.com/sample_image_2.jpg",
        },
      ],
      [
        {
          public_id: "sample_image_3",
          url: "http://example.com/sample_image_3.jpg",
        },
        {
          public_id: "sample_image_4",
          url: "http://example.com/sample_image_4.jpg",
        },
      ],
    ],
  },
];

```

- In `seeder.js` add this :

```
import mongoose from "mongoose";
import products from "./data.js";
import product from "../models/product.js";

const seedProducts = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/shopit-v1");

    await product.deleteMany();
    console.log("Products are deleted");

    await product.insertMany(products);
    console.log("All Products are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();

```

- In `package.json` file add this in `"scripts"` section : `"seeder": "node backend/seeder/seeder.js"`.

#### step # 3:

- Go to `productControllers.js` file & add this:

```
import Product from "../models/product.js";

// create new product => /api/v1/products

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

// Create new product => /api/v1/admin/products
export const newProducts = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
};

// Get single product details => /api/v1/products/:id
export const getProductDetails = async (req, res) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json({
    product,
  });
};

// Update product details => /api/v1/products/:id
export const updateProduct = async (req, res) => {
  let product = await Product.findById(req?.params?.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    product,
  });
};

```

#### step # 4:

- Go to `product.js` file in backend/routes/products.js & add this:

```
import express from "express";
import {
  getProducts,
  updateProduct,
} from "../controllers/productControllers.js";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(getProducts);

router.route("/products/:id").get(getProductDetails);
router.route("/products/:id").put(updateProduct);

export default router;

```

#### step # 5:

- Go to `productControllers.js` file & add this:

```
import Product from "../models/product.js";

// create new product => /api/v1/products

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

// Create new product => /api/v1/admin/products
export const newProducts = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
};

// Get single product details => /api/v1/products/:id
export const getProductDetails = async (req, res) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json({
    product,
  });
};

// Update product details => /api/v1/products/:id
export const updateProduct = async (req, res) => {
  let product = await Product.findById(req?.params?.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    product,
  });
};

// Delete product => /api/v1/products/:id
export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  await product.deleteOne();
  res.status(200).json({
    message: "Product deleted successfully",
  });
};

```

- Go to `products.js` file /backend/routes/products.js & add this:

```
import express from "express";
import {
  getProducts,
  updateProduct,
} from "../controllers/productControllers.js";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(getProducts);

router.route("/products/:id").get(getProductDetails);
router.route("/products/:id").put(updateProduct);

router.route("/products/:id").delete(deleteProduct);

export default router;

```

## Backend Error Handler

#### step # 1:

- Go on `backend` folder than create a new folder `utils`
- In `utils` folder make a file of `errorHandler.js`
- Add this to `errorHandler.js` file :

```
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;

```

#### step # 2:

- Go on `backend` folder create new folder `middlewares`
- In `middlewares` folder create a file of `errors.js`
- Add this to `errors.js` file:

```
export default (err, req, res, next) => {
  let error = {
    statusCode: err?.statusCode || 500,
    message: err?.message || 'Internal Server Error',
  };
  res.status(error.statusCode).json({ message: error.message });
};


```

#### step # 3:

- Update `app.js` file:

```
import express from "express";

const app = express();
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

app.use(express.json());

import productRoutes from "./routes/products.js";

app.use("/api/v1", productRoutes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

```

#### step # 4:

- Add some code error handler in `ProductControllers.js`:

```
import Product from "../models/product.js";
import ErrorHandler from "../utils/errorHandler.js";

// create new product => /api/v1/products

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

// Create new product => /api/v1/admin/products
export const newProducts = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
};

// Get single product details => /api/v1/products/:id
export const getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    product,
  });
};

// Update product details => /api/v1/products/:id
export const updateProduct = async (req, res) => {
  let product = await Product.findById(req?.params?.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    product,
  });
};

// Delete product => /api/v1/products/:id
export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  await product.delete();
  res.status(200).json({
    message: "Product deleted successfully",
  });
};

```
