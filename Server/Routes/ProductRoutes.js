import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../Models/ProductModel.js';
import protect from '../Middleware/AuthMiddleware.js';

const productRoute = express.Router()


//GET ALL PRODUCTS
productRoute.get("/", asyncHandler(async(req,res)=>{
    const keyword = req.query.keyword ? {
        name:{
            $regex:req.query.keyword,
            $options:"i"
        },
    }:{};
    const products = await Product.find({...keyword});
    res.json(products);
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

export default productRoute;