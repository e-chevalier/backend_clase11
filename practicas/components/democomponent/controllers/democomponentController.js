import { democomponentService } from '../services/democomponentService.js'

class Democomponent {
    async test(req, res, next) {
        let response = await democomponentService.test()
        res.json(response)
    }
    
}

export let democomponentController = new Democomponent()
