const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

class Practica2 {

    getRandomIndex = (max) => {
        return Math.floor(Math.random() * (max));
    }
    

    getTenObjects = (qty = 10) => {
        let response = []
        for (let i = 0; i <  qty; i++) {
            response.push(
                {
                    id: i+1,
                    nombre: nombres[this.getRandomIndex(nombres.length)],
                    apellido: apellidos[this.getRandomIndex(apellidos.length)],
                    color: colores[this.getRandomIndex(colores.length)]
                })
        }
        return response
    }


    async test(query) {
        console.log(`test practica2 - QTY: ${query.cant}`)
        
        let response = this.getTenObjects(query.cant)
        
        return { status: "OK", response: response}
    }
 
}

export let practica2Service = new Practica2()