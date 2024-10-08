import OTPInterface from "@/entities/otpInterface"
import { model, Schema, Types } from "mongoose"

export const OTPSchema = new Schema<OTPInterface>({
    otp: String,
    userId:{
        type:Types.ObjectId,
        unique:true,
    }
}, {
    timestamps:true,
    expireAfterSeconds:180,
})

const OTPModel = model<OTPInterface>("otps", OTPSchema)
export default OTPModel;