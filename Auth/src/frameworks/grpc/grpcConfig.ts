import path from 'path';
import * as grpc from '@grpc/grpc-js';
import { Server, ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';

// Define the path to the .proto file
const PROTO_PATH = path.join(__dirname, './../../../auth.proto');
console.log(`Loading proto from: ${PROTO_PATH}`);

// Load the protobuf definitions
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const authProto = grpc.loadPackageDefinition(packageDefinition).auth as any;

interface RegisterRequest {
    name: string;
    password: string;
    email: string;
    phone: string;
}

interface RegisterResponse {
    status: number;
    msg: string;
    token: string;
}

const authService = {
    AuthenticateUser: (
        call: ServerUnaryCall<RegisterRequest, RegisterResponse>,
        callback: sendUnaryData<RegisterResponse>
    ) => {
        // Example logic for authentication
        callback(null, { status: 200, msg: 'User authenticated', token: 'jwt-token' });
    },
    RegisterUser: (
        call: ServerUnaryCall<RegisterRequest, RegisterResponse>,
        callback: sendUnaryData<RegisterResponse>
    ) => {
        const { name, password, email, phone } = call.request;
        // Example logic for registration
        callback(null, { status: 201, msg: 'User registered', token: 'jwt-token' });
    },
};

// Function to start the gRPC server
export function startGrpcServer() {
    const server: Server = new grpc.Server();
    server.addService((authProto as any).AuthService.service, authService);

    const port = '0.0.0.0:50067';
    server.bindAsync(port, grpc.ServerCredentials.createInsecure(), (error, port) => {
        if (error) {
            console.error('Error starting gRPC server:', error);
            return;
        }
        console.log(`gRPC server started on port ${port}`);
        server.start();
    });
}
