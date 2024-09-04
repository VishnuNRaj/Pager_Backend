import { connect } from "mongoose"
import Config from "../../config/config"
export default function mongooseConfig() {
    connect(Config.MONGO, {
        autoCreate: true,
        ssl: true,
        tlsAllowInvalidCertificates: true,
    }).then(() => console.log("Mongoose connected")).catch(() => console.error("Mongoose Error While Connecting"))
}