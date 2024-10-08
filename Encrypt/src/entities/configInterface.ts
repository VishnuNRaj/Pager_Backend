export default interface ConfigInterface {
    PORT:string;
    MONGO:string;
    API:string;
    ORIGIN:string[];
    GRPC:string;
}

export interface Defaults {
    message:string;
    status:boolean;
}