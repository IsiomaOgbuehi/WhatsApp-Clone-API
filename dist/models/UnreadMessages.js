"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnreadMessages = void 0;
const mongoose_1 = require("mongoose");
const UnreadMessagesSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    message: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'messages',
        required: true,
    },
    to: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'rooms',
        required: true,
    }
});
const UnreadMessages = mongoose_1.model('unreadMessages', UnreadMessagesSchema);
exports.UnreadMessages = UnreadMessages;
