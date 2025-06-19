const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const url = "mongodb+srv://nargiza0:nargiza0@cluster0.m6zqx.mongodb.net/";





mongoose.connect(url).then(() => {
  console.log("DB connected");
}).catch((err) => {
  console.log("Error: ", err);
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

const addUser = async () => {
  const hashedPassword = bcrypt.hashSync('1234', 10);
  const user = new User({
    email: 'nargiza@gmail.com',
    password: hashedPassword,
    role: 'user'
  });

  try {
    await user.save();
    console.log('Foydalanuvchi qo\'shildi!');
  } catch (error) {
    console.log('Xatolik: ', error);
  }
};

addUser();
