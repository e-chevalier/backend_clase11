import express from 'express'
import cors from 'cors'
import { Server as HttpServer } from 'http'
import { Server as IOServer } from 'socket.io'
import { config } from './config/index.js'
import { engine } from 'express-handlebars';
import { serverRoutes } from './routes/index.js'
import { denormalize, normalize, schema } from "normalizr"
import util from 'util'

import { productsMemory, productsContainer, messagesMemory, messagesContainer } from './daos/index.js'

console.log("PRODUCTS MYSQL")
console.table(await productsContainer.getAll())
console.log("PRODUCTS MEMORY")
console.table(await productsMemory.getAll())

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const PORT = config.port

// Middlewares
app.use(cors("*"));

// Settings
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist'))

// defino el motor de plantilla
app.engine('.hbs', engine({
    extname: ".hbs",
    defaultLayout: 'index.hbs',
    layoutDir: "views/layouts/",
    partialsDir: "views/partials/"
})
)

app.set('views', './views'); // especifica el directorio de vistas
app.set('view engine', '.hbs'); // registra el motor de plantillas

serverRoutes(app)


httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${httpServer.address().port}
                 Open link to http://127.0.0.1:${httpServer.address().port}`)
})

httpServer.on("error", error => console.log(`Error en servidor ${error}`))



/**
 *  Regular expression for check email
 */

const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i


/**
 * Normalizr Schemas 
 * 
 */

const authorSchema = new schema.Entity('author')

const messageSchema = new schema.Entity('message', {
    author: authorSchema
})

const messagesSchema = new schema.Entity('messages', {
    messages: [messageSchema]
})


const print = obj => {
    console.log(util.inspect(obj, false, 12, true))
}

/**
 * SOCKETS
 */

io.on('connection', (socket) => {
    // Emit all Products and Messages on connection.

    //onConnectionEmit()

    (async () => {
        io.sockets.emit('products', await productsMemory.getAll())

        let messagesOriginal = await messagesMemory.getAll()
        let messagesNormalized = normalize({id: 'messages', messages: messagesOriginal}, messagesSchema)

        // print(messagesOriginal)
        // console.log(JSON.stringify(messagesOriginal).length)
        // console.log("-----------------------------------------------------------------")

        // print(messagesNormalized)
        // console.log(JSON.stringify(messagesNormalized).length)
        // console.log("-----------------------------------------------------------------")

        // let desnormalized = denormalize(messagesNormalized.result, messagesSchema, messagesNormalized.entities)
        // print(desnormalized)
        // console.log(JSON.stringify(desnormalized).length)
        // console.log("-----------------------------------------------------------------")

        io.sockets.emit('messages', messagesNormalized)
        console.log('¡Nuevo cliente conectado!')  // - Pedido 1
    })()

    socket.on('newProduct', (prod) => {

        if (Object.keys(prod).length !== 0 && !Object.values(prod).includes('')) {

            (async () => {
                await productsContainer.save(prod)
                await productsMemory.save(prod)
                io.sockets.emit('products', await productsMemory.getAll())
            })()

        }
    })

    socket.on('newMessage', (data) => {

        console.log(data.author)
        console.log(re.test(data.author.id))
        console.log(!Object.values(data.author).includes(''))
        console.log(data.text !== '')

        if (Object.keys(data).length !== 0 && re.test(data.author.id) && !Object.values(data.author).includes('') && data.text !== '') {
            (async () => {
                await messagesMemory.save(data)
                await messagesContainer.save(data)
                io.sockets.emit('messages', await messagesMemory.getAll())
                //io.sockets.emit('messages', await messagesMemory.getAll())
            })()
        }
    })

})











