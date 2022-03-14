import express from 'express'
import { practica2Controller } from './controllers/practica2Controller.js'

export const practica2Api = (app) => {

    let router = express.Router()
    app.use('/api/practica2', router)

    router.get('/test', practica2Controller.test)

}
