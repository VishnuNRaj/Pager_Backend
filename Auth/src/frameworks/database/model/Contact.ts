import IContacts from "@/entities/contactsInterface"
import { Types, Schema, model } from "mongoose"

export const contactSchema = new Schema<IContacts>({
    name:String,
    userId:Types.ObjectId,
    contactId:{
        type:Types.ObjectId, 
    }
})

const ContactModel = model<IContacts>("contacts",contactSchema)
export default ContactModel;