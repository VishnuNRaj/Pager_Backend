import { StoreKeysResponse, StoreKeys } from "@/entities/grpc";
import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js"


const grpcService = {
    StoreKeys: (
        call: ServerUnaryCall<StoreKeys, StoreKeysResponse>,
        callback: sendUnaryData<StoreKeysResponse>
    ) => {
        callback(null, { status: true, message: 'User authenticated', });
    },
};

export default grpcService