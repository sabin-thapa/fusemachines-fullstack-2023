const express = require('express')

const fetch = require('node-fetch')
const redis = require('redis')

const PORT = process.env.PORT || 5000
const REDIS_PORT = process.env.REDIS_PORT || 5137

const app = express()

const getRepos = async (req, res, next) => {
    try {
        console.log('Fetching data!');
        const {username} = req.params
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()

        res.send(data)

        next()

    } catch (err) {
        console.error(err);
        res.status(500)
    }
}

app.get('/users/:username', getRepos)




app.listen(PORT, () => console.log("Server started on port:" , PORT))