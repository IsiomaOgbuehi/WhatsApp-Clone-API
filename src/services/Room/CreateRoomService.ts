import { Room } from "../../models/Room";
import { IUser } from "../../models/Users";

interface ICreateRoomService {
  user_id: string;
  user: string;
}

class CreateRoomService {
  async execute({ user, user_id }: ICreateRoomService) {
    const roomId =
      (await Room.findOne({ users: [user_id, user] })) ||
      (await Room.findOne({ users: [user, user_id] }));

    if (roomId) {
      throw new Error("Room already exists status:400");
    }
    
    const room = await Room.create({
      users: [user_id, user],
    });
    return room;
  }
}
export default new CreateRoomService();
