import IContacts from "@/entities/contactsInterface";
import ContactModel from "../model/Contact";

export async function addContacts(data: IContacts) {
    return await ContactModel.insertMany([data])
}