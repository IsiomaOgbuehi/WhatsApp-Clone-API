"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = require("../../models/Message");
class ListRoomMessagesService {
    async execute(room_id, last_message) {
        let room = [];
        !last_message ?
            room = await Message_1.Messages.find({ assignedTo: room_id })
                .sort({ _id: -1 }).limit(50)
            :
                room = await Message_1.Messages.find({ _id: { $lt: last_message }, assignedTo: room_id })
                    .sort({ _id: -1 }).limit(50);
        if (!room) {
            throw new Error('Room not found status:400');
        }
        return room.reverse();
    }
}
exports.default = new ListRoomMessagesService();
