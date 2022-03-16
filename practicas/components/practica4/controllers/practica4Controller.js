import { practica4Service } from '../services/practica4Service.js'

class Practica4 {
    
    async normalize(req, res, next) {
        let response = await practica4Service.normalize()
        res.json(response)
    }
    
}

export let practica4Controller = new Practica4()
