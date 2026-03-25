import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { useReducer } from "./features/userSlice";
import { cartReducer } from "./features/cartSlice";
import { orderApi } from "./api/orderApi";

export const store = configureStore({
  reducer: {
    auth: useReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      authApi.middleware,
      userApi.middleware,
      orderApi.middleware,
    ),
});
