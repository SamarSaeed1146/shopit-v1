# Server Running Port & Starting Structure

## step # 1

- Open vs code.
- Make file of frontend in project.
- Make file of backend in project.
- Open terminal
- Add `npm init` command it will give package.json file.

## step # 2

- install : `npm i express dotenv mongoose --save`
- --save is used for save the package in package.json file.

## step # 3

- Go to backend folder and make a file of app.js
- Add this to app.js file :

```javascript
import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

- Then go to package.json file and set : `"type": "module"`,
- Go to terminal add : cd backend
- On terminal add : node app.js

## step # 4

- Go on backend folder then make a folder of : config and then make a file of : config.env
- Config.env add port=3000
- Then make changes in app.js file
- Then run : `node app.js` it will show undefine.

## step # 5

- `npm i nodemon --save-dev`
- This will install devdependences of nodemon
- remove test and add this `"start": "node backend/app.js"` in package.json file.
- then try this in terminal `npm start`
- Add this with `"scripts":

```javascript
{
  "start": "node backend/app.js",
  "dev": "nodemon backend/app.js"
  },
```

- Update this to : app.js :

```javascript
import express from "express";

const app = express();
import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`,
  );
});
```

- Add this to config.env file `NODE_ENV=DEVELOPMENT`

## step # 6

- Make a folder of `controllers` in backend folder.
- In controllers folder make `productControllers.js` file.
- In productControllers.js file add this code:

```javascript
export const getProducts = async (req, res) => {
  res.status(200).json({ message: "All products" });
};
```

## step # 7

- Make a folder of `routes` in backend folder.
- In routes folder make `products.js` file.
- In products.js file add this code:

```javascript
import express from "express";
import { getProducts } from "../controllers/productControllers.js";
const router = express.Router();

router.route("/products").get(getProducts);

export default router;
```

- Add this to app.js file:

```javascript
import express from "express";

const app = express();
import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });

import productRoutes from "./routes/products.js";

app.use("/api/v1", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`,
  );
});
```

## Database Connection MongoDB

- In config folder make a new file : `dbconnect.js`.
- Add this in `dbconnect.js` :

```javascript
import mongoose from "mongoose";

export const connectDatabase = async () => {
  let DB_URI = "";

  if (process.env.NODE_ENV === "DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URI;
  if (process.env.NODE_ENV === "PRODUCTION") DB_URI = process.env.DB_URI;

  mongoose.connect(DB_URI).then((con) => {
    console.log(
      `MongoDB Database connected with HOST: ${con?.connection?.host}`,
    );
  });
};
```

- In `config.env file` add this: `DB_LOCAL_URI=mongodb://127.0.0.1:27017/shopit` `DB_URI=`
- In app.js file add: `import { connectDatabase } from "./config/dbConnect.js";` & `connectDatabase();`

```javascript
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
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`,
  );
});
```

## Product Schema

### Creating Product Model

- In backend folder make a new folder : `models`
- In `models` folder make a new file : `product.js` & add this :

```javascript
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
  },
);

export default mongoose.model("Product", productSchema);
```

- Then Go to `productControllers.js` file add this:

```javascript
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

```javascript
import express from "express";
import { getProducts } from "../controllers/productControllers.js";
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(getProducts);

export default router;
```

- Update app.js file with this :

```javascript
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
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`,
  );
});
```

#### Seeding Products Data

- Make a new folder in `backend`
- `seeder` in `seeder` folder make two files : `data.js` & `seeder.js`
- In `data.js` file add this:

```javascript
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

```javascript
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

#### Adding Product Details & Delete Routes

- Go to `productControllers.js` file & add this:

```javascript
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

#### Updating Product Routes

- Go to `product.js` file in backend/routes/products.js & add this:

```javascript
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

#### Adding Delete Product Controller

- Go to `productControllers.js` file & add this:

```javascript
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

```javascript
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

### Creating Error Handler Utility

- Go on `backend` folder than create a new folder `utils`
- In `utils` folder make a file of `errorHandler.js`
- Add this to `errorHandler.js` file :

```javascript
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
```

#### step # 2 - Create Error Middleware

- Go on `backend` folder create new folder `middlewares`
- In `middlewares` folder create a file of `errors.js`
- Add this to `errors.js` file:

```javascript
export default (err, req, res, next) => {
  let error = {
    statusCode: err?.statusCode || 500,
    message: err?.message || "Internal Server Error",
  };
  res.status(error.statusCode).json({ message: error.message });
};
```

#### step # 3 - Update App.js with Error Middleware

- Update `app.js` file:

```javascript
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
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`,
  );
});
```

