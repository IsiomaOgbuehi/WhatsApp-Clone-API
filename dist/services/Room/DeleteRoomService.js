"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = require("../../models/Message");
const Room_1 = require("../../models/Room");
class DeleteRoomService {
    async execute(room_id) {
        const messagesRoom = await Room_1.Room.findById(room_id);
        await Room_1.Room.findByIdAndRemove(room_id);
        messagesRoom.messages.map(async (message) => {
            await Message_1.Messages.findByIdAndDelete(message._id);
        });
    }
}
exports.default = new DeleteRoomService();
