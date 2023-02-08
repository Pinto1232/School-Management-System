const Subject = require("../models/Subject");

const subject = new Subject({
  name: "Mathematics",
  code: "MTH101",
  description: "This is a course on basic mathematics",
  totalMarks: 100,
  creditHours: 3,
  teacherName: "John Doe"
});

subject.save()
  .then(subject => console.log("Subject saved:", subject))
  .catch(error => console.error(error));
