const express = require('express')
const router = express.Router()
const {projects} = require('../data')
const setProject = require('../middlewares/setProject')
const {authGetProject, authDeleteProject} = require('../middlewares/authGetProject')
const {authUser} = require('../middlewares/authUser')
const {scopedProjects} = require('../permissions/project')

router.get('/', authUser, (req, res) => {
    res.json(scopedProjects(req.user, projects))
})

router.get('/:projectId', setProject, authGetProject, (req, res) => {
    res.json(req.project)
})

router.delete('/:projectId', setProject, authDeleteProject, (req, res) => {
    res.send('Deleted project!')
})


module.exports = router