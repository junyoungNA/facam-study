import axios from 'axios';
import React, { FormEvent, useRef } from 'react'
import { useState } from 'react';
import {IoImageOutline} from 'react-icons/io5'
import {RiSendPlaneLine} from 'react-icons/ri'
import useSWRMutation from 'swr/mutation';
import {CgClose} from 'react-icons/cg';
import previewImage from '@/helpers/previewImage';
import uploadImage from '@/helpers/uploadImage';

interface InputProps {
    receiverId : string;
    currentUserId : string;
}

const sendRequest = (url : string, {arg} : {
    arg : {
        text : string;
        image : string;
        senderId : string;
        receiverId : string;
    }
}) => {
    return fetch(url, {
        method : 'POST',
        body : JSON.stringify(arg)
    }) .then(res => res.json())
}

const Input:React.FC<InputProps> = ({
    receiverId,
    currentUserId,
}) => {
    const [image, setImage] = useState<File| null>(null);
    const [message, setMessage] = useState('');
    const [imagePreview, setImagePreview] = useState<string | null>('');
    const imageRef = useRef<HTMLInputElement>(null);

    const chooseImage = () => {
        imageRef.current?.click();
    }

    const {trigger} = useSWRMutation('/api/chat', sendRequest)
    const removeImage = () => {
        setImage(null);
        setImagePreview(null);
    }
    const handleSubmit = async (e : FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        const imageUrl = image ? await uploadImage(image as File ) : null;
        
        if(!receiverId) {
            return console.log('상대방이 없습니다.'); 
        }

        if(message || imageUrl) {
            try {   
                trigger({
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
        setImage(null);
        setImagePreview(null);
    }
    return (
        <form className='relative flex items-center justify-between w-full gap-4 p-2 pl-4 py-3 border-[1px] border-gray-300 rounded-md shadow-sm' onSubmit={handleSubmit}>
            {imagePreview && 
                <div className='absolute right-0 w-full overflow-hidden rounded-md bottom-[4.2rem] max-w-[300px] shadow-md'>
                    <img src={imagePreview} alt="이미지 프리뷰" />
                    <span className='absolute flex itmes-center justify-center text-xl text-white bg-gray-900 cursor-pointer top-[0.4rem] right-[0.4rem] rounded-full opacity-60 hover:opacity-100'
                            onClick={removeImage}>
                        <CgClose/>
                    </span>
                </div>
            }
            <input  
                type="text"  
                className='w-full text-base outline-none' 
                placeholder='메세지를 작성해주세요.' 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                />

            <input type="file"  
                className='hidden' 
                ref={imageRef} 
                onChange={(e) => previewImage(e, setImagePreview, setImage)}
                accept='image/*'
                multiple={false}
                />

            <div onClick={() => {chooseImage()}}className='text-2xl text-gray-200 cursor-pointer '>
                <IoImageOutline className='text-gray-600'/>
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
