"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListMyStatusService_1 = __importDefault(require("../../services/Status/ListMyStatusService"));
class ListMyStatusController {
    async handle(request, response) {
        const my_id = request.user_id;
        const myStatus = await ListMyStatusService_1.default.execute(my_id);
        return response.json(myStatus);
    }
}
exports.default = new ListMyStatusController();
