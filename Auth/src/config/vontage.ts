import VontageInterface from "../entities/vontageInterface";
import { config } from "dotenv"
config()

const env = process.env
const VontageConfig = <VontageInterface>{
    apiKey:env.VONTAGE_API || "",
    secret:env.VONTAGE_SECRET || "",
    phone:env.MY_NUMBER || "9567358657"
}

export default VontageConfig