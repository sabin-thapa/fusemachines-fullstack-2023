const {projects} = require('../data')

module.exports = setProject = (req, res, next) => {
    const projectId = parseInt(req.params.projectId)
    req.project = projects.find(prj => prj.id === projectId)

    if(req.project === null) {
        res.status(404)
        return res.send('Project does not exist!')
    } 
    next()
}