const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  address: { type: String },
  phoneNumber: { type: String },
  parentName: { type: String },
  parentEmail: { type: String },
  parentPhoneNumber: { type: String },
  enrolledClasses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
  attendanceRecord: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }],
  grades: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Grade' }],
  emergencyContact: { type: String },
  healthInformation: { type: String },
  notes: { type: String },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
