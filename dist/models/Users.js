"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    isOnline: {
        type: Boolean,
        required: true,
        default: true,
    },
    lastOnline: {
        type: Date,
        required: true,
        default: Date.now,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});
UserSchema.pre("save", async function (next) {
    const hash = await bcryptjs_1.default.hash(this.password, 10);
    this.password = hash;
    next();
});
const User = mongoose_1.model("users", UserSchema);
exports.User = User;
