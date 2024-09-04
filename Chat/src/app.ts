import mongooseConfig from "./frameworks/database/mongoose"
import App from "./frameworks/server/app"
import httpServer from "./frameworks/server/server"

const app = App()
export const server = httpServer(app) 
mongooseConfig()
export default app;