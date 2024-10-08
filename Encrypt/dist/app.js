"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const mongoose_1 = __importDefault(require("./frameworks/database/mongoose"));
const grpc_1 = require("./frameworks/grpc/grpc");
const app_1 = __importDefault(require("./frameworks/server/app"));
const server_1 = __importDefault(require("./frameworks/server/server"));
const app = (0, app_1.default)();
exports.server = (0, server_1.default)(app);
(0, mongoose_1.default)();
(0, grpc_1.startGrpcServer)();
exports.default = app;
