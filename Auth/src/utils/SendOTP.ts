import { Vonage } from "@vonage/server-sdk";
import { Auth } from "@vonage/auth";
import VontageConfig from "@/config/vontage";
import { SendMailInterface } from "@/entities/utilsInterface";
import crypto from 'crypto';
import { createOrUpdtaeOTP } from "@/frameworks/database/functions/OTP";
export function generateOtp(): string {
    const otp = crypto.randomInt(100000, 999999).toString();
    return otp;
}

const vonage = new Vonage(
    new Auth({
        apiKey: VontageConfig.apiKey,
        apiSecret: VontageConfig.secret
    })
);

export default async function SendOtp({ phone, userId }: SendMailInterface): Promise<string | null> {
    try {
        const otp = generateOtp()
        const text = `Verification OTP for Pager is ${otp}. It will expire in ${3} minutes. Click `;

        await Promise.all([
            await vonage.sms.send({
                to: phone,
                from: VontageConfig.phone,
                text: text
            }),
            await createOrUpdtaeOTP(otp, userId)
        ])
        return otp;
    } catch (error) {
        console.error("Error sending SMS:", error);
        return null
    }
}
