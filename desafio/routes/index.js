import { viewOneApi } from "../components/viewOne/index.js"

export const serverRoutes = ( app ) => {
    viewOneApi(app)

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