"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Status_1 = require("../../models/Status");
class ListStatusToMeService {
    async execute(my_id) {
        const currentDate = new Date();
        const usersThatHasStatus = [];
        let currentUser = '';
        let currentIndex = 0;
        const statusToMe = await Status_1.Status.find({ destinedTo: { $in: my_id } }).populate('owner');
        statusToMe.forEach(async (item) => {
            if (item.validity.getTime() < currentDate.getTime()) {
                await Status_1.Status.findByIdAndDelete(item._id);
                return;
            }
            const itemFormatted = {
                _id: item._id,
                file: item.file,
                color: item.color,
                message: item.message,
                createdAt: item.createdAt
            };
            if (String(item.owner._id) !== String(currentUser)) {
                currentUser = item.owner._id;
                usersThatHasStatus.push({ owner: item.owner, status: [] });
                currentIndex = usersThatHasStatus.length - 1;
            }
            usersThatHasStatus[currentIndex].status.push(itemFormatted);
        });
        return usersThatHasStatus;
    }
}
exports.default = new ListStatusToMeService();
