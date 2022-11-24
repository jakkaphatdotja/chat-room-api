import { AppService } from './../app.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ChatRoomService } from './chat-room.service';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { ChatRoom } from './schema/chat-room.schema';

@Controller('chat-room')
export class ChatRoomController {
  constructor(private readonly chatRoomService: ChatRoomService) {}

  @Post()
  async createChatRoom(@Body() chatRoomDto: ChatRoom) {
    return this.chatRoomService.createChatRoom(chatRoomDto);
  }

  @Get()
  readChatRoom() {
    return this.chatRoomService.readChatRoom();
  }

  @Put(':id')
  async updateChatRoom(@Param('id') id: string, @Body() updateData: UpdateChatRoomDto ): Promise<ChatRoom> {
    return this.ChatRoomService.updateChatRoom(id, updateData);
  }

  @Delete(':id')
  async deleteChatRoom(@Param('id') id: string) {
    return this.chatRoomService.deleteChatRoom(id);
  }

}
