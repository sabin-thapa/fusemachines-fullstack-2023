const {ROLE} = require('../data')

const canViewProject = (user, project) => {
    return(
        (user && user.role === ROLE.ADMIN) || (project && project.userId) === user.id
    )
}

module.exports = {canViewProject}