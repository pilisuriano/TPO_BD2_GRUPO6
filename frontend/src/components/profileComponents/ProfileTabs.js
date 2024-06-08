import React from "react";

const ProfileTabs = () => {
    return (
        <>
            <form className="row form-container">
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-fn">Usuario</label>
                        <input className="form control" type="text" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form">
                        <label for="account-email">Dirección de email</label>
                        <input className="form control" type="email" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-pass">Nueva contraseña</label>
                        <input className="form control" type="password" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <label for="account-confirm-pass">Confirmar contraseña</label>
                        <input className="form control" type="password" />
                    </div>
                </div>
                <button type="submit">Actualizar perfil</button>
            </form>
        </>
    );
};

export default ProfileTabs;