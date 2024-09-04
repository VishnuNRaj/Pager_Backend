import express, { Application } from "express";
import Config from "../../config/config";
import router from "../../controllers/route"
export default function App(): Application {
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use("/", router)

    app.listen(Config.PORT, () => console.log(`Auth server at ${Config.PORT}`))
    return app
}

