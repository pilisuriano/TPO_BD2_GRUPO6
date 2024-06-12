import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    orderItems: [
        {
            nombre: { type: String, required: true },
            qty: { type: Number, required: true },
            imagen: { type: String, required: true },
            precio: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            },
        },
    ],
    shippingAddress: {
        direccion: { type: String, required: true },
        ciudad: { type: String, required: true },
        codigoPostal: { type: String, required: true },
        pais: { type: String, required: true },
    },
    paymentMethod: {
        type: String,
        required: true,
        default: "PayPal",
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema)

export default Order;