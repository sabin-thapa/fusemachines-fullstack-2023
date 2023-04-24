const express = require("express");
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

const dotenv = require("dotenv");
dotenv.config();

const jwt = require('jsonwebtoken')

const mongoose = require("mongoose");
const User = require("./models/User");

// CORS
const cors = require("cors");
app.use(cors());
app.use(express.json());

const PORT = 1337;

app.post("/api/register", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({
      status: "ok",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message, type: "error" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET)
    console.log(token)
    // res.header('auth_token', token).send(token)

    return res.json({
      user,
      status: "ok",
    });
  } else {
    return res.status(500).json({err: "No user" });
  }
});

//Mongoose conn

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.ADMIN_PW}@internship.ddm4lh4.mongodb.net/mern-auth?retryWrites=true&w=majority`
  )
  .then(() => console.log("DB Connected!"));

app.listen(PORT, () => {
  console.log("Server started at port:", PORT);
});
