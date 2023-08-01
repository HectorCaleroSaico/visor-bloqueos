const sql = require('mssql')
const { databaseConfig } = require('../config')

const dbSettings = {
    user: databaseConfig.user,
    password: databaseConfig.password,
    server: databaseConfig.server,
    database: databaseConfig.database,
    options: {
        trustServerCertificate: true
    }
}

const sqlConnection = async () => {

    try {

        const pool = await sql.connect(dbSettings)

        return pool
        
    } catch (error) {
        
        //console.log('Mensaje: ', error.originalError, 'Code: ',  error.code)
        return error

    }

}


module.exports = {
    sqlConnection
}

//sql.connect(dbSettings)