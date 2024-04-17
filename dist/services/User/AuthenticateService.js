"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const Users_1 = require("../../models/Users");
const handleGenerateJWT_1 = __importDefault(require("../../utils/handleGenerateJWT"));
class AuthenticateService {
    async execute({ email, password }) {
        const user = await Users_1.User.findOne({ email }).select("+password");
        if (!user) {
            throw new Error("Email/password invalid status:400");
        }
        if (!await bcryptjs_1.compare(password, user.password)) {
            throw new Error('Email/password invalid status:400');
        }
        const token = handleGenerateJWT_1.default(user);
        return { user, token };
    }
}
exports.default = new AuthenticateService();
