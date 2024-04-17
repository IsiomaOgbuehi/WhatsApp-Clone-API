"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListRoomMessagesService_1 = __importDefault(require("../../services/Room/ListRoomMessagesService"));
class ListRoomMessagesController {
    async handle(request, response) {
        const room_id = request.params.id;
        const last_message = request.query.last_message || '';
        const room_messages = await ListRoomMessagesService_1.default
            .execute(room_id, String(last_message));
        return response.json(room_messages);
    }
}
exports.default = new ListRoomMessagesController();