## step # 4 -

- Add some code error handler in `ProductControllers.js`:

```javascript
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

## step # 5 -

- Update the `config.env` file :

```javascript
port=3000
NODE_ENV=DEVELOPMENT

DB_LOCAL_URI=mongodb://127.0.0.1:27017/shopit-v1
DB_URI=mongodb://127.0.0.1:27017/shopit-v1
```

### Creating Error Handling Middleware

- In backend/middlewares make a new file `catchAsyncErrors.js`:

```javascript
export default (controllerFunction) => (req, res, next) => {
  Promise.resolve(controllerFunction(req, res, next)).catch(next);
};
```

#### Wrapping Controllers with Error Handler

- Make a changes in `productControllers.js` file:

```javascript
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Product from "../models/product.js";
import ErrorHandler from "../utils/errorHandler.js";

// create new product => /api/v1/products

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

// Create new product => /api/v1/admin/products
export const newProducts = catchAsyncErrors(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
});

// Get single product details => /api/v1/products/:id
export const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    product,
  });
});

// Update product details => /api/v1/products/:id
export const updateProduct = catchAsyncErrors(async (req, res) => {
  let product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    product,
  });
});

// Delete product => /api/v1/products/:id
export const deleteProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await product.delete();
  res.status(200).json({
    message: "Product deleted successfully",
  });
});
```

#### Handling Specific Error Types

- Make some change in errors.js file /backend/middlewares/errors.js :

```javascript
import ErrorHandler from "../utils/errorHandler";

export default (err, req, res, next) => {
  let error = {
    statusCode: err?.statusCode || 500,
    message: err?.message || "Internal Server Error",
  };

  // Handle Invalid MongoDB ID Error

  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err?.path}`;
    error = new ErrorHandler(message, 404);
  }
  // Handle Mongoose Validation Error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(error.statusCode).json({
      message: error.message,
      error: err,
      stack: err?.stack,
    });
    if (process.env.NODE_ENV === "PRODUCTION") {
      res.status(error.statusCode).json({ message: error.message });
    }
  }
};
```

#### Handling Uncaught Exceptions

- Make some changes in app.js file:

```javascript
import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

app.use(express.json());

console.log(hello);

import productRoutes from "./routes/products.js";

app.use("/api/v1", productRoutes);

app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`,
  );
});

// Unhandled Promise Rejection Handling

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
```

## Adding Filter, Pagination Search

- Go to `/backend/utils` folder & create new file `apiFilters.js`:

```javascript
class APIFilters {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };
    const fieldToRemove = ["keyword", "page", "limit"];
    fieldToRemove.forEach((key) => delete queryCopy[key]);
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

export default APIFilters;
```

- Go to `productControllers.js` file & add filters:

```javascript
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Product from "../models/product.js";
import APIFilters from "../utils/apiFilters.js";
import ErrorHandler from "../utils/errorHandler.js";

// create new product => /api/v1/products

export const getProducts = async (req, res) => {
  const resPerPage = 4;
  const ApiFilters = new APIFilters(Product, req.query).search().filter();
  let products = await ApiFilters.query;
  let filteredProductsCount = products.length;
  ApiFilters.pagination(resPerPage);
  products = await ApiFilters.query.clone();
  res.status(200).json({ products, filteredProductsCount, resPerPage });
};

// Create new product => /api/v1/admin/products
export const newProducts = catchAsyncErrors(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
});

// Get single product details => /api/v1/products/:id
export const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    product,
  });
});

// Update product details => /api/v1/products/:id
export const updateProduct = catchAsyncErrors(async (req, res) => {
  let product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    product,
  });
});

// Delete product => /api/v1/products/:id
export const deleteProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await product.delete();
  res.status(200).json({
    message: "Product deleted successfully",
  });
});
```

## Handle User Routes

- Go to `/backend/controllers/authControllers.js` file & Update this :

```javascript
import { get } from "mongoose";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";
import sendEmail from "../utils/sendEmail.js";
import { getResetPasswordTemplate } from "../utils/emailTemplates.js";
import crypto from "crypto";

