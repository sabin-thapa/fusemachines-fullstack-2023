const express = require('express')
const app = express()

const mongoose = require('mongoose')

//dotenv
const dotenv = require('dotenv')
dotenv.config()


//Middleware
app.use(express.json())

//Import Routes
const authRoute = require('./routes/auth')

//Route Middleware
app.use('/api/user', authRoute)


const PORT = 3000

// DB Connection
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true})
    .then(console.log('DB Connected!'))
    .catch(err => console.error(err.message))

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})