import IUser from "../../../entities/userInterface";
import { hash } from "bcryptjs";
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