// Register a User => /api/v1/register
export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  sendToken(user, 201, res);
});

// Login a User => /api/v1/login
export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});

// Logout User => /api/v1/logout
export const logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Forgot password => /api/v1/password/forgot

export const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found with", 404));
  }

  const resetToken = user.resetPasswordToken();

  await user.save();

  const resetUrl = `${process.env.FRONTEND_URL}/api/v1/password/reset/${resetToken}`;
  const message = getResetPasswordTemplate(user?.name, resetUrl);
  try {
    await sendEmail({
      email: user.email,
      subject: "Shopit Password Recovery",
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    return next(new ErrorHandler(error?.message, 500));
  }
});

// Reset Password => /api/v1/password/reset/:token
export const resetPassword = catchAsyncErrors(async (req, res, next) => {
  // Creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Password reset token is invalid or has been expired",
        400,
      ),
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

//  Get Current User Profile => /api/v1/me
export const getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Update password => /api/v1/password/update
export const updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  user.password = req.body.Password;
  user.save();

  sendToken(user, 200, res);
});

// Update User Profile => /api/v1/me/update
export const updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
  });

  res.status(200).json({
    user,
  });
});

// Get All Users => /api/v1/admin/users
export const allUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get User Details => /api/v1/admin/user/:id

export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// Update User Details - Admin => /api/v1/admin/users/:id
export const updateUser = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// Delete User - Admin => /api/v1/admin/users/:id
export const deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("User not found with this id", 404));
  }

  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});
```

- Go to /backend/routes/auth.js file & add this:

```javascript
import express from "express";
import {
  allUsers,
  deleteUser,
  forgotPassword,
  getUserDetails,
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  updatePassword,
  updateProfile,
  updateUser,
} from "../controllers/authControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizedRoles("admin"), allUsers);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getUserDetails)
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateUser)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteUser);

export default router;
```

## Order Resource

- Go to backend/models & create new file `order.js` then add this :

```javascript
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingInfo: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
      zipCode: { type: Number, required: true },
      phoneNo: { type: Number, required: true },
    },
    paymentMethod: {
      type: String,
      required: [true, "Please select payment method"],
      enum: {
        values: ["COD", "Card"],
        message: "Please select COD or Card payment method",
      },
    },
    paymentInfo: {
      id: { type: String },
      status: { type: String },
    },
    itemsPrice: {
      type: Number,
      required: true,
    },
    taxAmount: {
      type: Number,
      required: true,
    },
    shippingAmount: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: {
        values: ["Processing", "Shipped", "Delivered"],
        message: "Please select correct order status",
      },
      default: "Processing",
    },

    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Order", orderSchema);
```

- Go to backend/controllers folder & create new file `orderControllers.js` then add this :

```javascript
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Order from "../models/order.js";
import ErrorHandler from "../utils/errorHandler.js";

// Create a new order => /api/v1/order/new
export const newOrder = catchAsyncErrors(async (req, res) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxAmount,
    shippingAmount,
    totalAmount,
    paymentInfo,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxAmount,
    shippingAmount,
    totalAmount,
    paymentInfo,
    user: req.user._id,
  });
  res.status(201).json({
    success: true,
    order,
  });
});

// Get order details => /api/v1/order/:id
export const getOrderDetails = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email",
  );

  if (!order) {
    return next(new ErrorHandler("Order not found with this ID", 404));
  }

  res.status(200).json({
    order,
  });
});

// Get current user's orders => /api/v1/me/orders
export const myOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    orders,
  });
});

// Get all orders - Admin => /api/v1/admin/orders
export const allOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  res.status(200).json({
    orders,
  });
});

// Update order - Admin => /api/v1/admin/order/:id
export const updateOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this ID", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  order?.orderItems?.forEach(async (item) => {
    const product = await product.findById(item?.product?.toString());
    if (product) {
      return next(new ErrorHandler("Product not found with this ID", 404));
    }
    product.stock = product.stock - item.quantity;
    await product.save();
  });

  order.orderStatus = req.body.status;
  order.deliveredAt = Date.now();

  res.status(200).json({
    success: true,
    order,
  });
});

// Delete order - Admin => /api/v1/admin/order/:id
export const deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this ID", 404));
  }

  await order.deleteOne();

  res.status(200).json({
    success: true,
    message: "Order deleted successfully",
  });
});
```

- Go to backend/routes folder then create new file `order.js` & add this :

```javascript
import express from "express";
const router = express.Router();

