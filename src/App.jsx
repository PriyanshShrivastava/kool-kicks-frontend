import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import "./index.css";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoute";
import DashBoard from "./pages/users/DashBoard";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import AdminDashboard from "./pages/adminPage/AdminDashboard";
import PrivateAdminRoute from "./components/PrivateRoutes/PrivateAdminRoute";
import CreateCategory from "./pages/adminPage/CreateCategory";
import CreateProduct from "./pages/adminPage/CreateProduct";
import ProductPage from "./pages/adminPage/ProductPage";
import UpdateProduct from "./pages/adminPage/UpdateProduct";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/users/CartPage";
import UpdateProfile from "./pages/users/UpdateProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<DashBoard />} />
          <Route path="user/edit-profile" element={<UpdateProfile />} />
        </Route>
        <Route path="/dashboard" element={<PrivateAdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<ProductPage />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
