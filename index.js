const express = require('express')
const mongoose = require('mongoose')
const ProductRoute = require('./routes/productRoute')
const authRoute = require('./routes/authRoute')
const AdminProductRoute = require('./routes/adminRoute')





const url = "mongodb+srv://dilfuza:dilfuza@cluster0.y96zodz.mongodb.net/"


mongoose
    .connect(url)
    .then(() => console.log("Db connected"))
    .catch((error) => console.log(error))


const app = express()
app.use(express.json())
app.use('/', ProductRoute)
app.use('/auth', authRoute)
app.use('/admin', AdminProductRoute)



app.listen(5000, () => {
    console.log("5000 port")
})