import React, { useEffect } from "react";
import Header from "../components/Header";
import {Link, useParams, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "./../Redux/Actions/CartActions";


const CartScreen = () => {
    window.scrollTo(0, 0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productId } = useParams();
    const location = useLocation();
    const qty = location.search ? Number((location.search).split('=')[1]) : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const checkOutHandler = () => {
        navigate("/login?redirect=shipping")
    }

    const removeFromCartHandle = (id) => {
        dispatch (removeFromCart(id));
    };


    return (
        <>
            <Header />
            {/* Cart */}
            <div className="container">
                {cartItems.length === 0 ? (
                    <div className="alert alert-info text-center mt-3">
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
                    </div>
                ) : (
                        <>
                            <div className="alert alert-info text-center mt-3">
                                Total de productos en tu carrito
                                <Link className="text-success mx-2" to="/cart">
                                    {(cartItems.length)}
                                </Link>
                            </div>
                            {/* Cart Items */}
                                {
                                    cartItems.map((item) => (
                                        <div className="cart iterm row">
                                            <div onClick={() => removeFromCartHandle(item.product)}
                                                className="remove-button d-flex justify-content-center align-items-center"
                                            >
                                                <i className="fas fa-times"></i>
                                            </div>
                                            <div className="cart-image col-md-3">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="cart-text col-md-5 d-flex align-items-center">
                                                <Link to={`/products/${item.product}`}>
                                                    <h4 style={{ fontSize: '1em' }}>{item.name}</h4>
                                                </Link>
                                            </div>
                                            <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column align-items-center">
                                                <h6>Cantidad</h6>
                                                <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                                    <option key={x + 1} value={x + 1}>
                                                                        {x + 1}
                                                                    </option>
                                                                ))}
                                                </select>
                                            </div>
                                            <div className="cart-price col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex align-items-center">
                                                <h6>Precio: </h6>
                                                <h5 style={{ fontSize: '1em' }}>${item.price}</h5>
                                            </div>
                                        </div>
                                    ))
                                }

                                {/* End of cart iterms */}
                                    <div className="total" style={{ textAlign: 'right' , marginTop: '20px' }}>
                                        <span className="sub">total:</span>
                                        <span className="total*price">${total}</span>
                                    </div>
                                    <hr />
                                    <div className="cart-buttons d-flex align-items-center row">
                                        <Link to="/" className="col-md-6">
                                            <button>Continuar comprando</button>
                                        </Link>
                                        {
                                            total > 0 && (
                                                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                                                    <button onClick={checkOutHandler}>
                                                        Proceder al pago
                                                    </button>
                                                </div>
                                        )}
                                    </div>
                        </>
                    )}
            </div>
        </>
    );
}

export default CartScreen;