import { Defaults } from "./configInterface";
import IContacts from "./contactsInterface";

export interface RegisterResponse extends Defaults {
    token?: string;
}

export interface OTPResponse extends Defaults {
    token?:string;
    refresh?:string;
}

export interface AddContactResponse extends Defaults {
    contact?:IContacts;
}