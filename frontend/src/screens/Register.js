import React from "react";
import { Link } from "react-router-dom";    
import Header from "./../components/Header";

const Register = () => {
    window.scrollTo(0, 0);

    return(
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <form className="Login col-md-8 col-lg-4 col-11">
                    <input type="text" placeholder="Usuario"/>
                    <input type="email" placeholder="Correo"/>
                    <input type="password" placeholder="Contraseña"/>

                    <button type="submit">Registrarse</button>
                    <p>
                        <Link to={"/login"}>
                            Tengo cuenta <strong>Iniciar Sesión</strong>
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Register;
