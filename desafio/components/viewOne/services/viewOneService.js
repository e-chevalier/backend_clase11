class ViewOne {
   
    async getViewOne() {
        console.log(`test`)
        return { status: "OK"}
    }
 
}

export let viewOneService = new ViewOne()