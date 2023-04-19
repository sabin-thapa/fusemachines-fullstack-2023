const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middleware/logger");

const PORT = process.env.PORT || 5002;

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));


app.use(express.json())

//Init Middleware
app.use(logger);

app.use('/api/users', require('./routes/api/users'))



app.listen(PORT, () => console.log("Server started on Port: ", PORT));
