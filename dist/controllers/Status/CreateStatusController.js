"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateStatusService_1 = __importDefault(require("../../services/Status/CreateStatusService"));
class CreateStatusController {
    async handle(request, response) {
        const { color, message } = request.body;
        const my_id = request.user_id;
        const file = request.file;
        const status = await CreateStatusService_1.default.execute({
            color,
            owner: my_id,
            file,
            message
        });
        return response.json(status);
    }
}
exports.default = new CreateStatusController();
