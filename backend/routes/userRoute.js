// const express = require("express");
// const router = express.Router();

// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// // Define the User Schema
// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// // Create a User Model
// const User = mongoose.model("User", UserSchema);

// // Use body-parser middleware
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));

// // Route for User Registration
// router.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;

//   // Check if the email is already registered
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(400).send("Email already registered");
//   }

//   // Create a new user
//   const user = new User({ username, email, password });

//   // Save the user to the database
//   try {
//     await user.save();
//     res.send("User registered successfully");
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//   } catch (error) {}
// });

// module.exports = router;
