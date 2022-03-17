import { viewProductsFakerService } from '../services/viewProductsFakerService.js'

class ViewProductsFaker {
    async getViewProductsFaker(req, res, next) {
        let response = await viewProductsFakerService.getViewProductsFaker()
        res.render('main')
    }
    
}

export let viewProductsFakerController = new ViewProductsFaker()
