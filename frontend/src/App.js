import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/productDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/profile";
import UpdateProfile from "./components/user/UpdateProfile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UploadAvatar from "./components/user/UploadAvatar";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentMethod from "./components/cart/PaymentMethod";
import MyOrders from "./components/order/MyOrders";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />

            <Route
              path="/me/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/update-profile"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Routes>
            path="/me/update-avatar" element=
            {
              <ProtectedRoute>
                <UploadAvatar />
              </ProtectedRoute>
            }
          </Routes>
          <Routes>
            path="/me/update-password" element=
            {
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          </Routes>
          <Routes path="/cart" element={<Cart />} />
          <Routes
            path="/shipping"
            element={
              <ProtectedRoute>
                <Shipping />
              </ProtectedRoute>
            }
          />
          <Routes
            path="/confirm_order"
            element={
              <ProtectedRoute>
                <ConfirmOrder />
              </ProtectedRoute>
            }
          />
          <Routes
            path="/payment_method"
            element={
              <ProtectedRoute>
                <PaymentMethod />
              </ProtectedRoute>
            }
          />
          <Routes
            path="/me/orders"
            element={
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            }
          />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
