import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
// import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<Search />} />
        {/* For User - Private Route */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} /> {/*Nested Route*/}
          <Route path="user/orders" element={<Orders />} /> {/*Nested Route*/}
          <Route path="user/profile" element={<Profile />} /> {/*Nested Route*/}
        </Route>
        {/* For Admin - Private Route */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} /> {/*Nested Route*/}
          <Route
            path="admin/create-category"
            element={<CreateCategory />}
          />{" "}
          {/*Nested Route*/}
          <Route path="admin/create-product" element={<CreateProduct />} />{" "}
          {/*Nested Route*/}
          <Route path="admin/product/:slug" element={<UpdateProduct />} />{" "}
          {/*Nested Route*/}
          <Route path="admin/products" element={<Products />} />{" "}
          {/*Nested Route*/}
          {/* <Route path='admin/users' element={<Users/>}/>                    Nested Route */}
          <Route path="admin/orders" element={<AdminOrders />} />{" "}
          {/*Nested Route*/}
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
