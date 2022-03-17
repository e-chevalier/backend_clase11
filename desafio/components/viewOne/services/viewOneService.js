class ViewOne {

    async getViewOne() {
        return { status: "OK" }
    }

}

export let viewOneService = new ViewOne()