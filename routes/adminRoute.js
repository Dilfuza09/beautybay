const express = require('express')
const {createProduct, allProduct, deleteProduct,updateProduct,upload} = require('../controllers/adminController')


const router = express.Router()

router.get('/all',allProduct)
router.post('/create',createProduct)
router.delete('/delete/:id',deleteProduct)
router.put('/update/:id', updateProduct)
router.post('/upload',  upload)

module.exports = router