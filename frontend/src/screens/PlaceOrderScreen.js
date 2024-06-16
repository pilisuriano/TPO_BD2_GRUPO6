import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Header from "./../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Message from './../components/LoadingError/Error';
import { ORDER_CREATE_RESET} from "../Redux/Constants/orderConstants";
import { createOrder } from "../Redux/Actions/OrderActions";

const PlaceOrderScreen = () => {
    window.scrollTo(0, 0);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    const navigate = useNavigate();

    // Calculate prices
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);};

    cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

    cart.shippingPrice = addDecimals(3200);
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice)).toFixed(2);

    const orderCreate = useSelector((state) => state.orderCreate);
    const {order, success, error} = orderCreate;    

    useEffect(() => {   
        if(success) {
            navigate(`/order/${order._id}`);
            dispatch({ type: ORDER_CREATE_RESET });
        }
    }, [navigate,dispatch,success,order]);

    const placeOrderHandler = () => {
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                totalPrice: cart.totalPrice,
            })
        );
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="row order-detail">
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Cliente</strong>
                                </h5>
                                <p>{userInfo.name}</p>
                                <p>{userInfo.email}</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-truck-moving"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Información de orden</strong>
                                </h5>
                                <p>Envio: {cart.shippingAddress.country}</p>
                                <p>Método de pago: {cart.paymentMethod}</p>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-max-marker-alt"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Enviar a</strong>
                                </h5>
                                <p>Dirección: {cart.shippingAddress.city}, {cart.shippingAddress.address}, {cart.shippingAddress.postalCode}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row order-products justify-content-between">
                    <div className="col-lg-8">
                        {
                            cart.cartItems.length === 0 ? (
                                <Message variant="alert alert-info mt-5">Tu carrito está vacío</Message>
                            ) : (
                                    <>
                                    {
                                        cart.cartItems.map((item, index) => (
                                            <div className="order-product row" key={index}>
                                                <div className="col-md-3 col-6">
                                                    <img src={item.image} alt={item.name}  style={{width: '100px'}} />
                                                </div>
                                                <div className="col-md-5 col-6 d-flex align-items-center">
                                                    <Link to={`/products/${item.product}`}>
                                                        <h6>{item.name}</h6>
                                                    </Link>
                                                </div>
                                                <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column" >
                                                    <h4>Cantidad</h4>
                                                    <h6>{item.qty}</h6>
                                                </div>
                                                <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex flex-column">
                                                    <h4>Subtotal</h4>
                                                    <h6>${item.qty * item.price}</h6>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    </>
                                )
                        }
                        {/* <Message variant="alert-info mt-5">Tu carrito está vacío</Message>*/}
                    {/*total*/}
                    <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Productos</strong>
                                    </td>
                                    <td>${cart.itemsPrice}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Envío</strong>
                                    </td>
                                    <td>${cart.shippingPrice}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Total</strong>
                                    </td>
                                    <td>${cart.totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            cart.cartItems.length === 0 ? null: (
                                <button type="submit" onClick={placeOrderHandler}>
                                    Realizar pedido
                                </button>
                            )
                        }
                        {
                            error && (
                                <div className="my-3 col-12">
                                    <Message variant ="alert-danger">{error}</Message>
                                </div>
                            )
                        }
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default PlaceOrderScreen;