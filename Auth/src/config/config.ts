import { config } from "dotenv"
import ConfigInterface from "../entities/configInterface"
config()

const env = process.env

const ORIGIN:string[] = [
    env.GATEWAY || "",
    env.CHAT_API || ""
]
const Config = <ConfigInterface>{
    PORT: env.AUTH_PORT || "",
    MONGO: env.MONGO || "",
    API:env.AUTH_API,
    ORIGIN:ORIGIN,
    GRPC:env.GRPC_PORT,
}

export default Config;