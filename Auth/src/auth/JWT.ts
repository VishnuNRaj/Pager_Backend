import { sign, verify, JwtPayload } from "jsonwebtoken";
import JWTInterface from "../entities/jwtInterface";
import JWTConfig from "../config/jwt";

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
    data?: JwtPayload | string;
}

export function VerifyToken(token: string): VerifyTokenResponse {
    try {
        const data = verify(token, JWTConfig.secret);
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
