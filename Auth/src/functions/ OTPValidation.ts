import { VerifyToken } from "@/auth/JWT";
import OTPInterface from "@/entities/otpInterface";
import * as Request from "@/entities/requestInterface";
import * as Response from "@/entities/responseInterface";
import IUser from "@/entities/userInterface";
import { getOTPS } from "@/frameworks/database/functions/OTP";
import { getUserWithUserId } from "@/frameworks/database/functions/User";

export default async function OTPValidation(req: Request.OTPValidation): Promise<Response.OTPResponse> {
    try {
        const { otp, token } = req
        if (!token || !otp || otp.length < 6) {
            return {
                message: `Invalid Credentials`,
                status: false,
            }
        }
        const data = VerifyToken(token)
        if (!data.status) {
            return {
                message: `${data.message}`,
                status: false,
            }
        }
        const user: IUser | null = await getUserWithUserId(data.data?.id as string)
        if (!user || user.verified) {
            return {
                message: `No user found`,
                status: false,
            }
        } else {
            const IOtp: OTPInterface | null = await getOTPS(user._id)
            if (!IOtp || IOtp.otp === otp) {
                return {
                    message: `${!IOtp ? "OTP Expired" : "Incorrect OTP"}`,
                    status: false,
                }
            }
            user.verified = true;
            await Promise.all([
                await user.save(),
                await IOtp.deleteOne(),
            ])
        }
        return {
            message: `Invalid Credentials`,
            status: false,
        }
    } catch (e: any) {
        throw new Error(e)
    }
}