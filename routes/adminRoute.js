
const express = require('express');
const { createProduct, allProduct, deleteProduct, updateProduct, fileUpload } = require('../controllers/adminController');
const upload = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/all', allProduct);
router.post('/create', createProduct);

router.post('/upload', upload.single('img'), fileUpload)

router.delete('/delete/:id', deleteProduct);
router.put('/update/:id', updateProduct);

module.exports = router;
