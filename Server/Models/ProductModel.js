import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    comentario: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    }
},
{
    timestamps: true,
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    video: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        require: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        require: true,
        default: 0,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0,
    }
},
{
    timestamps: true,
})

const Product = mongoose.model("Product", productSchema)

export default Product;