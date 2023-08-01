const { sqlConnection } = require('../database/connection')

const executeQuery = async (query) => {

    try {
        
        const pool = await sqlConnection()
        const result = await pool.request()
            .query(query)

        return {
            result,
            error: null
        }

    } catch (error) {
        
        return {
            result: null,
            error: error
        }

    }

}

const executeStoreProcedure = async (storeProcedure) => {

    try {
        
        const pool = await sqlConnection()
        const result = await pool.request()
            .execute(storeProcedure)

        return {
            result: result.recordset,
            error: null
        }
    } catch (err) {

        console.log(err.name)
        console.log(err.message)

        return {
            result: null,
            error: {
                errorName: err.name,
                errorMessage: `Error en conexión con la BD: ${err.name}: ${err.message}`,
                errorLog: `${err.name}: ${err.message}`
            }
        }

    }


}

module.exports = {
    executeQuery,
    executeStoreProcedure
}