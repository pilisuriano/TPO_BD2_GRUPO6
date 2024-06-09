import React from "react";
import Header from "../components/Header";
import {Link} from "react-router-dom";

const CartScreen = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header />
            {/* Cart */}
            <div className="container">
                {/* <div className="alert alert-info text-center mt-3">
                    Tu carrito está vacio
                    <Link 
                        className="btn btn-success mx-5 ´x-5 py-3"
                        to="/"
                        style={{
                            fontSize: "12px",
                        }}
                    >
                        COMPRAR AHORA
                    </Link>
                </div> */}
                <div className="alert alert-info text-center mt-3">
                    Total de productos en tu carrito
                    <Link className="text-success mx-2" to="/cart">
                        (4)
                    </Link>
                </div>
                {/* Cart Items */}
                <div className="cart iterm row">
                    <div className="remove-button d-flex justify-content-center align-items-center">
                        <i className="fas fa-times"></i>
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                    <Link to="#">
                        <h4> Nike Girls Shoe</h4>
                    </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column align-items-center">
                    <h6>Cantidad</h6>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="cart-price col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex align-items-center">
                    <h6>Subtotal</h6>
                    <h5>$486</h5>
                </div>
            </div>

            {/* End of cart iterms */}
            <div className="total">
                <span className="sub">total:</span>
                <span className="total*price">$486</span>
            </div>
            <hr />
            <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                <button>
                    <Link to="/shipping" className="text-white">
                        Proceder al pago
                    </Link>
                </button>
            </div>
        </div>
        </>
    );
};

export default CartScreen;