const express = require("express");
const router = express.Router();
const Users = require("../../models/userModel");
const mongoose = require("mongoose");

//Get all users
router.get("", async (req, res) => {
  const users = await Users.find({});
  res.json(users);
});

//Get a single user
router.get("/:id", async (req, res) => {
  try {
    // res.json(users.filter((user) => user.id === parseInt(req.params.id)));
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a user
router.post("/", async (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newUser.name || !newUser.email) {
    return res
      .status(400)
      .json({ message: "Please enter your name and email!" });
  }
  const user = await Users.create(newUser);
  res.json(user);
});

router.put("/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body);
    console.log(req.params.id);
    if (!user) {
      console.log(`The user with the ID, ${req.params.id} does not exist`);
    }

    const updatedData = await Users.findById(req.params.id);
    res.status(200).json(updatedData);
  } catch (err) {
    console.log(err.message);
  }
});

//Delete a single user
router.delete("/:id", async(req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id)
    if (!user) {
      console.log(`The user with the ID, ${req.params.id} does not exist`);
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
