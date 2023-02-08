const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true
  },
  classCode: {
    type: String,
    required: true
  },
  gradeLevel: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  numOfStudents: {
    type: Number,
    required: true
  },
  teacherName: {
    type: String,
    required: true
  },
  teacherEmail: {
    type: String,
    required: true
  },
  schedule: {
    type: Object,
    required: true
  },
  roomNumber: {
    type: String,
    required: true
  },
  students: [{
    type: String,
    required: true
  }],
  subjects: [{
    type: String,
    required: true
  }],
  assessments: [{
    type: String,
    required: true
  }],
  assignments: [{
    type: String,
    required: true
  }],
  attendanceRecords: [{
    type: Object,
    required: true
  }],
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;