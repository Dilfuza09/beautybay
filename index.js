const express = require('express');
const mongoose = require('mongoose');
const ProductRoute = require('./routes/productRoute');
const authRoute = require('./routes/authRoute');
const AdminProductRoute = require('./routes/adminRoute');
const cors = require('cors');
const path = require('path');

const url = "mongodb+srv://dilfuza:dilfuza@cluster0.y96zodz.mongodb.net/";

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};
app.use(cors(corsOptions));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());

mongoose
    .connect(url)
    .then(() => console.log("Db connected"))
    .catch((error) => console.log(error));

app.use('/', ProductRoute);
app.use('/auth', authRoute);
app.use('/products', AdminProductRoute);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
