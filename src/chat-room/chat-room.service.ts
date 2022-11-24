import { Injectable } from '@nestjs/common';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { ChatRoom, ChatRoomDocument } from './schema/chat-room.schema';
import { Model, model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ChatRoomService {
  constructor( 
    @InjectModel('chatRoomId') private readonly chatRoomModel: Model<ChatRoomDocument>
    ) {}
 
    //Create room
  async createChatRoom(chatRoomId: ChatRoom): Promise<ChatRoom> {
    const newChatRoom = new this.chatRoomModel(chatRoomId)
    return newChatRoom.save();
  }

  findAll() {
    return `This action returns all chatRoom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatRoom`;
  }

  update(id: number, updateChatRoomDto: UpdateChatRoomDto) {
    return `This action updates a #${id} chatRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatRoom`;
  }
}
