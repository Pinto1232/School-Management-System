const Teacher = require("../models/Teacher");

const teacher = new Teacher({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  phoneNumber: "+1234567890",
  address: "123 Main St, City, State 12345",
  gender: "female",
  dateOfBirth: "1980-01-01"
});

teacher.save()
  .then(teacher => console.log("Teacher saved:", teacher))
  .catch(error => console.error(error));
