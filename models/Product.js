const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    images: [
        {
            url: {
                type: String,
                required: true,
            },
            alt: {
                type: String,
                required: true,
            }
        }
    ], // This is an array to handle multiple pictures, each with a URL and alt text

    // Add more fields as needed, such as categories, tags, etc.
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
