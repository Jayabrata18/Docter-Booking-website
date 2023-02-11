const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const mongoURI = process.env.MONGO_URL;
//database
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server started on port 5000"));

//route
app.use(express.json());
const userRoute = require('./routes/userRoute');
app.use('/api/users', userRoute);