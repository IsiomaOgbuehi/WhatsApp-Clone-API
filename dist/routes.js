"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const checkAuth_1 = __importDefault(require("./middlewares/checkAuth"));
const multer_2 = require("./config/multer");
const CreateUserController_1 = __importDefault(require("./controllers/Users/CreateUserController"));
const ShowUserController_1 = __importDefault(require("./controllers/Users/ShowUserController"));
const AuthenticateController_1 = __importDefault(require("./controllers/Users/AuthenticateController"));
const DeleteUserController_1 = __importDefault(require("./controllers/Users/DeleteUserController"));
const LogoutUserController_1 = __importDefault(require("./controllers/Users/LogoutUserController"));
const ListUsersController_1 = __importDefault(require("./controllers/Users/ListUsersController"));
const CreateMessageController_1 = __importDefault(require("./controllers/Messages/CreateMessageController"));
const ListMessagesController_1 = __importDefault(require("./controllers/Messages/ListMessagesController"));
const DeleteMessagesController_1 = __importDefault(require("./controllers/Messages/DeleteMessagesController"));
const CreateRoomController_1 = __importDefault(require("./controllers/Room/CreateRoomController"));
const ListRoomsController_1 = __importDefault(require("./controllers/Room/ListRoomsController"));
const ShowRoomController_1 = __importDefault(require("./controllers/Room/ShowRoomController"));
const ListRoomMessagesController_1 = __importDefault(require("./controllers/Room/ListRoomMessagesController"));
const DeleteRoomController_1 = __importDefault(require("./controllers/Room/DeleteRoomController"));
const DeleteAllMessages_1 = __importDefault(require("./controllers/Messages/DeleteAllMessages"));
const ListMyStatusController_1 = __importDefault(require("./controllers/Status/ListMyStatusController"));
const CreateStatusController_1 = __importDefault(require("./controllers/Status/CreateStatusController"));
const ListStatusToMeController_1 = __importDefault(require("./controllers/Status/ListStatusToMeController"));
const router = express_1.default.Router();
const upload = multer_1.default(multer_2.options);
router.post('/messages/new', checkAuth_1.default, CreateMessageController_1.default.handle);
router.get('/messages/list', checkAuth_1.default, ListMessagesController_1.default.handle);
router.delete('/messages/delete/:id', checkAuth_1.default, DeleteMessagesController_1.default.handle);
router.delete('/messages/delete-all', checkAuth_1.default, DeleteAllMessages_1.default.handle);
router.post('/users/register', CreateUserController_1.default.handle);
router.post('/users/authenticate', AuthenticateController_1.default.handle);
router.get('/users/list', checkAuth_1.default, ListUsersController_1.default.handle);
router.post('/users/show', checkAuth_1.default, ShowUserController_1.default.handle);
router.delete('/users/delete/:id', checkAuth_1.default, DeleteUserController_1.default.handle);
router.patch('/users/logout', checkAuth_1.default, LogoutUserController_1.default.handle);
router.post('/room/new/:id', checkAuth_1.default, CreateRoomController_1.default.handle);
router.get('/room/list', checkAuth_1.default, ListRoomsController_1.default.handle);
router.get('/room/:id', checkAuth_1.default, ShowRoomController_1.default.handle);
router.get('/room/messages/list/:id', checkAuth_1.default, ListRoomMessagesController_1.default.handle);
router.delete('/room/delete/:id', checkAuth_1.default, DeleteRoomController_1.default.handle);
router.post('/status/create', checkAuth_1.default, upload.single('file'), CreateStatusController_1.default.handle);
router.get('/status/my-list', checkAuth_1.default, ListMyStatusController_1.default.handle);
router.get('/status/list', checkAuth_1.default, ListStatusToMeController_1.default.handle);
exports.default = router;