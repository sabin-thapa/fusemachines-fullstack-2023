const express = require('express')
const router = express.Router()
const {projects} = require('../data')
const setProject = require('../middlewares/setProject')

router.get('/', (req, res) => {
    res.json(projects)
})

router.get('/:projectId', setProject, (req, res) => {
    res.json(req.project)
})



module.exports = router