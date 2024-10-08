import { sign, verify, JwtPayload } from "jsonwebtoken";
import JWTInterface from "../entities/jwtInterface";
import JWTConfig from "../config/jwt";
import { ObjectId } from "mongoose";

export function GenerateToken(data: JWTInterface, remember: boolean): string | null {
    try {
        const token = sign(data, JWTConfig.secret, { expiresIn: remember ? JWTConfig.remember : JWTConfig.expiry });
        return token;
    } catch (e: any) {
        console.error("Token generation failed:", e.message);
        return null;
    }
}

interface VerifyTokenResponse {
    status: boolean;
    message: string;
    data?: JWTInterface;
}

export function VerifyToken(token: string): VerifyTokenResponse {
    try {
        const data = verify(token, JWTConfig.secret) as JWTInterface
        return {
            status: true,
            message: "Token verified successfully.",
            data: data,
        };
    } catch (e: any) {
        let message = "Token verification failed.";
        if (e.name === "TokenExpiredError") {
            message = "Token expired.";
        } else if (e.name === "JsonWebTokenError") {
            message = "JWT malformed.";
        }

        console.error(message, e.message);

        return {
            status: false,
            message: message,
        };
    }
}

export function CreateOTPToken(userId: ObjectId): string | null {
    try {
        const token = sign({ userId, verified: false }, JWTConfig.secret, { expiresIn: "180s" });
        return token;
    } catch (e: any) {
        console.error("Token generation failed:", e.message);
        return null;
    }
}