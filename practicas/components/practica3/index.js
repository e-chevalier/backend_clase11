import express from 'express'
import { practica3Controller } from './controllers/practica3Controller.js'

export const practica3Api = (app) => {

    let router = express.Router()
    app.use('/api/usuarios', router)

    router.post('/popular', practica3Controller.postUsuariosPopular)

    router.get('/(:id)?', practica3Controller.getUsuariosById)

    router.post('/', practica3Controller.postUsuarios )

    router.put('/:id', practica3Controller.updateById )

    router.delete('/:id', practica3Controller.deleteById )

}
