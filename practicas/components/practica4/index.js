import express from 'express'
import { practica4Controller } from './controllers/practica4Controller.js'

export const practica4Api = (app) => {

    let router = express.Router()
    app.use('/api/practica4', router)

    router.get('/normalize', practica4Controller.normalize)

}
