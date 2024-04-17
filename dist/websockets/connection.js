"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../http");
const UnreadMessages_1 = require("../models/UnreadMessages");
const Message_1 = require("../models/Message");
const Users_1 = require("../models/Users");
const Room_1 = require("../models/Room");
http_1.io.on('connection', (socket) => {
    console.log('A new user has been connected: ', socket.id);
    socket.on('joinroom', ({ rooms }) => {
        rooms.forEach((item) => {
            socket.join(item);
        });
    });
    socket.on('joinNewRoom', async ({ user_target, user, check, room_id }) => {
        socket.join(user_target);
        if (!check) {
            const updatedRoom = await Room_1.Room.findById(room_id)
                .populate(['users', "messages"]);
            console.log(updatedRoom);
            const user_data = await Users_1.User.findById(user);
            const formattedRoom = {
                _id: updatedRoom._id,
                messages: updatedRoom.messages,
                user: [user_data],
                unreadMessages: 0
            };
            http_1.io.to(user_target).emit('receiveJoinNewRoom', { user, room: formattedRoom });
        }
    });
    socket.on('removeRoom', ({ user_target, user, room, check }) => {
        if (!check) {
            http_1.io.to(user_target).emit('receiveRemoveRoom', { user, room });
            socket.leave(user_target);
        }
        else {
            socket.leave(user_target);
        }
    });
    socket.on('viewUnreadMessages', async ({ user, room }) => {
        await UnreadMessages_1.UnreadMessages.deleteMany({ to: room, user: { $nin: user } });
        await Message_1.Messages.updateMany({ viewed: false, user: { $nin: user }, to: room }, { "$set": { "viewed": true } });
        http_1.io.to(user).emit('receiveReadMessages', { room, user });
    });
    socket.on('writting', ({ to, writting, room }) => {
        http_1.io.to(to).emit('receiveWritting', { writting, room, to });
    });
    socket.on('imOnline', async ({ user, status, room }) => {
        if (status) {
            await Users_1.User.findByIdAndUpdate(user, { isOnline: true });
        }
        else {
            await Users_1.User.findByIdAndUpdate(user, { isOnline: false });
        }
        http_1.io.to(user).emit('receiveImOnline', { user, status, room });
    });
    socket.on('disconnect', () => {
        console.log('A user has been disconnected');
    });
    socket.on('sendMessage', async ({ messageData, room }) => {
        const unreadMessages = await UnreadMessages_1.UnreadMessages.create({
            user: messageData.user,
            message: messageData,
            to: messageData.assignedTo
        });
        http_1.io.to(room).emit('newMessage', { messageData, unreadMessages });
    });
});
