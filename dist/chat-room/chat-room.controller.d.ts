import { ChatRoomService } from './chat-room.service';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { ChatRoom } from './schema/chat-room.schema';
export declare class ChatRoomController {
    private readonly chatRoomService;
    constructor(chatRoomService: ChatRoomService);
    createChatRoom(chatRoomDto: ChatRoom): Promise<ChatRoom>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChatRoomDto: UpdateChatRoomDto): string;
    remove(id: string): string;
}
