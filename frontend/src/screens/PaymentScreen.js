import React from "react";
import {Link} from "react-router-dom";
import Header from "./../components/Header";

const PaymentScreen = () => {
    window.scrollTo(0, 0);

    const subtmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center">
                <form
                    className="Login2 col-md-8 col-lg-4 col-11"
                    onSubmit={subtmitHandler}
                >
                    <h6> Seleccionar método de pago</h6>
                    <div className="payment-container">
                        <div className="radio-container">
                            <input className="form-check-input" type="radio" value="Paypal" />
                            <label className="form-check-label">Paypal o Tarjeta de Crédito</label>
                        </div>
                    </div>

                    <button type="submit">
                        <Link to="/placeorder" className="text-white">
                            Continuar
                        </Link>
                    </button>
                </form>
            </div>
        </>
    );
};

export default PaymentScreen;