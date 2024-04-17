"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const mongoose_1 = require("mongoose");
const StatusSchema = new mongoose_1.Schema({
    file: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    validity: {
        type: Date,
        required: true,
        default: new Date(+new Date() + 1 * 24 * 60 * 60 * 1000) // 1 day of validity
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'users'
    },
    viewedBy: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'users',
        }],
    color: {
        type: String,
        default: "#dd00dd"
    },
    destinedTo: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'users'
        }],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});
const Status = mongoose_1.model('status', StatusSchema);
exports.Status = Status;
