const express = require("express")
const router = express.Router()
const users = require("../../data/Users");
const uuid = require('uuid')

//Get all users
router.get("", (req, res) => res.json(users));

//Get a single user
router.get("/:id", (req, res) => {
  try {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a user
router.post('/', (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if(!newUser.name || !newUser.email) {
    return res.status(400).json({message: "Please enter your name and email!"})
  }
  users.push(newUser)
  res.json(users)
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