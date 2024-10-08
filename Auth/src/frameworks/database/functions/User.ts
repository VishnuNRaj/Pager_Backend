import IUser from "../../../entities/userInterface";
import { hash } from "bcryptjs";
import UserModel from "../model/User";
import { ObjectId, Types } from "mongoose";
export async function bcryptUser(data: IUser[]) {
    try {
        for (const user of data) {
            user.password = await hash(user.password, 10)
            await user.save()
        }
    } catch (e) {
        console.log(e)
    }
}


export async function getUserWithEmailOrPhone(email: string, phone: string) {
    return await UserModel.findOne({
        $or: [
            { email: email },
            { phone: phone }
        ]
    })
}

export async function getUserWithUserId(userId: string) {
    const id = new Types.ObjectId(userId);
    return await UserModel.findById(id)
}

export async function createUser({ name, email, password, phone, location }: IUser): Promise<IUser> {
    const [user] = await UserModel.insertMany([{
        name, email, password, phone, location
    }])
    return user;
}

export async function getUserWithPhoneAndLocation(location: string, phone: string) {
    return await UserModel.findOne({ location: location, phone: phone })
}