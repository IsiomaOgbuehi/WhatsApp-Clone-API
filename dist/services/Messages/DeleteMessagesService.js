"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = require("../../models/Message");
class DeleteMessagesService {
    async execute(message_id) {
        await Message_1.Messages.findByIdAndDelete(message_id);
        return;
    }
}
exports.default = new DeleteMessagesService();
