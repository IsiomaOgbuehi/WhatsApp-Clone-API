"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../../models/Users");
const handleGenerateJWT_1 = __importDefault(require("../../utils/handleGenerateJWT"));
class CreateUserService {
    async execute({ email, name, password }) {
        const alreadyExists = await Users_1.User.findOne({ email });
        if (alreadyExists) {
            throw new Error("User already exists status:400");
        }
        const user = await Users_1.User.create({
            name,
            email,
            password,
        });
        user.password = undefined;
        const token = handleGenerateJWT_1.default(user);
        return { user, token };
    }
}
exports.default = new CreateUserService();
