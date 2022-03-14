
class Democomponent {

    async test() {
        console.log(`test`)
        // LOGIC HERE

        return { status: "OK"}
    }
 
}

export let democomponentService = new Democomponent()