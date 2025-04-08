const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    
  }
})

const hashPassword = async(password) =>{
  const salt = 10
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword

}
const matchPassword = (password, hashedPassword) =>{
  return bcrypt.compare(password, hashedPassword)
}

const UserModel = mongoose.model('User', userSchema)

module.exports = {UserModel, hashPassword, matchPassword}
