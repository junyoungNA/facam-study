import React from 'react'
import Input from './Input';
import { TUserWithChat } from '@/types';

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
    
    // if(!receiver.receiverName || !currentUser) {
    //     return <div className='w-full h-full'></div>
    // }

    return (
        <div className='w-full'>
            <div>
                {/* chat header */}
            </div>
            
            {/* 전체뷰 높이에서 헤더와 메세지바 사용자 정보가 나오는 윗부분을 뺀 나머지부분을 높이로 지정  */}
            <div className='flex flex-col gap-8 p-4 overflow-hidden h-[calc(100vh_-_60px_-_70px-_-80px)]'>
                {/* chat Message */}
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
