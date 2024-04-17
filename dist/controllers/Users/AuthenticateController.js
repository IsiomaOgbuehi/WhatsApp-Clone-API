"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthenticateService_1 = __importDefault(require("../../services/User/AuthenticateService"));
class AuthenticateController {
    async handle(request, response) {
        const { email, password } = request.body;
        const user_and_token = await AuthenticateService_1.default.execute({
            email, password
        });
        return response.json(user_and_token);
    }
}
exports.default = new AuthenticateController();
