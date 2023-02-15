// const express = require("express");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
// const app = express();

const mongoURI = process.env.MONGO_URL;
// //database
// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// app.listen(5000, () => console.log("Server started on port 5000"));

// //route
// app.use(express.json());
// const userRoute = require('./routes/userRoute');
// app.use('/api/users', userRoute);

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a User Model
const User = mongoose.model("User", UserSchema);

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route for User Registration
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the email is already registered
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("Email already registered");
  }

  // Create a new user
  const user = new User({ username, email, password });

  // Save the user to the database
  try {
    await user.save();
    res.send("User registered successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});



// randomly got from git hub need to know mogodb localhost
// dont delete



// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const path = require("path");

// const users = require("./routes/api/users");

// const app = express();

// // Bodyparser middleware
// app.use(
//     bodyParser.urlencoded({
//       extended: false
//     })
//   );

// app.use(bodyParser.json());

// const dbURL =  "mongodb://localhost:27017/mern-auth";

// //connect to MongoDB
// mongoose
//     .connect(process.env.MONGODB_URI || dbURL,
//     { useUnifiedTopology:true, useNewUrlParser: true }
//     )
//     .then(() => console.log("MongoDB successfully connected"))
//     .catch(err => console.log(err));

// // Passport middleware
// app.use(passport.initialize());

// // Passport config
// require("./config/passport")(passport);

// // Routes
// app.use("/api/users", users);

// if(process.env.NODE_ENV === 'production') {
   
//   app.use(express.static(path.join(__dirname, "client", "build")))

//   app.get('*',(req, res) => {
//       res.sendFile(path.join(__dirname,'client','build','index.html'));
//   });
// }


// const port = process.env.PORT || 5000;

// app.listen(port,()=>console.log(`Server up and running on port ${port}`));
