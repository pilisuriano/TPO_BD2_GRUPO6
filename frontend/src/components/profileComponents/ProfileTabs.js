import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from './../LoadingError/Error';
import Loading from './../LoadingError/Loading';
import Toast from './../LoadingError/Toast';
import { toast } from 'react-toastify';
import { updateUserProfile } from '../../Redux/Actions/userActions';

const ProfileTabs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const toastId =React.useRef(null);

    const dispatch = useDispatch();
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,//means 2sec
    }

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user} = userDetails;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { loading: updateLoading} = userUpdateProfile;

    useEffect(() => {
        if (user) {
            setName((user.name) || '');
            setEmail((user.email) || '');
        } 
    }, [dispatch, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        //Password match
        if (password !== confirmPassword) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error('Las contraseñas no coinciden', Toastobjects);
            }
        } else {
            //UPDATE PROFILE
            dispatch(updateUserProfile({ id: user._id, name, email, password }));
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success('Perfil actualizado', Toastobjects);
            }
        }
    };

    return (
        <>
        <Toast />
        {error && <Message variant= "alert-danger">{error}</Message>}
        {updateLoading  && <Loading />}
            <form className="row form-container justify-content-center" onSubmit={submitHandler}>
                <div className="col-md-4">
                    <div className="form">
                        <label for="account-fn">Usuario</label>
                        <input className="form control" type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="form">
                        <label for="account-email">Dirección de email</label>
                        <input className="form control" type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form">
                        <label for="account-pass">Nueva contraseña</label>
                        <input className="form control" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                
                <div className="col-md-5">
                    <div className="form">
                        <label for="account-confirm-pass">Confirmar contraseña</label>
                        <input className="form control" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>
                <button type="submit">Actualizar perfil</button>
            </form>
        </>
    );
};

export default ProfileTabs;