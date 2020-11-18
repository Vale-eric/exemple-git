import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema({
  firstName:  String,
  lastName:  String,
  adress: String,
  postalcode: String,
  city: String,
  country: String,
  phone: String,
  email: String,
  birthday: Date,
  role: String,
  autorization: { type: Boolean, default: false }
})

module.exports = mongoose.model('User', userSchema)