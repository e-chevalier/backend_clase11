import { practica1Service } from '../services/practica1Service.js'

class Practica1 {
    async test(req, res, next) {
        let response = await practica1Service.test()
        res.json(response)
    }
    
}

export let practica1Controller = new Practica1()
