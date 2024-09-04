export interface LoginWithPhone {
    phone:string;
    password:string;
    remember:boolean;
}

export interface LoginWithEmail {
    email:string;
    password:string;
    remember:boolean;
}

export interface RegisterWithPhoneAndEmail {
    name:string;
    phone:string;
    password:string;
    email:string;
    otp:string;
    remember:boolean;
}