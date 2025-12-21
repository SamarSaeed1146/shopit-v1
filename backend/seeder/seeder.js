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
