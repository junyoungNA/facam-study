import React, { useEffect, useRef } from 'react'
import Input from './Input';
import { TUserWithChat } from '@/types';
import ChatHeader from './ChatHeader';
import Message from './Message';

interface ChatProps  {
    currentUser : TUserWithChat;
    receiver : {
        receiverId : string,
        receiverName : string,
        receiverImage : string,
    };
    setLayout : (layout : boolean) => void;
}

const Chat = ({
    currentUser,
    receiver,
    setLayout,
} : ChatProps) => {
    const messageEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messageEndRef?.current?.scrollIntoView({
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        scrollToBottom();
    })
    
    if(!receiver.receiverName || !currentUser) {
        return <div className='w-full h-full'></div>
    }

    //상대방이 보냈던 마지막대화의 날짜와 시간을 구하기위한 
    const conversation = 
        currentUser?.conversations.find((conversation) =>
            conversation.users.find((user) => user.id === receiver.receiverId));

    const lastMessageTime=  conversation?.messages.filter((message) => message.receiverId === currentUser.id)   
    .slice(-1)[0]?.createdAt;

    return (
        <div className='w-full'>
            <div>
                {/* chat header */}
                <ChatHeader 
                    setLayout={setLayout}
                    receiverName={receiver.receiverName}
                    receiverImage={receiver.receiverImage}
                    lastMessageTime={lastMessageTime}
                />
            </div>
            
            {/* 전체뷰 높이에서 헤더와 메세지바 사용자 정보가 나오는 윗부분을 뺀 나머지부분을 높이로 지정  */}
            <div className='flex flex-col gap-8 p-4 overflow-auto h-[calc(100vh_-_60px_-_70px_-_50px)]'>
                {/* chat Message */}
                {conversation && conversation.messages.map((message) => {
                    return (
                        <Message 
                            key={message.id}
                            isSender={message.senderId === currentUser.id}
                            messageText={message.text}
                            messageImage={message.image}
                            receiverName={receiver.receiverName}
                            receiverImage ={receiver.receiverImage}
                            senderImage={currentUser.image}
                            time={message.createdAt}
                        />
                    )
                })}
                {/* 메세지 입력시 채팅부분 스크롤 바로 내려가기위한 */}
                <div ref={messageEndRef}/>
            </div>
            

            <div>
                <Input 
                    receiverId={receiver?.receiverId}
                    currentUserId={currentUser?.id}
                    />
            </div>
        </div>
    )
}

export default Chat
