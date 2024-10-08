import { RegisterRequest, RegisterResponse } from "@/entities/grpc";
import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"


const grpcService = {
    AuthenticateUser: (
        call: ServerUnaryCall<RegisterRequest, RegisterResponse>,
        callback: sendUnaryData<RegisterResponse>
    ) => {
        callback(null, { status: 200, msg: 'User authenticated', token: 'jwt-token' });
    },
};

export default grpcService