import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatRoomDocument = ChatRoom & Document;

@Schema()
export class ChatRoom {
  @Prop()
  chatRoomId: string;

  @Prop()
  chatRoomName: string;

  @Prop()
  chatRoomType: string;

  @Prop()
  chatRoomPicture: string;

  @Prop({ default: Date.now })
  date: Date;

  @Prop()
  member: string;

  @Prop()
  lastMessage: string;

  @Prop()
  createAt: string;

  @Prop()
  updateAt: string;
}

export const ChatRoomSchema = SchemaFactory.createForClass(ChatRoom);