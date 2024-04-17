"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = require("path");
const options = {
    storage: multer_1.default.diskStorage({
        destination: path_1.join(__dirname, "..", '..', 'uploads'),
        filename: (req, file, cb) => {
            console.log('arquivooooooooooooooo ', file);
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024 //5MB
    },
    fileFilter: (req, file, cb) => {
        const mimeTypes = [
            'image/jpeg',
            'image/png',
            'video/mp4'
        ];
        if (!mimeTypes.includes(file.mimetype)) {
            return cb(null, false);
        }
        cb(null, true);
    },
};
exports.options = options;
