import mongooseConfig from "./frameworks/database/mongoose"
import { startGrpcServer } from "./frameworks/grpc/grpcConfig"
import App from "./frameworks/server/app"
import httpServer from "./frameworks/server/server"

const app = App()
export const server = httpServer(app) 
mongooseConfig()
startGrpcServer()
export default app;