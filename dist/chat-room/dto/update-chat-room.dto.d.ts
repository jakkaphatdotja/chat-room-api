import { CreateChatRoomDto } from './create-chat-room.dto';
declare const UpdateChatRoomDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateChatRoomDto>>;
export declare class UpdateChatRoomDto extends UpdateChatRoomDto_base {
    chatRoomName: string;
    chatRoomType: string;
    chatRoomPicture: string;
    lastMessage: string;
    member: string;
}
export {};
