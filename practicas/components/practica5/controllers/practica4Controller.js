import { practica5Service } from '../services/practica5Service.js'

class Practica5 {
    
    async normalize(req, res, next) {
        let response = await practica5Service.normalize()
        res.json(response)
    }
    
}

export let practica5Controller = new Practica5()
