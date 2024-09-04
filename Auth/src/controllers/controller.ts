import { Request, Response } from "express";
import RegisterWithPhoneAndEmail from "../functions/RegisterWithEmailAndPhone";

export async function Register(req: Request, res: Response) {
    try {
        const data = req.body
        const response = await RegisterWithPhoneAndEmail(data)
    } catch (e) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}