import { authorizedRoles, isAuthenticated } from "../middlewares/auth.js";
import {
  allOrders,
  deleteOrder,
  getOrderDetails,
  myOrders,
  newOrder,
  updateOrder,
} from "../controllers/orderControllers.js";

router.route("/order/new").post(isAuthenticated, newOrder);
router.route("/order/:id").get(isAuthenticated, getOrderDetails);
router.route("/me/orders").get(isAuthenticated, myOrders);
router
  .route("/admin/orders")
  .get(isAuthenticated, authorizedRoles("admin"), allOrders);
router
  .route("/admin/order/:id")
  .put(isAuthenticated, authorizedRoles("admin"), updateOrder)
  .delete(isAuthenticated, authorizedRoles("admin"), deleteOrder);

export default router;
```

- Go to app.js file and update this :

```javascript
import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

app.use(express.json());
app.use(cookieParser());

import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";

app.use("/api/v1", orderRoutes);

app.use("/api/v1", authRoutes);

app.use("/api/v1", productRoutes);

app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`,
  );
});

// Unhandled Promise Rejection Handling

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
```

## User Reviews

- Go to `backend/controllers/productControllers.js` & Add Review Code :

```javascript
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Product from "../models/product.js";
import APIFilters from "../utils/apiFilters.js";
import ErrorHandler from "../utils/errorHandler.js";

// create new product => /api/v1/products

export const getProducts = async (req, res) => {
  const resPerPage = 4;
  const ApiFilters = new APIFilters(Product, req.query).search().filter();
  let products = await ApiFilters.query;
  let filteredProductsCount = products.length;
  ApiFilters.pagination(resPerPage);
  products = await ApiFilters.query.clone();
  res.status(200).json({ products, filteredProductsCount, resPerPage });
};

// Create new product => /api/v1/admin/products
export const newProducts = catchAsyncErrors(async (req, res) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
});

// Get single product details => /api/v1/products/:id
export const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    product,
  });
});

// Update product details => /api/v1/products/:id
export const updateProduct = catchAsyncErrors(async (req, res) => {
  let product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    product,
  });
});

// Delete product => /api/v1/products/:id
export const deleteProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await product.delete();
  res.status(200).json({
    message: "Product deleted successfully",
  });
});

// Create/Update product Review => /api/v1/reviews
export const createProductReview = catchAsyncErrors(async (req, res) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req?.user?._id,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  const isReviewed = product?.reviews?.find(
    (rev) => rev.user.toString() === req.user._id.toString(),
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req?.user?._id.toString()) {
        ((rev.rating = rating), (rev.comment = comment));
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Delete product Review => /api/v1/admin/reviews
export const deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req?.query?.productId);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  const reviews = product?.reviews?.filter(
    (rev) => rev._id.toString() !== req?.query?.id.toString(),
  );

  const numOfReviews = reviews.length;

  const ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    reviews.length;

  await Product.findByIdAndUpdate(
    req?.query?.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    },
  );

  res.status(200).json({
    success: true,
  });
});

// Get product reviews => /api/v1/reviews

export const getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    reviews: product.reviews,
  });
});
```

- Go to backend/routes/products.js & Add this :

```javascript
import express from "express";
import {
  deleteProduct,
  getProducts,
  getProductDetails,
  updateProduct,
  createProductReview,
  deleteReview,
  getProductReviews,
} from "../controllers/productControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();

router.route("/products").get(getProducts);

router
  .route("/admin/products")
  .post(isAuthenticatedUser, authorizedRoles("admin"), newProduct);

router.route("/products/:id").get(getProductDetails);

router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct);

router.route("/admin/products/:id").delete(deleteProduct);

router
  .route("/review")
  .get(isAuthenticatedUser, getProductReviews)
  .put(isAuthenticatedUser, createProductReview);

router
  .route("/admin/reviews")
  .get(isAuthenticatedUser, authorizedRoles("admin"), deleteReview);

export default router;
```

## User State

- Go to frontend/src/components/auth folder then create new file `Register.jsx` file & add the code

