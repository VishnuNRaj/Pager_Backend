import cors from "cors"
import { config } from "dotenv"
config() 

const env = process.env;
export default function corsConfig() {
    return cors({
        credentials: true,
        preflightContinue: true,
        origin: [env.CHAT_API as string, env.GATEWAY as string]
    })
}