"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../../models/Users");
class ShowUserService {
    async execute(email) {
        email.toLowerCase();
        const user = await Users_1.User.find({ email });
        if (!user) {
            throw new Error('User not found status:400');
        }
        return user;
    }
}
exports.default = new ShowUserService();
