"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteUserService_1 = __importDefault(require("../../services/User/DeleteUserService"));
class DeleteUserController {
    async handle(request, response) {
        const user_id = request.params.id;
        await DeleteUserService_1.default.execute(user_id);
        return response.sendStatus(200);
    }
}
exports.default = new DeleteUserController();
