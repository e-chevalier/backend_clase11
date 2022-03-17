import { viewOneService } from '../services/viewOneService.js'

class ViewOne {
    async getViewOne(req, res, next) {
        let response = await viewOneService.getViewOne()
        res.render('main')
    }
    
}

export let viewOneController = new ViewOne()
