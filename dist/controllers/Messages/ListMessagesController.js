"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListMessagesService_1 = __importDefault(require("../../services/Messages/ListMessagesService"));
class ListMessagesController {
    async handle(request, response) {
        const messages = await ListMessagesService_1.default.execute();
        return response.json(messages);
    }
}
exports.default = new ListMessagesController();
