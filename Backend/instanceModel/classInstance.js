const Class = require('../models/Class');

const newClass = new Class({
  name: 'Math 101',
  code: 'MATH101',
  gradeLevel: '9th grade',
  startDate: new Date(),
  endDate: new Date(),
  numberOfStudents: 25,
  teacherName: 'Jane Doe',
  teacherEmail: 'jane.doe@example.com',
  schedule: 'Monday, Wednesday, Friday 9:00am-10:30am',
  roomNumber: '101',
  subjects: ['Math'],
  assessments: ['Quiz 1', 'Test 1', 'Final Exam'],
  assignments: ['Homework 1', 'Project 1'],
  attendance: ['present', 'absent', 'present'],
});

newClass.save((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Class saved successfully!');
  }
});
