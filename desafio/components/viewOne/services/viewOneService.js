// import { productsMemory, cartsContainer, cartsMemory } from '../../../daos/index.js'

class ViewOne {
   
    async getViewOne() {
        return { status: "OK"}
    }
 
}

export let viewOneService = new ViewOne()