const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subject"
    }
  ]
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
