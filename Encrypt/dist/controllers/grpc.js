"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpcService = {
    StoreKeys: (call, callback) => {
        callback(null, { status: true, message: 'User authenticated', });
    },
};
exports.default = grpcService;
