import axios from 'axios';
import React, { FormEvent } from 'react'
import { useState } from 'react';
import {IoImageOutline} from 'react-icons/io5'
import {RiSendPlaneLine} from 'react-icons/ri'

interface InputProps {
    receiverId : string;
    currentUserId : string;
}

const Input:React.FC<InputProps> = ({
    receiverId,
    currentUserId,
}) => {

    const [message, setMessage] = useState('');

    const handleSubmit = async (e : FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        const imageUrl = '';
        
        if(!receiverId) {
            return console.log('상대방이 없습니다.'); 
        }

        if(message || imageUrl) {
            try {   
                await axios.post('/api/chat', {
                    text : message,
                    image : imageUrl,
                    receiverId : receiverId,
                    senderId : currentUserId,
                })
            }catch (error) {
                console.error(error);
            }
        }
        setMessage('');
    }
    return (
        <form className='relative flex items-center justify-between w-full gap-4 p-2 pl-4 py-3 border-[1px] border-gray-300 rounded-md shadow-sm' onSubmit={handleSubmit}>
            <input type="text" className='w-full text-base outline-none' placeholder='메세지를 작성해주세요.' value={message} onChange={(e) => setMessage(e.target.value)}/>
            <div className='text-2xl text-gray-200 cursor-pointer '>
                <IoImageOutline/>
            </div>
            <button
                type='submit'
                className='flex items-center justify-center p-2 text-gray-900 bg-orange-500 rounded-lg cursor-pointer hover:bg-orange-600 disabled:opacity-60'
            > 
                <RiSendPlaneLine className='text-white'/>
            </button>
        </form>
    )
}

export default Input
