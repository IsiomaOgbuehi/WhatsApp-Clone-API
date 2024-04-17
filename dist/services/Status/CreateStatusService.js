"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Room_1 = require("../../models/Room");
const Status_1 = require("../../models/Status");
class CreateStatusService {
    async execute({ color, owner, file, message }) {
        const myRooms = await Room_1.Room.find({ users: { $in: owner } });
        const destinedTo = [];
        myRooms.forEach(item => item.users.forEach(user => String(user) !== String(owner) && destinedTo.push(user)));
        const status = await Status_1.Status.create({ color, owner, file: file.path, message, destinedTo });
        return status;
    }
}
exports.default = new CreateStatusService();
