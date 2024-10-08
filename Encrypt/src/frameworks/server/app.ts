import express, { Application } from "express";
import Config from "../../config/config";
export default function App():Application {
    const app = express()
    app.listen(Config.PORT,()=>console.log(`Auth server at ${Config.PORT}`))
    return app
}

