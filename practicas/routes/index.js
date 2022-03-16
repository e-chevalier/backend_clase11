import { practica1Api } from "../components/practica1/index.js"
import { practica2Api } from "../components/practica2/index.js"
import { practica3Api } from "../components/practica3/index.js"
import { practica4Api } from "../components/practica4/index.js"
import { practica5Api } from "../components/practica5/index.js"

export const serverRoutes = ( app ) => {
    practica1Api(app)
    practica2Api(app)
    practica3Api(app)
    practica4Api(app)
    practica5Api(app)

    app.get("/", (req, res, next) => {
        res.send("Todo ok")
    })
    /**
    * Undefined endpoint
    */
    app.all('*', (req, res, next) => {
        res.json({ error: -2, descripcion: `Ruta ${req.url} método ${req.method} no implementada.` })
    })
}