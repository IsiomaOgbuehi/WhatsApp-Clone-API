"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const mongoose_1 = require("mongoose");
const MessageSchema = new mongoose_1.Schema({
    message: {
        type: String,
        required: String,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
    },
    assignedTo: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "rooms",
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true,
    },
    received: {
        type: Boolean,
        default: true,
    },
    viewed: {
        type: Boolean,
        default: false,
    }
});
const Messages = mongoose_1.model("messages", MessageSchema);
exports.Messages = Messages;
