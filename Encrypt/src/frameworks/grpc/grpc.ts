import path from 'path';
import * as grpc from '@grpc/grpc-js';
import { Server, ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';
import Config from '../../config/config';
import grpcService from '../../controllers/grpc';

const PROTO_PATH = path.join(__dirname, '../../../encrypt.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String, 
    enums: String,
    defaults: true,
    oneofs: true,
});

const authProto = grpc.loadPackageDefinition(packageDefinition).encrypt as any;
 export function startGrpcServer() {
    const server: Server = new grpc.Server();
    server.addService((authProto as any).EncService.service, grpcService);

    const port = Config.GRPC; 
    server.bindAsync(port, grpc.ServerCredentials.createInsecure(), (error, port) => {
        if (error) {
            console.error('Error starting gRPC server:', error);
            return;
        } 
        console.log(`gRPC server started on port ${port}`);
    });
}
