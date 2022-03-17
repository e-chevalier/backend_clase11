import express from 'express'
import { viewProductsFakerController } from './controllers/viewProductsFakerController.js'

export const viewProductsFakerApi = (app) => {

    let router = express.Router()
    app.use('/api/productos-test', router)

    router.get('/', viewProductsFakerController.getViewProductsFaker)

}
