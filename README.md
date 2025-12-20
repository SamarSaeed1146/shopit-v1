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
