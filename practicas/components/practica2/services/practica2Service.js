import faker from 'faker'

class Practica2 {

    getTenObjects = (qty = 10) => {
        let response = []
        for (let i = 0; i < qty; i++) {
            response.push(
                {
                    id: i + 1,
                    nombre: faker.name.firstName(),
                    apellido: faker.name.lastName(),
                    color: faker.commerce.color()
                })
        }
        return response
    }


    async test(query) {
        console.log(`test practica2 - QTY: ${query.cant}`)

        let response = this.getTenObjects(query.cant)

        return { status: "OK", response: response }
    }

}

export let practica2Service = new Practica2()