import React from "react";
import "./App.css";
import "./responsive.css"
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import CreateProductScreen from "./screens/CreateProductScreen";
import ProductListScreen from "./screens/ProductListScreen";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} exact />
                <Route path="/search/:keyword" element={<HomeScreen />} exact />
                <Route path="/page/:pagenumber" element={<HomeScreen />} exact />
                <Route path="/search/:keyword/page/:pageNumber" element={<HomeScreen />} exact />
                <Route path="/products/:id" element={<SingleProduct />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart/:id?" element={<CartScreen />} />
                <Route path="/shipping" element={<ShippingScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/payment" element={<PaymentScreen />} />
                <Route path="/placeorder" element={<PlaceOrderScreen />} />
                <Route path="/order/:id" element={<OrderScreen />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/createproduct" element={<CreateProductScreen />} />
                <Route path="/productlist" element={<ProductListScreen />} />
            </Routes>
        </Router>
    );
};

export default App;