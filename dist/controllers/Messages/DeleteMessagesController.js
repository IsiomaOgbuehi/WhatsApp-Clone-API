"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteMessagesService_1 = __importDefault(require("../../services/Messages/DeleteMessagesService"));
class DeleteMessagesController {
    async handle(request, response) {
        const message_id = request.params.id;
        await DeleteMessagesService_1.default.execute(message_id);
        return response.sendStatus(200);
    }
}
exports.default = new DeleteMessagesController();
