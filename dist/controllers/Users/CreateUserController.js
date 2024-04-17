"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateUserService_1 = __importDefault(require("../../services/User/CreateUserService"));
class CreateUserController {
    async handle(request, response) {
        const { name, email, password } = request.body;
        const user = await CreateUserService_1.default.execute({
            name, email, password
        });
        return response.json(user);
    }
}
exports.default = new CreateUserController();
