import express from 'express';
const router = express.Router();

router.put('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, description, stock, image } = req.body;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        product.name = name;
        product.price = price;
        product.description = description;
        product.stock = stock;
        product.image = image;
        await product.save();
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;