import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "./catchAsyncErrors.jsJ";
import user from "../models/user.js";

export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);
  next();
});

// Authorize roles
export const authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: (${req.user.role}) is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};
