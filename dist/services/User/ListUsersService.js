"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../../models/Users");
class ListUsersService {
    async execute() {
        const users = await Users_1.User.find();
        return users;
    }
}
exports.default = new ListUsersService();
