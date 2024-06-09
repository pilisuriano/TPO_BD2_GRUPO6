import React from "react";
import {Link} from "react-router-dom";
import Header from "./../components/Header";

const PlaceOrderScreen = () => {
    window.scrollTo(0, 0);

    const placeOrderHandler = (e) => {
        e.preventDefault();
    };

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
                                <p>Administrador</p>
                                <p>admin@example.com</p>
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
                                <p>Envio: Argentina</p>
                                <p>Método de pago: Paypal</p>
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
                                <p>Direccion: Calle Falsa 123, Sprinfield, Estados Unidos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row order-products justify-content-between">
                    <div className="col-lg-8">
                        {/* <Message variant="alert-info mt-5">Tu carrito está vacío</Message>*/}

                        <div className="order-product row">
                            <div className="col-md-3 col-6">
                                <img src="/images/8.png" alt ="product" />
                            </div>
                            <div className="col-md-5 col-6 d-flex align-items-center">
                                <Link to={"/"}>
                                    <h6>Girl Nike Shoes</h6>
                                </Link>
                            </div>
                            <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column">
                                <h4>Cantidad</h4>
                                <h6>4</h6>
                            </div>
                            <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex flex-column">
                                <h4>Subtotal</h4>
                                <h6>$200</h6>
                            </div>
                        </div>
                    </div>
                    {/*total*/}
                    <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Productos</strong>
                                    </td>
                                    <td>$200</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Envío</strong>
                                    </td>
                                    <td>$20</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Total</strong>
                                    </td>
                                    <td>$220</td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="submit" onClick={placeOrderHandler}>
                            <Link to="/order" className="text-white">
                                Realizar pedido
                            </Link>
                        </button>
                        {/* <div className="my-3 col-12}>
                            <Message variant ="alert-danger">{error}</Message>
                            </div>*/}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlaceOrderScreen;