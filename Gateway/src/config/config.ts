import { config } from "dotenv"
import ConfigInterface from "../entities/configInterface"
config()

const env = process.env


const Config = <ConfigInterface>{
    PORT: env.GATEWAY_PORT || "",
    API:env.GATEWAY,
    PROXY:{
        AUTH:env.AUTH_API || "",
        CHAT:env.CHAT_API || ""
    }
}

export default Config;