import IUser from "../../../entities/userInterface";
import { Schema, model } from "mongoose";
import { bcryptUser } from "../functions/User";

export const userSchema = new Schema<IUser>({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    randomId: String,
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    profile: String,
    verified:{
        type:Boolean,
        default:false
    }
})

userSchema.post("insertMany",(data:IUser[])=>bcryptUser(data))


const UserModel = model<IUser>("users", userSchema)
export default UserModel