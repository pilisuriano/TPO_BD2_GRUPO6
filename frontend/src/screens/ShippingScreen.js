import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../Redux/Actions/CartActions";
import { useNavigate } from "react-router-dom";

const ShippingScreen = () => {
    window.scrollTo(0, 0);
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        navigate("/payment")
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
                    <input type="text" placeholder="Ingresar dirección" value={address} required onChange={(e) => setAddress(e.target.value)} />
                    <input type="text" placeholder="Ingresar ciudad" value={city} required onChange={(e) => setCity(e.target.value)} />
                    <input type="text" placeholder="Ingresar código postal" value={postalCode} required onChange={(e) => setPostalCode(e.target.value)}  />
                    <input type="text" placeholder="Ingresar país" value={country} required onChange={(e) => setCountry(e.target.value)} />
                    <button type="submit">
                        Continuar
                    </button>
                </form>
            </div>
        </>
    );
};

export default ShippingScreen;
