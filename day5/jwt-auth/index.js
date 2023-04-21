const express = require('express')
const app = express()

//Import Routes
const authRoute = require('./routes/auth')

//Route Middleware
app.use('/api/user', authRoute)


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on PORt ${PORT}`);
})