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
