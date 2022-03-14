import express from 'express'
import { democomponentController } from './controllers/democomponentController.js'

export const democomponentApi = (app) => {

    let router = express.Router()
    app.use('/api/democomponent', router)

    router.get('/test', democomponentController.test)

}
