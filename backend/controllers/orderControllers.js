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
    "name email"
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
