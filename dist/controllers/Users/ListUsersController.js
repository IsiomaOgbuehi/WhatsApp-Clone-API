"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListUsersService_1 = __importDefault(require("../../services/User/ListUsersService"));
class ListUsersController {
    async handle(request, response) {
        const users = await ListUsersService_1.default.execute();
        return response.json(users);
    }
}
exports.default = new ListUsersController();
