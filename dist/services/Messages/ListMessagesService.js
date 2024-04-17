"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = require("../../models/Message");
class ListMessagesService {
    async execute() {
        const messages = Message_1.Messages.find().populate("users");
        return messages;
    }
}
exports.default = new ListMessagesService();
