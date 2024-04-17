"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShowRoomService_1 = __importDefault(require("../../services/Room/ShowRoomService"));
class ShowRoomController {
    async handle(request, response) {
        const room_id = request.params.id;
        const room = await ShowRoomService_1.default.execute(room_id);
        return response.json(room);
    }
}
exports.default = new ShowRoomController();
