const {canViewProject} = require('../permissions/project')

const authGetProject = (req, res, next) => {
    console.log(req.user, "USER", req.project, "Project")
    if(!canViewProject(req.user, req.project)) {
        res.status(401)
        return res.send('Not Allowed')
    }
    next()
}

module.exports = authGetProject
