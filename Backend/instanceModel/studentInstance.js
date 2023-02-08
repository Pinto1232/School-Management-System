const Student = require('../models/Student');

const newStudent = new Student({
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  dateOfBirth: new Date(2000, 0, 1),
  address: '123 Main St',
  phoneNumber: '555-555-5555',
  parentName: 'Jane Doe',
  parentEmail: 'janedoe@example.com',
  parentPhoneNumber: '555-555-5556',
});

newStudent.save((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Student ${newStudent.firstName} ${newStudent.lastName} was saved to the database.`);
  }
});
