"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShowUserService_1 = __importDefault(require("../../services/User/ShowUserService"));
class ShowUserController {
    async handle(request, response) {
        const { email } = request.body;
        const user = await ShowUserService_1.default.execute(email);
        return response.json(user);
    }
}
exports.default = new ShowUserController();
