const ProductModel = require("../models/productModel")

const allProduct = async (req, res) => {
    try {

        const allProducts = await ProductModel.find()
        res.status(200).json({ message: "mahsulotlar topildi", allProducts })

    } catch (error) {
        res.status(500).json({ error: "serverda xatolik", error })
    }

}


module.exports = { allProduct }