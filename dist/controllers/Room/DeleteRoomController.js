"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteRoomService_1 = __importDefault(require("../../services/Room/DeleteRoomService"));
class DeleteRoomController {
    async handle(request, response) {
        const room_id = request.params.id;
        await DeleteRoomService_1.default.execute(room_id);
        return response.sendStatus(200);
    }
}
exports.default = new DeleteRoomController();
