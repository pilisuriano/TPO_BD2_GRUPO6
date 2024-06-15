import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";    
import Header from "./../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/Actions/userActions";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";

const Register = () => {
    window.scrollTo(0, 0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split('=')[1] : '/';
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name,email, password));
    };
    const userRegister = useSelector((state) => state.userRegister);
    const {loading, error, userInfo} = userRegister;
    useEffect(() => {
        if(userInfo){
            navigate(redirect);
        }
    }, [navigate, userInfo, redirect]);

    return(
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center">
            {error && <Message variant= "alert-danger">{error}</Message>}
            {loading && <Loading variant="alert-info">Loading...</Loading>}
                <form className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
                    <input type="text" placeholder="Usuario" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <button type="submit">Registrarse</button>
                    <p>
                        <Link to={redirect ? `/login?redirect=${redirect}`: "/login"}>
                            Tengo cuenta <strong>Iniciar Sesión</strong>
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Register;
