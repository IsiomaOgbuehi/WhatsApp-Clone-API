"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCatcher = void 0;
function ErrorCatcher(error, request, response, next) {
    try {
        const [message, statusString] = error.message.split('status:');
        const status = Number(statusString) || 500;
        if (error instanceof Error) {
            return response.status(status).send({ error: message.trim() });
        }
    }
    catch (error) {
        return response.status(500).send({ error });
    }
}
exports.ErrorCatcher = ErrorCatcher;
