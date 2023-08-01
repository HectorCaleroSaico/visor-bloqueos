require('dotenv').config()

module.exports = {
    serverConfig: {
        port: process.env.PORT || 8080,
    },
    databaseConfig: {
        user: process.env.USER_DB,
        password: process.env.PASSWORD_DB,
        server: process.env.SERVER_DATABASE,
        database: process.env.DATABASE_NAME
    }
}