import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import NewTest from "./pages/NewTest";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
function App() {
    const admin = useSelector((state) => state.user.currentUser.isAdmin);
    console.log(admin)
    return (
        <Router >
            <Topbar />
            <div className="container">
                <Sidebar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/newproduct" element={<NewProduct />} />
                    <Route path="/login" element={admin ? <Navigate to="/" /> : <Login />} />
            </div>
        </Routes>

    </Router >
  );
}

export default App;
