import { practica3Service } from '../services/practica3Service.js'

class Practica3 {
    async postUsuariosPopular(req, res, next) {
        let response = await practica3Service.postUsuariosPopular(req.query)
        res.json(response)
    }

    async getUsuariosById(req, res, next) {
        let response = await practica3Service.getUsuarios(req.params.id)
        res.json(response)
    }

    async postUsuarios(req, res, next) {
        let response = await practica3Service.postUsuarios(req.body)
        res.json(response)
    }

    async updateById(req, res, next) {
        let response = await practica3Service.updateById(req.params.id, req.body)
        res.json(response)
    }

    async deleteById(req, res, next) {
        let response = await practica3Service.deleteById(req.params.id)
        res.json(response)
    }
    
    
}

export let practica3Controller = new Practica3()
