"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../../config/config"));
function App() {
    const app = (0, express_1.default)();
    app.listen(config_1.default.PORT, () => console.log(`Auth server at ${config_1.default.PORT}`));
    return app;
}
