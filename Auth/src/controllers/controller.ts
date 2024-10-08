import { Request, Response } from "express";
import RegisterWithPhoneAndEmail from "@/functions/RegisterWithEmailAndPhone";
import OTPValidation from "@/functions/ OTPValidation";

export async function Register(req: Request, res: Response) {
    try {
        const data = req.body;
        const response = await RegisterWithPhoneAndEmail(data);
        res.status(response.status ? 200 : 401).json(response);
    } catch (e: any) {
        res.status(500).json({ message: e.message });
    }
}

export async function OTP(req: Request, res: Response) {
    try {
        const data = req.body;
        const response = await OTPValidation(data)
        res.status(response.status ? 200 : 401).json(response);
    } catch (e: any) {
        res.status(500).json({ message: e.message })
    }
}

export async function AddContact(req: Request, res: Response) {
    try {
        const data = req.body;
        const response = await OTPValidation(data)
        res.status(response.status ? 200 : 401).json(response);
    } catch (e: any) {
        res.status(500).json({ message: e.message })
    }
}

