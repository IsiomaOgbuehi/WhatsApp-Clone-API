"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
class handleGenerateJWT {
    handle(user) {
        const jwtSecret = process.env.TOKEN_SECRET;
        const token = jsonwebtoken_1.sign({ id: user._id }, jwtSecret, { expiresIn: 86400 });
        return token;
    }
}
exports.default = new handleGenerateJWT().handle;
