import React from 'react'
import { TConversation, TUserWithChat } from '@/types';
import Avatar from '../Avatar';
import { fromNow } from '@/helpers/dayjs';

interface UserProps {
    user : TUserWithChat;
    currentUserId : string;
}

const User = ({
    user,
    currentUserId
} : UserProps) => {
    console.log(user, 'user');
    console.log(currentUserId, 'currentUserId');
    const messagesWithCurrentUser = user.conversations.find((conversation : TConversation) =>{
        conversation.users.find((user) => user.id === currentUserId);  
    });
    console.log(messagesWithCurrentUser, 'messagesWithCurrentUser');
    const latesetMessage = messagesWithCurrentUser?.messages.slice(-1)[0];
    return (
        <div className='grid grid-cols-[40px_1fr_50px] grid-rows-[40px] gap-3 py-3 px-4 border-b-[1px] hover:cursor-pointer hover:bg-orange-500'>
            <div className=''>
                <Avatar src={user.image}/>
            </div>
            <div>
                <h3>{user.name}</h3>
                {latesetMessage && 
                    <p className='overflow-hidden text-xs font-medium text-gray-600 break-words whitespace-pre-wrap'>    
                        {latesetMessage.text}   
                    </p>
                }
                {latesetMessage && latesetMessage.image && 
                    <p className=' text-xs font-medium text-gray-600'>[이미지]</p>
                }
            </div>
            <div>
                {latesetMessage && (
                    <p>
                        {fromNow(latesetMessage.createdAt)}
                    </p>
                )
                }
            </div>
        
        </div>
    )
}

export default User
