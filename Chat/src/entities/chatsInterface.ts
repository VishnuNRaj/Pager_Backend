import { ObjectId } from "mongoose";

export default interface IChats {
    userId: ObjectId;
    sender: ObjectId[];
    roomId: string;
    group:boolean;
}