import React, { useEffect } from "react";
import Header from "../components/Header";
import ProfileTabs from "../components/profileComponents/ProfileTabs";
import Orders from "../components/profileComponents/Orders";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../Redux/Actions/userActions";
import moment from 'moment';
import 'moment/locale/es';
import { listMyOrders } from "../Redux/Actions/OrderActions";
import ProductListScreen from "./ProductListScreen";
import { Link } from "react-router-dom";

moment.locale('es');

const ProfileScreen = () => {
    window.scrollTo(0, 0);
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    const orderListMy = useSelector((state) => state.orderListMy);
    const {loading,error,orders} = orderListMy;

    useEffect(() => {
        dispatch(listMyOrders());
        dispatch(getUserDetails("profile"));
    }, [dispatch, userInfo]);

    const handleCreateButtonClick = () => {
        setShowCreateButton(false); // Ocultar el botón al hacer clic
    };

    return (
        <>
            <Header />
            <div className="container mt-lg-5 mt-3">
                <div className="row align-items-start">
                    <div className="col-lg-4 p-0 shadow">
                        <div className="author card pb-0 pb-md-3">
                            <div className="author-card-cover"></div>
                            <div className="author-card-profile row">
                                <div className="author-card-avatar col-md-5">
                                    <img src="/images/user.png" alt="userprofileimage" />
                                </div>
                                <div className="author-card-details col-md-7">
                                    <h5 className="author-card-name mb-2">
                                        <strong>{userInfo.name}</strong>
                                    </h5>
                                    <span className="author-card-position">
                                        <>Se unió el {moment(userInfo.createdAt).format('LL')}</>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="wizard pt-3">
                            <div class="d-flex align-items-start">
                                <div
                                    class="nav align-items-start flex-column col-12 nav-pills me-3"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <button
                                        class="nav-link active"
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                    >
                                        Configuración de perfil
                                    </button>
                                    <button
                                        class="nav-link d-flex justify-content-between"
                                        id="v-pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-profile"
                                        aria-selected="false"
                                    >
                                        Lista de pedidos:
                                        <span className="bade2"style={{marginLeft: '8px'}} >{orders? orders.length : 0}</span>
                                    </button>
                                    {userInfo && userInfo.isAdmin && (
                                    <button
                                        className="nav-link d-flex justify-content-between"
                                        id="v-pills-catalog-tab"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-catalog"
                                        aria-selected="false"
                                    >
                                        <Link to="/productlist">Ver Catálogo</Link>
                                    </button>
                                    )}
                                    {userInfo && userInfo.isAdmin && (
                                        <Link to="/createproduct" className="nav-link d-flex justify-content-between" onClick={handleCreateButtonClick}>
                                            Crear Producto
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* panels*/}
                    <div
                        class="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
                        id="v-pills-tabContent"
                    >
                        <div //DESDE ACA NO MUESTRA QUE PASA??
                            class="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
                            <ProfileTabs />
                        </div>
                        <div
                            class="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                        >
                            <Orders orders={orders} loading={loading} error={error}/>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
};

export default ProfileScreen;