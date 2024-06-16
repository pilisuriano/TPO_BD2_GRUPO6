// src/screens/CreateProductScreen.js
import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const CreateProductScreen = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [message, setMessage] = useState(null); // Para mostrar mensajes de éxito o error

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/products', {
                name,
                price,
                image,
                description,
                countInStock
            });
            setMessage('Producto creado exitosamente');
        } catch (error) {
            setMessage('Error al crear el producto');
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <div className="container mt-5">
                <h1>Crear Producto</h1>
                {message && <div className="alert alert-info">{message}</div>}
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Precio</label>
                        <input
                            type="number"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripción</label>
                        <textarea
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Stock</label>
                        <input
                            type="number"
                            className="form-control"
                            value={countInStock}
                            onChange={(e) => setCountInStock(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Imagen</label>
                        <input
                            type="text"
                            className="form-control"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Crear Producto
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateProductScreen;