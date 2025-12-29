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
