import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/productModel.js';

const router = express.Router();

router.put('/:id', async (req, res) => {
    const { id } = req.params;

    // Verificar si el ID del producto es válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('No se encontró el producto con el ID proporcionado');
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedProduct) {
            return res.status(404).send('No se encontró el producto con el ID proporcionado');
        }

        res.json(updatedProduct);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

export default router;