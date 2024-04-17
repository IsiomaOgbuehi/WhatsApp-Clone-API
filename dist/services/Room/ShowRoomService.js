"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Room_1 = require("../../models/Room");
class ShowRoomService {
    async execute(room_id) {
        const room = await Room_1.Room.findById(room_id).populate(['users', 'messages']);
        return room;
    }
}
exports.default = new ShowRoomService();
