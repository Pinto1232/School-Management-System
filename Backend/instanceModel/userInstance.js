const Teacher = require("../models/User");

// Create a new instance of the User model
const newUser = new User({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "hash_of_password",
    role: "teacher",
    address: "123 Main St, Anytown USA 12345",
    phone: "555-555-5555",
  });
  
  // Save the new user instance to the MongoDB database
  newUser.save((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("User saved successfully");
    }
  });