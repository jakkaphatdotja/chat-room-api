"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ChatRoomService = class ChatRoomService {
    constructor(chatRoomModel) {
        this.chatRoomModel = chatRoomModel;
    }
    async createChatRoom(chatRoomId) {
        const newChatRoom = new this.chatRoomModel(chatRoomId);
        return newChatRoom.save();
    }
    findAll() {
        return `This action returns all chatRoom`;
    }
    findOne(id) {
        return `This action returns a #${id} chatRoom`;
    }
    update(id, updateChatRoomDto) {
        return `This action updates a #${id} chatRoom`;
    }
    remove(id) {
        return `This action removes a #${id} chatRoom`;
    }
};
ChatRoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('chatRoomId')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ChatRoomService);
exports.ChatRoomService = ChatRoomService;
//# sourceMappingURL=chat-room.service.js.map