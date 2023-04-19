const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose')

const Product = require('./models/productModel')

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Response from the server!')
})

app.get('/blog', (req, res) => {
    const data = [{
        id: 1,
        name: "Alex"
    },
    {
        id: 2,
        name: "Alexa"
    },
    {
        id: 3,
        name: "Monty"
    }]
    res.send(data)
})

app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)

    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
})

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://admin:therealadmin@internship.ddm4lh4.mongodb.net/nodeAPI?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to the DB!')
    }).catch(err => {
        console.log('Error: ', err )
    })

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
})