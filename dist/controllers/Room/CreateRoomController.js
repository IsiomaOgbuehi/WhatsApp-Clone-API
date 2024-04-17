"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateRoomService_1 = __importDefault(require("../../services/Room/CreateRoomService"));
class CreateRoomController {
    async handle(request, response) {
        const user = request.params.id;
        const user_id = request.user_id;
        const room = await CreateRoomService_1.default.execute({
            user,
            user_id,
        });
        return response.json(room);
    }
}
exports.default = new CreateRoomController();
