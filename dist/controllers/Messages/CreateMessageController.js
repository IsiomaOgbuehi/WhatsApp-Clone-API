"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateMessageService_1 = __importDefault(require("../../services/Messages/CreateMessageService"));
class CreateMessageController {
    async handle(request, response) {
        const { message, assignedTo } = request.body;
        const user_id = request.user_id;
        const newMessage = await CreateMessageService_1.default.execute({
            message, assignedTo, user_id
        });
        return response.json(newMessage);
    }
}
exports.default = new CreateMessageController();
