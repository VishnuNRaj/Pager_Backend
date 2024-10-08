import { Document, ObjectId } from "mongoose";

export default interface IUser extends Document {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    phone: string;
    randomId: string;
    description: string;
    profile: string;
    verified: boolean;
    location:string;
}