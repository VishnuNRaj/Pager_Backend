import { ObjectId } from "mongoose";
import OTPModel from "../model/Otp";
import OTPInterface from "@/entities/otpInterface";

export async function createOrUpdtaeOTP(otp: string, userId: ObjectId) {
    try {
        const response = await OTPModel.updateOne(
            { userId: userId },
            { $set: { otp: otp, userId: userId } },
            { upsert: true, new: true }
        )
        return response;
    } catch (e) {
        return null
    }
}

export async function getOTPS(userId: ObjectId) {
    return await OTPModel.findOne({ userId: userId })
}