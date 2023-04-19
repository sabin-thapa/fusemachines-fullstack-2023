const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middleware/logger");
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5002;

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));


app.use(express.json())

//Init Middleware
app.use(logger);

app.use('/api/users', require('./routes/api/users'))

mongoose.connect('mongodb+srv://admin:therealadmin@internship.ddm4lh4.mongodb.net/nodeAPI?retryWrites=true&w=majority')
  .then(() => {
    console.log('DB CONNECTED!')
  }).catch(err => {
    console.log('err: ', err.message)
  })

app.listen(PORT, () => console.log("Server started on Port: ", PORT));
