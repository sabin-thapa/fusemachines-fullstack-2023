const express = require("express")
const router = express.Router()
const users = require("../../data/Users");
const Users = require('../../models/userModel')
const mongoose = require('mongoose')
const {ObjectId} = require('bson-objectid')

//Get all users
router.get("", async (req, res) => {
  const users = await Users.find({})
  res.json(users)
});

//Get a single user
router.get("/:id", async(req, res) => {
  try {
    // res.json(users.filter((user) => user.id === parseInt(req.params.id)));
    const user = await Users.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a user
router.post('/', async (req, res) => {
  const newUser = {
    id:  mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if(!newUser.name || !newUser.email) {
    return res.status(400).json({message: "Please enter your name and email!"})
  }
  const user = await Users.create(newUser)
  res.json(user)
})

router.put('/:id', (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id))
  
  if(found) {

    const updatedData = req.body;
    
    users.forEach(usr => {
      if(usr.id === parseInt(req.params.id)) {
        usr.name = updatedData? updatedData.name : usr.name;
        usr.email = updatedData? updatedData.email : usr.email;
        res.json({msg: 'Member updated', users})
        
      }
    })
  } else {
    res.status(400).json({msg:'No member found'})
  }
})


//Delete a single user
router.delete("/:id", (req, res) => {
  try {
    res.json(users.filter((user) => user.id !== parseInt(req.params.id)));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;