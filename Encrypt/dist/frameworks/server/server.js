"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = httpServer;
const http_1 = require("http");
function httpServer(app) {
    const server = (0, http_1.createServer)(app);
    return server;
}
