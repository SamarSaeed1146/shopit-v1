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
