"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongooseConfig;
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../../config/config"));
function mongooseConfig() {
    (0, mongoose_1.connect)(config_1.default.MONGO, {
        autoCreate: true,
        ssl: true,
        tlsAllowInvalidCertificates: true,
    }).then(() => console.log("Mongoose connected")).catch(() => console.error("Mongoose Error While Connecting"));
}
