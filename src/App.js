import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  const token = useSelector((state) => state.user.currentUser?.accessToken);
  console.log(admin)
  console.log(token)
  return (
    <Router >
      <Topbar />
      <div className="container">
        <Sidebar />

        <Routes>
          <Route path="/login" element={admin ? <Navigate to="/" /> : <Login />} />
          <Route path="/" element={admin ? <Home /> : <Navigate to="/login" />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />


        </Routes>
      </div>

    </Router >
  );
}

export default App;
