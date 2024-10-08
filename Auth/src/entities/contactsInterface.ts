import { Document, ObjectId } from "mongoose";
import IUser from "./userInterface";

export default interface IContacts extends Document {
    _id:ObjectId;
    userId:ObjectId;
    contactId:ObjectId;
    name:string;
    user:IUser;
}