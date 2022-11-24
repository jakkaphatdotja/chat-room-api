import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { ChatRoom, ChatRoomDocument } from './schema/chat-room.schema';
import { Model } from 'mongoose';
export declare class ChatRoomService {
    private readonly chatRoomModel;
    constructor(chatRoomModel: Model<ChatRoomDocument>);
    createChatRoom(chatRoomId: ChatRoom): Promise<ChatRoom>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChatRoomDto: UpdateChatRoomDto): string;
    remove(id: number): string;
}
