"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = require("../../models/Message");
class DeleteAllMessages {
    async handle(request, response) {
        await Message_1.Messages.deleteMany({});
        return response.sendStatus(200);
    }
}
exports.default = new DeleteAllMessages();
