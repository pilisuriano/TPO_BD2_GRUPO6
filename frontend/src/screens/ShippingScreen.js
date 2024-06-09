import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const ShippingScreen = () => {
    window.scrollTo(0, 0);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return(
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center">
                <form
                    className="Login col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <h6>Dirección de envío</h6>
                    <input type="text" placeholder="Ingresar dirección" />
                    <input type="text" placeholder="Ingresar ciudad" />
                    <input type="text" placeholder="Ingresar código postal" />
                    <input type="text" placeholder="Ingresar país" />
                    <button type="submit">
                        <Link to="/payment" className="text-white">
                            Continuar
                        </Link>
                    </button>
                </form>
            </div>
        </>
    );
};

export default ShippingScreen;
