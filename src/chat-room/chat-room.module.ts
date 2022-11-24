import { ChatRoomSchema } from './schema/chat-room.schema';
import { Module } from '@nestjs/common';
import { ChatRoomService } from './chat-room.service';
import { ChatRoomController } from './chat-room.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb+srv://him_rahim:LleGuKDmSVRWusP3@cluster0.cgxgn.mongodb.net/test'),
    MongooseModule.forFeature([{ name: 'chatRoomId', schema: ChatRoomSchema }])
  ],
  controllers: [ChatRoomController],
  providers: [ChatRoomService]
})
export class ChatRoomModule {}
