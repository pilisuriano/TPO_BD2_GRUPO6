import React, { useState } from 'react';
import axios from 'axios';

const UpdateProductForm = ({ product, onUpdate }) => {
    const [name, setName] = useState(product?.name || '');
    const [price, setPrice] = useState(product?.price || 0);
    const [description, setDescription] = useState(product?.description || '');
    const [countInStock, setStock] = useState(product?.countInStock || 0);
    const [image, setImage] = useState(product?.image || '');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`/api/products/${product._id}`, { name, price, description, countInStock, image });
            if (response.status === 200) {
                onUpdate(response.data);
            } else {
                console.error('Update failed with status:', response.status);
            }
        } catch (err) {
            console.error('Update failed with error:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
                    onChange={(e) => setStock(e.target.value)}
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
            <button type="submit" className="btn btn-primary">Actualizar</button>
        </form>
    );
};

export default UpdateProductForm;