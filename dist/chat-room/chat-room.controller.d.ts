import { ChatRoomService } from './chat-room.service';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { ChatRoom } from './schema/chat-room.schema';
export declare class ChatRoomController {
    private readonly chatRoomService;
    constructor(chatRoomService: ChatRoomService);
    createChatRoom(chatRoomDto: ChatRoom): Promise<ChatRoom>;
    readChatRoom(): Promise<void | (ChatRoom & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateChatRoom(id: string, updateData: UpdateChatRoomDto): Promise<ChatRoom>;
    : any;
}
