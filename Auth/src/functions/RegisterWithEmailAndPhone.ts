import { CreateOTPToken } from "@/auth/JWT";
import * as Request from "@/entities/requestInterface";
import * as Response from "@/entities/responseInterface"
import IUser from "@/entities/userInterface";
import { createUser, getUserWithEmailOrPhone } from "@/frameworks/database/functions/User";
import binarySearch, { countryCodes } from "@/utils/CountryCode";
import SendOtp from "@/utils/SendOTP";
export default async function RegisterWithPhoneAndEmail(req: Request.RegisterWithPhoneAndEmail): Promise<Response.RegisterResponse> {
    try {
        const { phone, password, name, email, location } = req;
        if (!phone || !password || !email || !name) {
            return {
                message: "Invalid Credentials",
                status: false
            }
        }
        const code = binarySearch(countryCodes, parseInt(location))
        if (!code) {
            return {
                message: "Invalid Country Code or Not Supported",
                status: false
            }
        }
        const num = `+${code} ${phone}`;
        let user: IUser = await getUserWithEmailOrPhone(email, phone) as IUser;
        if (user && user.verified) {
            return {
                message: user.phone === num ? "Phone Number Already Used" : "Email Already Used",
                status: false
            };
        }
        if (!user) {
            user = await createUser(<IUser>{ name, email, phone, password, location: code }) as IUser
        }
        const otp = await SendOtp({ phone: num, userId: user._id as any })
        if (!otp) {
            return {
                message: "Invalid Credentials",
                status: false
            }
        }
        const token = CreateOTPToken(user._id as any) as string;
        return {
            message: `OTP shared to Registered Number`,
            status: true,
            token: token,
        }
    } catch (e: any) {
        throw new Error(e)
    }
}