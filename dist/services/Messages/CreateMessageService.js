"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = require("../../models/Message");
const Room_1 = require("../../models/Room");
class CreateMessageService {
    async execute({ message, assignedTo, user_id }) {
        const newMessage = await Message_1.Messages.create({
            message,
            assignedTo,
            user: user_id,
        });
        const room = await Room_1.Room.findById(assignedTo);
        await room.messages.push(newMessage);
        await room.save();
        return newMessage;
    }
}
exports.default = new CreateMessageService();
