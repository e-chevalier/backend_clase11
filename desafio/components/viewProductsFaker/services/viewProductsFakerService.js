// import { productsMemory, cartsContainer, cartsMemory } from '../../../daos/index.js'

class ViewProductsFaker {
   
    async getViewProductsFaker() {
        return { status: "OK"}
    }
 
}

export let viewProductsFakerService = new ViewProductsFaker()