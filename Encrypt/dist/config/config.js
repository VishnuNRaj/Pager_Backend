"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const env = process.env;
const ORIGIN = [
    env.GATEWAY || "",
    env.CHAT_API || ""
];
const Config = {
    PORT: env.ENCRYPT_PORT || "",
    MONGO: env.MONGO || "",
    API: env.AUTH_API,
    ORIGIN: ORIGIN,
    GRPC: env.GRPC_PORT,
};
exports.default = Config;
