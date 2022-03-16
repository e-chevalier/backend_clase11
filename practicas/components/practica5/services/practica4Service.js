import { denormalize, normalize, schema } from "normalizr"
import { empresa } from "../../../config/empresa_json.js"
import util from 'util'

const employeeSchema = new schema.Entity('employee')

const companySchema = new schema.Entity('company', {
    director: employeeSchema,
    manager: employeeSchema,
    employees: [employeeSchema]
})

const print = obj => {
    console.log(util.inspect(obj,false,12,true))
}





class Practica4 {

    async normalize() {
        let normalizedCompany = normalize(empresa, companySchema)

        print(empresa)
        console.log(JSON.stringify(empresa).length)
        console.log("-----------------------------------------------------------------")

        print(normalizedCompany)
        console.log(JSON.stringify(normalizedCompany).length)
        console.log("-----------------------------------------------------------------")

        let desnormalized = denormalize(normalizedCompany.result, companySchema, normalizedCompany.entities)
        print(desnormalized)
        console.log(JSON.stringify(desnormalized).length)

        return { 
            status: "OK",
            empresa: empresa,
            empresa_length: JSON.stringify(empresa).length,
            normalized: normalizedCompany,
            normalized_length: JSON.stringify(normalizedCompany).length}
    }

}

export let practica4Service = new Practica4()