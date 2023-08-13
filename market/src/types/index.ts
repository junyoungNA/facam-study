//채팅을 위한 위한 유저 타입
import {User} from '@prisma/client'
import { Message } from '@prisma/client'
export type TUserWithChat = User & {
    conversation : TConversation[]
}

export type TConversation = {
    id : string;
    message : Message[];
    users : User[];
}