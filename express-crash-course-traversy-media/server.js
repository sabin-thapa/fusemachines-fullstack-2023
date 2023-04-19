const express = require('express');
const path = require('path')    
const users = require('./data/Users')
const app = express()

const PORT = process.env.PORT || 5000

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))

//Custom Middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}

//Init Middleware
app.use(logger)

app.get('/', (req, res) => {
    res.send('API test server')
})
 
app.get('/api/users', (req, res) => res.json(users))
app.listen(PORT, () => console.log('Server started on Port: ', PORT))