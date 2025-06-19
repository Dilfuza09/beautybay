
const ProductModel = require("../models/adminModel");

const allProduct = async (req, res) => {
    try {
        const allProducts = await ProductModel.find();
        res.status(200).json({ message: "mahsulotlar topildi", allProducts });
    } catch (error) {
        res.status(500).json({ error: "serverda xatolik", error });
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, desc, price, img } = req.body;
 
        const new_product = new ProductModel({ name, desc, price, img });
        await new_product.save();

        res.status(201).json({ message: "mahsulot yaratildi", new_product });
    } catch (error) {
        res.status(500).json({ error: "serverda xatolik", error });
    }
};


const fileUpload = async(req, res) =>{
    try {
        const filePath = req.file.filename
        if(!filePath){
            return res.status(400).json({message: "Fayl yuklanmadi"})
        }
        res.status(201).json({url: filePath})
    } catch (error) {
        console.log(error)
    }
}


const updateProduct = async (req, res) => {
    try {
        const { name, desc, price } = req.body;
        const { id } = req.params;

        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            { name, desc, price },
            { new: true }
        );

        res.status(200).json({ message: "mahsulot yangilandi", updatedProduct });
    } catch (error) {
        res.status(500).json({ error: "serverda xatolik", error });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        res.status(200).json({ message: "mahsulot o'chirildi", deletedProduct });
    } catch (error) {
        res.status(500).json({ error: "serverda xatolik", error });
    }
};

module.exports = { allProduct, createProduct, deleteProduct, updateProduct , fileUpload};
