import express from "express";

const app = express();
import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });

import productRoutes from "./routes/products.js";

app.use("/api/v1", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});
