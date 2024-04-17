"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListStatusToMeService_1 = __importDefault(require("../../services/Status/ListStatusToMeService"));
class ListStatusToMeController {
    async handle(request, response) {
        const my_id = request.user_id;
        const statusToMe = await ListStatusToMeService_1.default.execute(my_id);
        return response.json(statusToMe);
    }
}
exports.default = new ListStatusToMeController();
