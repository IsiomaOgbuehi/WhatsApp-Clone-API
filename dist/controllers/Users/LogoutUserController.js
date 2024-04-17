"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogoutUserService_1 = __importDefault(require("../../services/User/LogoutUserService"));
class LogoutUserController {
    async handle(request, response) {
        const user_id = request.user_id;
        await LogoutUserService_1.default.execute(user_id);
        return response.sendStatus(200);
    }
}
exports.default = new LogoutUserController();
