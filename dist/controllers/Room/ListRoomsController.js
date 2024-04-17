"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListRoomsService_1 = __importDefault(require("../../services/Room/ListRoomsService"));
class ListRoomsController {
    async handle(request, response) {
        const user_id = request.user_id;
        const rooms = await ListRoomsService_1.default.execute(user_id);
        return response.json(rooms);
    }
}
exports.default = new ListRoomsController();
