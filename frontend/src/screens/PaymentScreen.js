import React, { useState } from "react";
import Header from "./../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../Redux/Actions/CartActions";

const PaymentScreen = () => {
    window.scrollTo(0, 0);
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    if (!shippingAddress.address) {
        navigate("/shipping");
    }
    const [paymentMethod, setPaymentMethod] = useState("Paypal");
    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/placeorder")
    };

    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center">
                <form
                    className="Login2 col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <h6> Seleccionar método de pago</h6>
                    <div className="payment-container">
                        <div className="radio-container">
                            <input className="form-check-input" type="radio" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <label className="form-check-label">Tajeta de Débito o Tarjeta de Crédito</label>
                        </div>
                        <div className="radio-container">
                            <input className="form-check-input" type="radio" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <label className="form-check-label">Transferencia Bancaria</label>
                        </div>
                    </div>

                    <button type="submit">
                        Continuar
                    </button>
                </form>
            </div>
        </>
    );
};

export default PaymentScreen;