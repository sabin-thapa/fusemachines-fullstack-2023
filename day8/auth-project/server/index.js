const express = require('express')
const app = express()

// CORS
const cors = require('cors')
app.use(cors())
app.use(express.json())

const PORT = 1337

app.post('/api/register', (req, res) => {
    console.log(req.body, "BODY")
    res.json({
        status: "ok"
    })
})

app.listen(PORT, () => {
    console.log('Server started at port:', PORT)
})