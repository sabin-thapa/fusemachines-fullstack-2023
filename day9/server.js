const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const {ROLE} = require('./data')
const projectRouter = require('./routes/projects')
const setUser = require('./middlewares/setUser')
const {authUser, authRole} = require('./middlewares/authUser')

//middlewares
app.use(express.json())
app.use('/projects', projectRouter)
app.use(setUser)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/dashboard', authUser, (req, res) => {
    res.send('Dashboard!')
})

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
    res.send('Admin Page')
})

app.listen(PORT, () => {
    console.log('Server started on PORT: ', PORT);
})

