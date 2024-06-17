import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../Models/ProductModel.js';
import protect from '../Middleware/AuthMiddleware.js';

const productRoute = express.Router()


//GET ALL PRODUCTS
productRoute.get("/", asyncHandler(async(req,res)=>{
    const pageSize = 6;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword ? {
        name:{
            $regex:req.query.keyword,
            $options:"i"
        },
    }:{};
    const count = await Product.countDocuments({...keyword});
    const products = await Product.find({...keyword}) .limit(pageSize).skip(pageSize * (page - 1)).sort({_id: -1}  );
    res.json({products, page, pages: Math.ceil(count / pageSize)});
}));

//GET SINGLE PRODUCT
productRoute.get("/:id", asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else{
        res.status(404);
        throw new Error("Producto no encontrado");
    }
}));

//PRODUCT REVIEWS
productRoute.post("/:id/review", protect, asyncHandler(async(req,res)=>{
    const {comment,rating} = req.body;
    const product = await Product.findById(req.params.id);
    if(product){
        const alreadyReviewed = product.reviews.find(r=>r.user.toString() === req.user._id.toString());
        if(alreadyReviewed){
            res.status(400);
            throw new Error("Producto ya fue reseñado");
        }
        const review = {
            name:req.user.name,
            rating:Number(rating),
            comment,
            user:req.user._id
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating = 
            product.reviews.reduce((acc,item)=>item.rating + acc,0)/
            product.reviews.length;
            await product.save();
            res.status(201).json({message:"Reseña agregada"});
    }
    else{
        res.status(404);
        throw new Error("Producto no encontrado");
    }
}));

//POST CREATE PRODUCT
productRoute.post("/", asyncHandler(async(req,res)=>{
    const { name, price, image, description, countInStock } = req.body;
    const product = new Product({
        name,
        price,
        image,
        description,
        countInStock
    });
    try {
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}));


export default productRoute;