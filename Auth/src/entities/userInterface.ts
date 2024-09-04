import { Document } from "mongoose";

export default interface IUser extends Document {
    name:string;
    email:string;
    password:string;
    phone:string;
    randomId:string;
    description:string;
    profile:string;
    verified:boolean;
}