```javascript
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../../redux/api/authApi";
import { toast } from "react-hot-toast";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [register, { isLoading, error }] = useRegisterMutation();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();

    const signUpData = {
      name,
      email,
      password,
    };

    register(signUpData);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded bg-body" onSubmit={submitHandler}>
          <h2 className="mb-4">Register</h2>

          <div className="mb-3">
            <label htmlFor="name_field" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name_field"
              className="form-control"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email_field" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label for="password_field" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <button
            id="register_button"
            type="submit"
            className="btn w-100 py-2"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "REGISTER"} REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
```

- Go to frontend/src/redux/api folder then create new file `userApi.js` & Add this code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setUser } from "../features/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => `/me`,
      transformResponse: (result) => result.user,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetMeQuery } = userApi;
```

- Go to frontend/src/redux & create new folder `features` then create new file `userSlice.js` & add this code :

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUser, setIsAuthenticated } = userSlice.actions;
```

- Go to frontend/src/components/layout/Header.jsx file & update the code :

```javascript
import { useSelector } from "react-redux";
import { useGetMeQuery } from "../../redux/api/userApi";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoading } = useGetMeQuery();

  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3 ps-5">
        <div className="navbar-brand">
          <a href="/">
            <img src="../images/shopit_logo.png" alt="ShopIT Logo" />
          </a>
        </div>
      </div>
      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search />
      </div>
      <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <a href="/cart" style={{ textDecoration: "none" }}>
          <span id="cart" class="ms-3">
            {" "}
            Cart{" "}
          </span>
          <span className="ms-1" id="cart_count">
            0
          </span>
        </a>

        {user ? (
          <div className="ms-4 dropdown">
            <button
              className="btn dropdown-toggle text-white"
              type="button"
              id="dropDownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <figure className="avatar avatar-nav">
                <img
                  src={
                    user?.avatar
                      ? user?.avatar?.url
                      : "../images/default_avatar.jpg"
                  }
                  alt="User Avatar"
                  className="rounded-circle"
                />
              </figure>
              <span>{user?.name}</span>
            </button>
            <div
              className="dropdown-menu w-100"
              aria-labelledby="dropDownMenuButton"
            >
              <Link className="dropdown-item" to="/admin/dashboard">
                {" "}
                Dashboard{" "}
              </Link>

              <Link className="dropdown-item" to="/me/orders">
                {" "}
                Orders{" "}
              </Link>

              <Link className="dropdown-item" to="/me/profile">
                {" "}
                Profile{" "}
              </Link>

              <Link className="dropdown-item text-danger" to="/">
                {" "}
                Logout{" "}
              </Link>
            </div>
          </div>
        ) : (
          !isLoading && (
            <Link to="/login" className="btn ms-4" id="login_btn">
              {" "}
              Login{" "}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Header;
```

- Go to frontend/src/redux/store.js file & update the code :

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { useReducer } from "./features/userSlice";

export const store = configureStore({
  reducer: {
    auth: useReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      authApi.middleware,
      userApi.middleware,
    ),
});
```

- Go to frontend/src/App.js file then update the code :

```javascript
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

- Go to frontend/src/redux/api/authApi.js file then update the code :

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => {
        return {
          url: "/register",
          method: "POST",
          body,
        };
      },
    }),
    login: builder.mutation({
      query: (body) => {
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
```

## Setup Cloudinary

- Install the cloudinary `npm i cloudinary --save`
- Go to backend/utils folder then create a new folder `cloudinary.js` file & add the code :

```javascript
import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config({ path: "backend/config/config.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const upload_file = (file, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      (result) => {
        resolve({
          public_id: result.public_id,
          url: result.url,
        });
      },
      {
        resource_type: "auto",
        folder,
      },
    );
  });
};

export const delete_file = async (file) => {
  const res = await cloudinary.uploader.destroy(file);

  if (res.result !== "ok") return true;
};
```

- Go to backend/controllers/authControllers.js file & update the code

```javascript
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";
import sendEmail from "../utils/sendEmail.js";
import { getResetPasswordTemplate } from "../utils/emailTemplates.js";
import crypto from "crypto";
import { upload_file } from "../utils/cloudinary.js";

// Register a User => /api/v1/register
export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  sendToken(user, 201, res);
});

// Login a User => /api/v1/login
export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});

