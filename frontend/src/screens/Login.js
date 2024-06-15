import React from "react";
import {Link} from "react-router-dom";
import Header from "./../components/Header";
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {login} from "./../Redux/Actions/userActions";
import Message from "./../components/LoadingError/Error";
import Loading from './../components/LoadingError/Loading';
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    window.scrollTo(0, 0);
    const [email, setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split('=')[1] : '/';
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };
    const userLogin = useSelector((state) => state.userLogin);
    const {loading, error, userInfo} = userLogin;
    useEffect(() => {
        if(userInfo){
            navigate(redirect);
        }
    }, [navigate, userInfo, redirect]);
    
    return (
        <>
            <Header />
            <div className="container d-flex flex-column jutify-content-center align-items-center">
                {error && <Message variant= "alert-danger">{error}</Message>}
                {loading && <Loading variant="alert-info">Loading...</Loading>}
                <form className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                    <p>
                        <Link to={redirect ? `/register?redirect=${redirect}`: "/register"}>Crear una cuenta</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Login;
