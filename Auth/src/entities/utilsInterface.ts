import { ObjectId } from "mongoose";

export interface SendMailInterface {
    phone:string;
    userId:ObjectId;
}