// Logout User => /api/v1/logout
export const logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
// Upload User Avatar => /api/v1/me/upload_avatar
export const uploadAvatar = catchAsyncErrors(async (req, res, next) => {
  const avatarResponse = await upload_file(req.body.avatar, "shopit/avatars");

  const user = await User.findByIdAndUpdate(req?.user.id, {
    avatar: avatarResponse,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// Forgot password => /api/v1/password/forgot

export const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found with", 404));
  }

  const resetToken = user.resetPasswordToken();

  await user.save();

  const resetUrl = `${process.env.FRONTEND_URL}/api/v1/password/reset/${resetToken}`;
  const message = getResetPasswordTemplate(user?.name, resetUrl);
  try {
    await sendEmail({
      email: user.email,
      subject: "Shopit Password Recovery",
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    return next(new ErrorHandler(error?.message, 500));
  }
});

// Reset Password => /api/v1/password/reset/:token
export const resetPassword = catchAsyncErrors(async (req, res, next) => {
  // Creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Password reset token is invalid or has been expired",
        400,
      ),
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

//  Get Current User Profile => /api/v1/me
export const getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Update password => /api/v1/password/update
export const updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  user.password = req.body.Password;
  user.save();

  sendToken(user, 200, res);
});

// Update User Profile => /api/v1/me/update
export const updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
  });

  res.status(200).json({
    user,
  });
});

// Get All Users => /api/v1/admin/users
export const allUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get User Details => /api/v1/admin/user/:id

export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// Update User Details - Admin => /api/v1/admin/users/:id
export const updateUser = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// Delete User - Admin => /api/v1/admin/users/:id
export const deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("User not found with this id", 404));
  }

  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});
```

- Go to backend/routes/auth.js file & update the code :

```javascript
import express from "express";
import {
  allUsers,
  deleteUser,
  forgotPassword,
  getUserDetails,
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  updatePassword,
  updateProfile,
  updateUser,
  uploadAvatar,
} from "../controllers/authControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/upload_avatar").put(isAuthenticatedUser, uploadAvatar);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizedRoles("admin"), allUsers);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getUserDetails)
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateUser)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteUser);

export default router;
```

### Stripe Checkout Sessions, Tax & Shipping Rates

- Go to backend/controllers folder then create new file `paymentControllers.js` & add the code :

```javascript
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeCheckoutSession = catchAsyncErrors(
  async (req, res, next) => {
    const body = req.body;

    const line_items = body?.orderItems?.map((item) => {
      return {
        price_data: {
          currency: "pkr",
          product_data: {
            name: item?.name,
            images: [item.image],
            metadata: {
              id: item?.productId,
            },
          },
          unit_amount: item.price * 100,
        },
        quantity: item?.quantity,
      };
    });

    const shippingInfo = body?.shippingInfo;

    const shipping_rate =
      body?.itemsPrice >= 200 ? "" : "txr_1TEun0CiVmReUqwuHlTpup7O";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      success_url: `${process.env.FRONTEND_URL}/me/orders`,
      cancel_url: `${process.env.FRONTEND_URL}`,
      customer_email: req?.user?.email,
      client_reference_id: req?.user?._id.toString(),
      mode: "payment",
      metadata: { ...shippingInfo, itemsPrice: body?.itemsPrice },
      shipping_options: [
        {
          shipping_rate,
        },
      ],
      line_items,
    });

    res.status(200).json({
      url: session.url,
    });
  },
);
```

- Go to backend/routes folder then create a new file `payment.js` & add the code :

```javascript
import express from "express";

const router = express.Router();

import { isAuthenticatedUser } from "../middlewares/auth.js";
import { stripeCheckoutSession } from "../controllers/paymentControllers";

router
  .route("/payment/checkout_session")
  .post(isAuthenticatedUser, stripeCheckoutSession);

export default router;
```

- Go to backend/app.js file & update the code :

```javascript
import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

app.use(express.json());
app.use(cookieParser());

import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";
import paymentRoutes from "./routes/payment.js";

app.use("/api/v1", orderRoutes);

app.use("/api/v1", paymentRoutes);

app.use("/api/v1", authRoutes);

app.use("/api/v1", productRoutes);

app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`,
  );
});

// Unhandled Promise Rejection Handling

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
```

### Place Successful Payment

- Go to backend/controllers/paymentControllers.js file & update the code :

