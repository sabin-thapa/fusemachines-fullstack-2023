const express = require('express')
const router = express.Router()
const {projects} = require('../data')
const setProject = require('../middlewares/setProject')
const authGetProject = require('../middlewares/authGetProject')
const {scopedProjects} = require('../permissions/project')

router.get('/', (req, res) => {
    res.json(scopedProjects(req.user, projects))
})

router.get('/:projectId', setProject, authGetProject, (req, res) => {
    res.json(req.project)
})



module.exports = router