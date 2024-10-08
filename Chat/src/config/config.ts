import { config } from "dotenv"
import ConfigInterface from "../entities/configInterface"
config()

const env = process.env

const ORIGIN: string[] = [
    env.GATEWAY || "",
    env.AUTH_API || ""
]
const Config = <ConfigInterface>{
    PORT: env.CHAT_PORT || "",
    MONGO: env.MONGO || "",
    API: env.CHAT_API,
    ORIGIN: ORIGIN,
    GRPC: env.GRPC_PORT
}

export default Config;