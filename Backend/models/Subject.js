const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  totalMarks: {
    type: Number,
    required: true
  },
  creditHours: {
    type: Number,
    required: true
  },
  teacherName: {
    type: String,
    required: true
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class"
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student"
    }
  ]
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
