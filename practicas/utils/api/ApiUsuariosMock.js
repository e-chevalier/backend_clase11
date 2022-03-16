import faker from "faker"

class ApiUsuariosMock {

    constructor(){
        this.usuarios = []
    }


    async getMaxId(){

        try {
            
            let max =  this.usuarios.reduce((a, b) => Number(a.id) > Number(b.id) ? a : b, { id: 0 }) 
            return Number(max.id)

        } catch (error) {
            throw new Error(error)
        }
    }

    async getUsuarios (id) {
        try {
            let response = []

            if (id) {
                response =  this.usuarios.filter(user => user.id == id)
            } else {
                response =  this.usuarios
            }
            
            return response
            
        } catch (error) {
            throw new Error(error)
        }
    }

    async postUsuarios(obj) {
        try {
            let newId = -1
            if (Object.keys(obj).length !== 0 && !Object.values(obj).includes('')) {
                newId = await this.getMaxId() + 1
                this.usuarios.push({...obj, id: newId})
            } 

            return newId

        } catch (error){
            throw new Error(error)
        }
    }

    async postUsuariosPopular(qty = 50) {

        try {

            let max =  await this.getMaxId()
            
            for (let i = 0; i < qty; i ++){
                let newUser = {
                    id: max + i + 1, 
                    name: faker.name.firstName(),
                    email: faker.internet.email(),
                    website: faker.internet.url(),
                    thumbnail: faker.image.avatar()
                }
                this.usuarios.push(newUser)
            }

            return this.usuarios

        } catch (error){
            throw new Error(error)
        }
    }

    async updateByid(id, newElement){
        try {
            
            let response = {}
            let index = this.usuarios.findIndex(e => e.id === Number(id))
            if (index >= 0) {
                this.usuarios[index] = {...this.usuarios[index], ...newElement}
                response = {...this.usuarios[index], ...newElement}
            }

            return response

        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id){
        try {
            let index = this.usuarios.findIndex(e => e.id === Number(id))
            if (index >= 0) {
                this.usuarios.splice(index, 1)
            }

            return index

        } catch (error) {
            throw new Error( error ) 
        }
    }

}

export default ApiUsuariosMock