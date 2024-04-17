"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Room_1 = require("../../models/Room");
const Users_1 = require("../../models/Users");
class CreateRoomService {
    async execute({ user, user_id }) {
        const roomId = (await Room_1.Room.findOne({ users: [user_id, user] })) ||
            (await Room_1.Room.findOne({ users: [user, user_id] }));
        if (roomId) {
            throw new Error("Room already exists status:400");
        }
        const room = await Room_1.Room.create({
            users: [user_id, user],
        });
        const user_data = await Users_1.User.findById(user);
        return ({
            _id: room._id,
            messages: room.messages,
            user: [user_data],
            unreadMessages: 0
        });
    }
}
exports.default = new CreateRoomService();
