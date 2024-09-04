import * as Request from "../entities/requestInterface";
import * as Response from "../entities/responseInterface"
export default async function RegisterWithPhoneAndEmail(req: Request.RegisterWithPhoneAndEmail): Promise<Response.RegisterResponse> {
    try {
        const { phone, password, name, email } = req;
        if (!phone || !password || !email || !name) {
            return {
                message: "Invalid Credentials",
                status: false
            }
        }
        return {
            message: "Invalid Credentials",
            status: false
        }
        
    } catch (e) {
        return {
            message: "Invalid Credentials",
            status: false
        }
    }
}