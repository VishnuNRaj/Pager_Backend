"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const env = process.env;
const ORIGIN = [
    env.GATEWAY || "",
    env.AUTH_API || ""
];
const Config = {
    PORT: env.CHAT_PORT || "",
    MONGO: env.MONGO_CHAT || "",
    API: env.CHAT_API,
    ORIGIN: ORIGIN
};
exports.default = Config;
