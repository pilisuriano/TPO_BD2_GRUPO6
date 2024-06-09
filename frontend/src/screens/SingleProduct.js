import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import Rating from "./../components/Rating";
import Message from "./../components/LoadingError/Error";
import products from "./../data/Products";

const SingleProduct = ({ match }) => {
    const product= products.find((p) => p._id === match.params.id);
    return (
        <>
            <Header />
            <div className="container single-product">
                <div className="row">
                    <div className="col-md-6">
                        <div className="single-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-dtl">
                            <div className="product-info">
                                <div className="product-name">{product.name}</div>
                            </div>
                            <p>{product.description}</p>

                            <div className="product-count col-lg-7">
                                <div className="flex-box d-flex justify-content-between align-items-center">
                                    <h6>Precio</h6>
                                    <span>{product.price}</span>
                                </div>
                                <div className="flex-box d-flex justify-content-between align-items-center">
                                    <h6>Estado</h6>
                                    {product.countInStock > 0 ? (<span>En Stock</span>) : (<span>No disponible</span>)}
                                </div>
                                <div className="flex-box d-flex justify-content-between align-items-center">
                                    <h6>Reseñas</h6>
                                    <Rating
                                        value={product.rating}
                                        text={`${product.numReviews} reseñas`}
                                    />
                                </div>
                                {product.countInStock > 0 ? (
                                    <>
                                        <div className="flex-box d-flex justify-content-between align-items-center">
                                            <h6>Cantidad</h6>
                                            <select>
                                                {[...Array(product.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <button className="round-black-btn">Agregar al carrito</button>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RATING*/}

                <div className="row my-5">
                    <div className="col-md-6">
                        <h6 className="mb-3">Reseñas</h6>
                        <Message variant={"alert-info mt-3"}>No hay reseñas</Message>
                        <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                            <strong>Administrador</strong>
                            <Rating />
                            <span>15 de Enero 2021</span>
                            <div className="alert alert-info mt-3">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.    
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6>Escribí una reseña</h6>
                        <div className="my-4"></div>

                        <form>
                            <div className="my-4">
                                <strong>Calificación</strong>
                                <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                                    <option value="">Seleccionar...</option>
                                    <option value="1">1 - Pésimo</option>
                                    <option value="2">2 - Regular</option>
                                    <option value="3">3 - Bueno</option>
                                    <option value="4">4 - Muy bueno</option>
                                    <option value="5">5 - Excelente</option>
                                </select>
                            </div>
                            <div className="my-4">
                                <strong>Comentario</strong>
                                <textarea 
                                row="3"
                                className="col-12 bg-light p-3 mt-2 border-0 rounded" 
                                ></textarea>
                            </div>
                            <div className="my-3">
                                <button className="col-12 bg-black border-0 p-3 rounded text white">Enviar</button>
                            </div>
                        </form>
                        <div className="my-3">
                            <Message variant={"alert-warning"}>
                                Por favor {" "}
                                <Link to="/login">
                                    " <strong>Inicia sesión</strong> "
                                </Link> {" "}
                                para escribir una reseña{" "}
                            </Message>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;