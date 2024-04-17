"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../../models/Users");
class DeleteUserService {
    async execute(user_id) {
        await Users_1.User.findByIdAndDelete(user_id);
        return;
    }
}
exports.default = new DeleteUserService();
