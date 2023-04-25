const ROLE = {
    ADMIN: 'admin',
    GENERAL: 'general'
}

// Dummy Database for users and projects

const users = [
    {id:1, name: "Sabin", role: ROLE.ADMIN},
    {id:1, name: "Sajan", role: ROLE.GENERAL},
    {id:1, name: "Umesh", role: ROLE.GENERAL},
    {id:1, name: "Gaurab", role: ROLE.GENERAL},
]

const projects = [
    {id: 1, name: "Sabin's project", userId: 1},
    {id: 1, name: "Sajan's project", userId: 2},
    {id: 1, name: "Umesh's project", userId: 3},
    {id: 1, name: "Gaurab's project", userId: 4},
]

module.exports = {
    ROLE: ROLE,
    users: users,
    projects: projects
}