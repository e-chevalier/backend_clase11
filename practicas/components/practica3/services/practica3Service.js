import ApiUsuariosMock from '../../../utils/api/ApiUsuariosMock.js'
const apiUsersMock = new ApiUsuariosMock()

class Practica3 {


    async postUsuariosPopular(query) {
        console.log(`postUsuariosPopular - QTY: ${query.cant}`)

        let response = await apiUsersMock.postUsuariosPopular(query.cant)

        return { status: "OK", response: response }
    }

    async getUsuarios(id) {
        console.log(`getUsuarios - ID: ${id}`)

        let response = await apiUsersMock.getUsuarios(id)

        return { status: "OK", response: response }
    }

    async postUsuarios(obj) {
        console.log(`postUsuarios - OBJ: ${JSON.stringify(obj, null, 2)}`)

        let response = await apiUsersMock.postUsuarios(obj)

        return { status: "OK", id: response }
    }

    async updateById(id, obj) {
        console.log(`updateById - ID: ${id} - OBJ:${JSON.stringify(obj, null, 2)}`)

        let response = await apiUsersMock.updateByid(id, obj)

        return { status: "OK", obj: response }
    }

    async deleteById(id) {
        console.log(`deleteById - ID: ${id}`)

        let response = await apiUsersMock.deleteById(id)

        return { status: "OK", id: response }
    }

}

export let practica3Service = new Practica3()