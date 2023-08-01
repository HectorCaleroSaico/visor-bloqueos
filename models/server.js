const express = require('express')
const cors = require('cors')
const path = require('path')
const { serverConfig } = require('../config')
const locksRouter = require('../routes/lock.routes')

class Server {

    constructor() {

        this.app = express()
        this.port = serverConfig.port

        this.middlewares()
        //this.connectDataBase()

        this.routes()

    }

    /*
    async connectDataBase() {

        /*
        console.log("Conectando a la base de datos ...")

        return setTimeout(() => {

            console.log("Base de datos SQL Server conectada")

        }, 2000)
        //

        sqlConnection()

    }*/

    middlewares() {

        //Cors
        this.app.use(cors(/*{
            origin: 'http://localhost:5173',
            optionsSuccessStatus: 200 
        }*/))

        //Writing and reading body
        this.app.use(express.json())

        this.app.use(express.static(path.resolve(__dirname, '../client/dist')))

    }

    routes() {

        this.app.use('/api/locks', locksRouter)

        this.app.get('*', (req, res) => {
            
            res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))

        })

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto : ${this.port}`)
            console.log(`Para acceder al aplicativo: http://localhost:${this.port}`)
        })

    }

}

module.exports = Server