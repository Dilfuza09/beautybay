const express = require('express');
const router = express.Router();
const Cart = require('./models/cart'); // Assume Cart is a Mongoose model for MongoDB

// Get all cart items
router.get('/cart', async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.user.id });  // Assume you have user authentication
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/cart', async (req, res) => {
  try {
    const { item } = req.body;  // Item should contain fields like { id, name, price, img }
    const cartItem = new Cart({ ...item, userId: req.user.id });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: 'Error adding item to cart' });
  }
});

// Remove item from cart
router.delete('/cart/:id', async (req, res) => {
  try {
    await Cart.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ message: 'Error removing item from cart' });
  }
});

module.exports = router;