```javascript
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Stripe from "stripe";
import Order from "../models/orderModel.js";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeCheckoutSession = catchAsyncErrors(async (req, res) => {
  const body = req.body;

  const line_items = body?.orderItems?.map((item) => {
    return {
      price_data: {
        currency: "pkr",
        product_data: {
          name: item?.name,
          images: [item.image],
          metadata: {
            id: item?.productId,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item?.quantity,
    };
  });

  const shippingInfo = body?.shippingInfo;

  const shipping_rate =
    body?.itemsPrice >= 200 ? "" : "txr_1TEun0CiVmReUqwuHlTpup7O";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],

    success_url: `${process.env.FRONTEND_URL}/me/orders`,
    cancel_url: `${process.env.FRONTEND_URL}`,
    customer_email: req?.user?.email,
    client_reference_id: req?.user?._id.toString(),
    mode: "payment",
    metadata: { ...shippingInfo, itemsPrice: body?.itemsPrice },
    shipping_options: [
      {
        shipping_rate,
      },
    ],
    line_items,
  });

  res.status(200).json({
    url: session.url,
  });
});

const getOrderItems = async (line_items) => {
  return new Promise((resolve, reject) => {
    let cartItems = [];

    line_items?.data?.forEach(async (item) => {
      const product = await stripe.products.retrieve(item?.price?.product);
      const productId = product?.metadata?.id;

      cartItems.push({
        product: productId,
        quantity: item?.quantity,
        price: item?.price?.unit_amount / 100,
        name: product?.name,
        image: product?.images[0],
      });

      if (cartItems.length === line_items?.data?.length) {
        resolve(cartItems);
      }
    });

    resolve(cartItems);
  });
};

export const stripeWebhook = catchAsyncErrors(async (req, res, next) => {
  const signature = req.headers["stripe-signature"];
  const event = stripe.webhooks.constructEvent(
    req.rawBody,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET,
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const line_items = await stripe.checkout.sessions.listLineItems(
      session?.id,
    );

    const orderItems = await getOrderItems(line_items);

    const user = session?.client_reference_id;

    const totalPrice = session.amount_total / 100;
    const taxAmount = session.total_details.amount_tax / 100;
    const shippingPrice = session.total_details.amount_shipping / 100;
    const itemsPrice = session.metadata.itemsPrice;

    const shippingInfo = {
      address: session.metadata.address,
      city: session.metadata.city,
      state: session.metadata.state,
      country: session.metadata.country,
      postalCode: session.metadata.postalCode,
      phoneNo: session.metadata.phoneNo,
    };

    const paymentInfo = {
      id: session.payment_intent,
      status: session.payment_status,
    };

    const orderData = {
      shippingInfo,
      orderItems,
      user,
      paymentInfo,
      paymentMethod: "Card",
      itemsPrice,
      taxAmount,
      shippingPrice,
      totalPrice,
    };

    await Order.create(orderData);

    res.status(200).json({
      success: true,
      orderItems,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
});
```

- Go to backend/routes/payments.js file & update the code :

```javascript
import express from "express";

const router = express.Router();

import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  stripeCheckoutSession,
  stripeWebhook,
} from "../controllers/paymentControllers";

router
  .route("/payment/checkout_session")
  .post(isAuthenticatedUser, stripeCheckoutSession);

router.route("/payment/webhook").post(stripeWebhook);

export default router;
```

- Go to backend/app.js file & update the code :

```javascript
import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

app.use(
  express.json({
    limit: "10mb",
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  }),
);
app.use(cookieParser());

import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";
import paymentRoutes from "./routes/payment.js";

app.use("/api/v1", orderRoutes);

app.use("/api/v1", paymentRoutes);

app.use("/api/v1", authRoutes);

app.use("/api/v1", productRoutes);

app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`,
  );
});

// Unhandled Promise Rejection Handling

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
```

- Go to backend/controllers/paymentControllers.js file & update the code :

```javascript
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Stripe from "stripe";
import Order from "../models/orderModel.js";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeCheckoutSession = catchAsyncErrors(async (req, res) => {
  const body = req.body;

  const line_items = body?.orderItems?.map((item) => {
    return {
      price_data: {
        currency: "pkr",
        product_data: {
          name: item?.name,
          images: [item.image],
          metadata: {
            id: item?.productId,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item?.quantity,
    };
  });

  const shippingInfo = body?.shippingInfo;

  const shipping_rate =
    body?.itemsPrice >= 200 ? "" : "txr_1TEun0CiVmReUqwuHlTpup7O";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],

    success_url: `${process.env.FRONTEND_URL}/me/orders?order_success=true`,
    cancel_url: `${process.env.FRONTEND_URL}`,
    customer_email: req?.user?.email,
    client_reference_id: req?.user?._id.toString(),
    mode: "payment",
    metadata: { ...shippingInfo, itemsPrice: body?.itemsPrice },
    shipping_options: [
      {
        shipping_rate,
      },
    ],
    line_items,
  });

  res.status(200).json({
    url: session.url,
  });
});

