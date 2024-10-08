import { Document, ObjectId } from "mongoose";

export default interface OTPInterface extends Document {
    _id:ObjectId;
    otp:string;
    userId:ObjectId;
}