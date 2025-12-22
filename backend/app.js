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
