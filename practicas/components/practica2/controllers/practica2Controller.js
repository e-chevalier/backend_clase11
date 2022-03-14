import { practica2Service } from '../services/practica2Service.js'

class Practica2 {
    async test(req, res, next) {
        let response = await practica2Service.test(req.query)
        res.json(response)
    }
    
}

export let practica2Controller = new Practica2()
