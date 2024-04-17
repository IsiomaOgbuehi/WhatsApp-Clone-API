"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Status_1 = require("../../models/Status");
class ListMyStatusService {
    async execute(my_id) {
        const my_status = await Status_1.Status.find({ owner: my_id }).sort('validity');
        return my_status;
    }
}
exports.default = new ListMyStatusService();
