"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const mongoose_1 = require("mongoose");
const RoomSchema = new mongoose_1.Schema({
    messages: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "messages",
        },
    ],
    users: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
    ],
    unreadMessages: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "users",
            required: false,
        },
    ],
});
const Room = mongoose_1.model("rooms", RoomSchema);
exports.Room = Room;
