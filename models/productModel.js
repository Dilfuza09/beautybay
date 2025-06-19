const mongoose = require('mongoose')


const productShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: { type: String, required: true }
})


const ProductModel = new mongoose.model('Products', productShema)


module.exports = ProductModel