const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
  role: {
    type: String,
    required: true,
    default: "student",
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "active",
  },
  profileImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});



// Encrypt password before saving the user to the database
UserSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  user.password = await bcrypt.hash(user.password, 8);
  next();
});

// Verify user password during login
UserSchema.methods.verifyPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};


const User = mongoose.model("User", UserSchema);

module.exports = User;