const getOrderItems = async (line_items) => {
  return new Promise((resolve, reject) => {
    let cartItems = [];

    line_items?.data?.forEach(async (item) => {
      const product = await stripe.products.retrieve(item?.price?.product);
      const productId = product?.metadata?.id;

      cartItems.push({
        product: productId,
        quantity: item?.quantity,
        price: item?.price?.unit_amount / 100,
        name: product?.name,
        image: product?.images[0],
      });

      if (cartItems.length === line_items?.data?.length) {
        resolve(cartItems);
      }
    });

    resolve(cartItems);
  });
};

export const stripeWebhook = catchAsyncErrors(async (req, res, next) => {
  const signature = req.headers["stripe-signature"];
  const event = stripe.webhooks.constructEvent(
    req.rawBody,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET,
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const line_items = await stripe.checkout.sessions.listLineItems(
      session?.id,
    );

    const orderItems = await getOrderItems(line_items);

    const user = session?.client_reference_id;

    const totalPrice = session.amount_total / 100;
    const taxAmount = session.total_details.amount_tax / 100;
    const shippingPrice = session.total_details.amount_shipping / 100;
    const itemsPrice = session.metadata.itemsPrice;

    const shippingInfo = {
      address: session.metadata.address,
      city: session.metadata.city,
      state: session.metadata.state,
      country: session.metadata.country,
      postalCode: session.metadata.postalCode,
      phoneNo: session.metadata.phoneNo,
    };

    const paymentInfo = {
      id: session.payment_intent,
      status: session.payment_status,
    };

    const orderData = {
      shippingInfo,
      orderItems,
      user,
      paymentInfo,
      paymentMethod: "Card",
      itemsPrice,
      taxAmount,
      shippingPrice,
      totalPrice,
    };

    await Order.create(orderData);

    res.status(200).json({
      success: true,
      orderItems,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
});
```

- Go to backend/controllers/productControllers file and add the code :

```javascript
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Product from "../models/product.js";
import APIFilters from "../utils/apiFilters.js";
import ErrorHandler from "../utils/errorHandler.js";

// create new product => /api/v1/products

export const getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 4;
  const ApiFilters = new APIFilters(Product, req.query).search().filter();
  let products = await ApiFilters.query;
  let filteredProductsCount = products.length;
  ApiFilters.pagination(resPerPage);
  return next(new ErrorHandler("Hello", 400));
  products = await ApiFilters.query.clone();
  res.status(200).json({ products, filteredProductsCount, resPerPage });
});

// Create new product => /api/v1/admin/products
export const newProducts = catchAsyncErrors(async (req, res) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
});

// Get single product details => /api/v1/products/:id
export const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req?.params?.id).populate(
    "reviews.user",
  );
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    product,
  });
});

// Update product details => /api/v1/products/:id
export const updateProduct = catchAsyncErrors(async (req, res) => {
  let product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    product,
  });
});

// Delete product => /api/v1/products/:id
export const deleteProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await product.delete();
  res.status(200).json({
    message: "Product deleted successfully",
  });
});

// Create/Update product Review => /api/v1/reviews
export const createProductReview = catchAsyncErrors(async (req, res) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req?.user?._id,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  const isReviewed = product?.reviews?.find(
    (rev) => rev.user.toString() === req.user._id.toString(),
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req?.user?._id.toString()) {
        ((rev.rating = rating), (rev.comment = comment));
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Delete product Review => /api/v1/admin/reviews
export const deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req?.query?.productId);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  const reviews = product?.reviews?.filter(
    (rev) => rev._id.toString() !== req?.query?.id.toString(),
  );

  const numOfReviews = reviews.length;

  const ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    reviews.length;

  await Product.findByIdAndUpdate(
    req?.query?.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    },
  );

  res.status(200).json({
    success: true,
  });
});

// Get product reviews => /api/v1/reviews

export const getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    reviews: product.reviews,
  });
});
```
