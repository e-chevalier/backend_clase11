import express from 'express'
import config from './config/index.js'
import cors from 'cors'
import { serverRoutes } from './routes/index.js'

const PORT = config.port

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('static'))
app.use(cors("*"))

serverRoutes(app)

const server = app.listen(PORT, (err) => {
    if (err) {
        console.log("Error while starting server")
    } else {
        console.log(`Servidor http escuchando en el puerto ${server.address().port}
                 Open link to http://127.0.0.1:${server.address().port}`)
    }  
})


server.on('error', error => console.log(`Error en servidor ${error}`))