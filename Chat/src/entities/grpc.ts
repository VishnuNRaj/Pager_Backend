export interface RegisterRequest {
    name: string;
    password: string;
    email: string;
    phone: string;
}

export interface RegisterResponse {
    status: number;
    msg: string;
    token: string;
}