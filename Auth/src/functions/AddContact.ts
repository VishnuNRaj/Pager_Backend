import * as Request from "@/entities/requestInterface";
import { AddContactResponse } from "@/entities/responseInterface";
import IUser from "@/entities/userInterface";
import { getUserWithPhoneAndLocation } from "@/frameworks/database/functions/User";

export default async function AddContact(req: Request.AddContact): Promise<AddContactResponse> {
    try {
        const { location, name, phone } = req
        if (!location || !name || !phone) {
            return {
                message: "Invalid Credentials",
                status: false
            }
        }
        const user: IUser | null = await getUserWithPhoneAndLocation(location, phone.toString())
        if(!user) {
            return {
                message: "No account exists",
                status: false
            }
        }
        
        return {
            message: "",
            status: true
        }
    } catch (e: any) {
        return {
            message: e.message,
            status: false
        }
    }
}