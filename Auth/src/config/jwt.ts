import { config } from "dotenv"
config()
const env = process.env
interface JWTConfigInterface {
    secret:string;
    expiry:string;
    remember:string;
}
const JWTConfig:JWTConfigInterface = {
    secret:env.JWT_SECRET || "",
    expiry:env.JWT_EXPIRY || "",
    remember:env.JWT_REMEMBER || ""
}

export default JWTConfig