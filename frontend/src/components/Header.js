import React from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../Redux/Actions/userActions";

const Header = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <div>
            {/* Top Header */}
            <div className="Announcement">
                <div className="container">
                    <div className="col-12 d-flex justify-content-center justify-content-lg">
                        <p>¡Envios a todo el país!</p>
                    </div>
                </div>
            </div>
            {/* Header */}
            <div className="header">
                <div className="container">
                    {/* MOBILE HEADER */}
                    <div className="mobile-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 d-flex align-items-center">
                                    <Link className="navbar-brand" to="/">
                                        <img alt="logo" src="https://res.cloudinary.com/dkzwt9sfa/image/upload/v1630566824/ecommerce/logo" />
                                    </Link>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end">
                                    {
                                        userInfo ? (
                                            <div className="btn-group">
                                        <button
                                            type="button"
                                            className="name-button dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fas fa-user"></i>
                                        </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropwdown-item" to="/profile">
                                            Perfil
                                        </Link>
                                        <Link className="dropwdown-item" to="#" onClick={logoutHandler}>
                                            Cerrar Sesión
                                        </Link>
                                    </div>
                                </div>
                                        )
                                        : (
                                            <div className="btn-group">
                                        <button
                                            type="button"
                                            className="name-button dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fas fa-user"></i>
                                        </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropwdown-item" to="/login">
                                            Inicia Sesión
                                        </Link>
                                        <Link className="dropwdown-item" to="/register">
                                            Registrate
                                        </Link>
                                    </div>
                                </div>
                                        )

                                    }
                                    
                                <Link to="/cart" className="cart-mobile-icon">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="badge">{cartItems.length}</span>
                                </Link>
                            </div>
                            <div className="col-12 d-flex align-items-center">
                                <form className="input-group">
                                    <input
                                        type="search"
                                        className="form-control rounded search"
                                        placeholder="Buscar productos..."
                                    />
                                    <button type="submit" className="search-button">
                                        Buscar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PC HEADER */}
                <div className="pc-header">
                    <div className="row">
                        <div className="col-md-3 cold-4 d-flex align-items-center">
                            <Link className="navbar-brand" to="/">
                                <img
                                    alt="logo"
                                    src="/images/logo.png"
                                    style={{ width: '80px' }}
                                    height="80"
                                />
                            </Link>
                        </div>
                        <div className="col-md-6 col-8 d-flex align-items-center">
                            <form className="input-group" style={{ marginLeft: '100px' }}>
                                <input
                                    type="search"
                                    className="form-control rounded search"
                                    placeholder="Buscar productos..."
                                />
                                <button type="submit" className="search-button">
                                    Buscar
                                </button>
                            </form>
                        </div>
                        <div className="col-md-3 d-flex justify-content-end">
                            {
                                userInfo ?(
                                    <div className="btn-group"  style={{ marginLeft: '600px' }}>
                                <button
                                    type="button"
                                    className="name-button dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    
                                >
                                    Hola, {userInfo.name}
                                </button>
                                <div className="dropdown-menu">
                                    <Link className="dropwdown-item" to="/profile">
                                        Perfil
                                    </Link>
                                    <p></p>
                                    <Link className="dropwdown-item" to="#" onClick={logoutHandler}>
                                        Cerrar Sesión
                                    </Link>
                                </div>
                            </div>
                                ) :
                                (
                                    <>
                                    <div style={{ marginTop: '30px' }}>
                                        <Link to="/register"style={{ marginLeft: '450px'}}>
                                            Registrate
                                        </Link>
                                        <Link to="/login"style={{ marginLeft: '50px'}}>
                                            Login
                                        </Link>
                                    </div>
                                    </>
                                )
                            }
                            <Link to="/cart">
                                <i className="fas fa-shopping-bag" style={{ marginTop: '30px',marginLeft: '40px' }}></i>
                                <span className="badge" style={{ color: 'black', fontSize: '14px', position: 'absolute', marginTop:'10px' }}>{cartItems.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};
export default Header;
