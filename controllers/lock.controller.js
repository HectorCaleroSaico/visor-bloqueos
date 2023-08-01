const { request, response } = require('express')
const { executeStoreProcedure, executeQuery } = require('../database/executeQuery')
const { sp_get_locks } = require('../database/storeProcedures')

const getLocksData = async (req = request, res = response) => {

    const result = await executeStoreProcedure('GET_LOCKS')

    res.json({
        endpointDescription: 'GET - API: Visor de Bloqueos',
        data: {
            msg: 'Bloqueos Recientes',
            ...result
        }
    })

}

const killLock = async (req = request, res = response) => {

    const { spid } = req.params

    const result = await executeQuery(`KILL ${spid}`)

    res.json({
        endpointDescription: 'POST - API: Visor de Bloqueos',
        data: {
            ...result
        }
    })

} 

const getCitas = async (req = request, res = response) => {

    //GET_CITAS
    const result = await executeStoreProcedure(sp_get_locks)

    /*
    setTimeout(() => {
        
        res.json({
            endpointDescription: 'GET - API: Pruebas',
            ...result
        })

    }, 6000);
    */
    
    res.json({
        endpointDescription: 'GET - API: Pruebas',
        ...result
    })

}

module.exports = {
    getLocksData,
    killLock,
    getCitas
}