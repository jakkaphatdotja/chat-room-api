import { Injectable } from '@nestjs/common';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { ChatRoom, ChatRoomDocument } from './schema/chat-room.schema';
import { Model, model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { REQUEST_CONTEXT_ID } from '@nestjs/core/router/request/request-constants';

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

  async readChatRoom() {
    return this.chatRoomModel.find({})
    .then((chatRoomId)=>{ return chatRoomId})
    .catch((err)=> console.log(err))
  }

  // update
  async updateChatRoom(id, data): Promise<ChatRoom> {
    return this.chatRoomModel.findByIdAndUpdate(id, data, { new: true });
  }

  // delete
  async deleteChatRoom(id) {
    return this.chatRoomModel.findByIdAndRemove(id);
  }
}
