const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserModel, hashPassword, matchPassword } = require('../models/authModel')

const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  try {
    if (!name || !email || !password) {
      return res.status(400).json("Majburiy")
    }
    const user = await UserModel.findOne({ email })
    if (user) return res.status(400).json("Foydalanuvchi bor")

    const hashP = await hashPassword(password)
    const new_user = new UserModel({ name, email, password: hashP })

    await new_user.save()

    const token = jwt.sign({ id: new_user._id }, 'hello', { expiresIn: '3d' })

    res.status(201).json({ new_user, token })

  } catch (error) {
    console.log(error)
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserModel.findOne({ email })
    if (!user) return res.status(400).json("Foydalanuvchi topilmadi")

    const isMatch = await matchPassword(password, user.password)
    if (!isMatch) return res.status(400).json("Noto‘g‘ri parol")

    const token = jwt.sign({ id: user._id }, 'hello', { expiresIn: '3d' })

    res.json({ user, token })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Serverda xatolik yuz berdi." })
  }
}

module.exports = {
  registerUser,
  loginUser,
}
