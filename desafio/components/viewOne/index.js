import express from 'express'
import { viewOneController } from './controllers/viewOneController.js'

export const viewOneApi = (app) => {

    let router = express.Router()
    app.use('/api/viewOne', router)

    router.get('/', viewOneController.getViewOne)

}
