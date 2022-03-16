import express from 'express'
import { practica5Controller } from './controllers/practica5Controller.js'

export const practica5Api = (app) => {

    let router = express.Router()
    app.use('/api/practica5', router)

    router.get('/holding', practica5Controller.normalize)

}
