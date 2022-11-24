import { ChatRoom, ChatRoomDocument } from './schema/chat-room.schema';
import { Model } from 'mongoose';
export declare class ChatRoomService {
    private readonly chatRoomModel;
    constructor(chatRoomModel: Model<ChatRoomDocument>);
    createChatRoom(chatRoomId: ChatRoom): Promise<ChatRoom>;
    readChatRoom(): Promise<void | (ChatRoom & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateChatRoom(id: any, data: any): Promise<ChatRoom>;
    deleteChatRoom(id: any): Promise<void>;
}
