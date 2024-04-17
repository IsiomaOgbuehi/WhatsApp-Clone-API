"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../../models/Users");
class LogoutUserService {
    async execute(user_id) {
        await Users_1.User.findByIdAndUpdate(user_id, {
            isOnline: false,
            lastOnline: new Date,
        });
    }
}
exports.default = new LogoutUserService();
