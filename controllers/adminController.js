const ProductModel = require("../models/adminModel")

const allProduct = async (req, res) => {
    try {

        const allProducts = await ProductModel.find()
        res.status(200).json({ message: "mahsulotlar topildi", allProducts })

    } catch (error) {
        res.status(500).json({ error: "serverda xatolik", error })
    }

}


const createProduct = async (req, res) => {
    try {
        const { name, desc, price } = req.body
        const new_product = new ProductModel({ name, desc, price })
        await new_product.save()
        res.status(200).json({ message: "mahsulot yaratildi", new_product })

    } catch (error) {
        res.status(500).json({ error: "serverda xatolik", error })

    }
}



const updateProduct = async (req, res) => {
    try {
        const { name, desc, price } = req.body
        const { id } = req.params
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, { name, desc, price }, { new: true })
        await updatedProduct.save()
        res.status(200).json({ message: "mahsulot yangilandi", updatedProduct })

    } catch (error) {
        res.status(500).json({ error: "serverda xatolik", error })

    }
}



const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const deletedProduct = await ProductModel.findByIdAndDelete(id)
        res.status(200).json({ message: "mahsulot o'chirildi", deletedProduct })

    } catch (error) {
        res.status(500).json({ error: "serverda xatolik", error })

    }
}


const upload = async (req, res) => {
    try {
        const uploadd = req.file.filename;
        console.log(req.file.filename)
        res.status(200).json({ message: "img keldi", uploadd })
    } catch (error) {
        res.status(500).json({ error: "serverda xatolik boor", error })

    }
}


module.exports = { allProduct, createProduct, deleteProduct, updateProduct, upload }