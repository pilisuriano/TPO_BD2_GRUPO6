import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../components/homeComponents/pagination';
import Header from '../components/Header';
import UpdateProductForm from './UpdateProductForm';

const ProductListScreen = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 6;
    const [selectedProduct, setSelectedProduct] = useState(null);


    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(`/api/products`);
            console.log(data);
            if (Array.isArray(data.products)) {
                setProducts(data.products);
            } else {
                console.error('Data.products is not an array:', data.products);
            }
        }
    
        fetchProducts();
    }, []);

    const handleUpdate = (product) => {
        setSelectedProduct(product);
      }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`);
            setProducts(products.filter((product) => product._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Header/>
            {products.map((product) => (
                <div key={product.id} style={cardStyle}>
                    <div style={contentStyle}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <button onClick={() => handleDelete(product._id)}>Eliminar</button>
                        <button onClick={() => handleUpdate(product)}>Actualizar</button>
                    </div>
                    {selectedProduct === product && <UpdateProductForm product={product} />}
                    <img src={product.image} alt={product.name} style={imageStyle} />
                </div>
            ))}
        </div>
    );
};


const cardStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    margin: '10px',
};

const imageStyle = {
    maxWidth: '10%',
};

const contentStyle = {
    marginRight: '10px',
};



export default ProductListScreen;