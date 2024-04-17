"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Room_1 = require("../../models/Room");
const UnreadMessages_1 = require("../../models/UnreadMessages");
class ListRoomsService {
    async execute(user_id) {
        const rooms = await Room_1.Room.find({ users: { $in: user_id } }, { messages: { $slice: -1 } }).populate(['users', 'messages']);
        const formattedRooms = await Promise.all(rooms.map(async (room) => {
            const unreadMessages = await UnreadMessages_1.UnreadMessages.countDocuments({ to: room._id, user: { $nin: user_id } });
            return ({
                _id: room._id,
                messages: room.messages,
                user: room.users.filter((user) => String(user._id) !== String(user_id)),
                unreadMessages
            });
        }));
        return formattedRooms;
    }
}
exports.default = new ListRoomsService();
