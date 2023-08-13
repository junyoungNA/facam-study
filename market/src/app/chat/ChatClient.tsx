'use client'
import React, { useEffect } from 'react'
import { User } from '@prisma/client'
import { useState } from 'react'
import axios from 'axios';
import useSWR from 'swr'
import { TUserWithChat } from '@/types';
import Loader from '../components/Loader';
import Contatcs from '../components/chat/Contatcs';


interface ChatClientProps {
    currentUser ?: User | null,
}

const ChatClient = ({ currentUser} : ChatClientProps) => {

    const [receiver, setReceiver] = useState({
        receiverId:'',
        receiverName:'',
        receiverImage :''
    })
    
    const fetcher = (url : string) => axios.get(url).then((res) => res.data); 
    const {data:users , error, isLoading } = useSWR('/api/chat', fetcher, {
        refreshInterval:1000 //1초마다  요청을 보냄 폴링방식?
    });

    const currentUserWithMessage = users?.find((user : TUserWithChat) => user.email === currentUser?.email)

    useEffect(() => {
        axios.get('/api/chat').then((res) => console.log(res));
    }, [])

    const [layout, setLayout] = useState(true);

    if(isLoading) return <Loader/>
    if(error) return <p>error!</p>
    return (
        <main>
            <div className='grid gird-cols-[1fr] md:grid-cols-[300px_1f]'>
                {/* md보다 클때는 채팅 과 목록이 둘다 보여야함 */}
                {/* md 보다 작고 layout이 true일 때는 목록이 안보임 */}
                <section className={`md:flex ${layout && 'hidden'}`}>
                    <Contatcs
                        users ={users}
                        currentUser={currentUserWithMessage}
                        setLayout={setLayout}
                        setReceiver={setReceiver}
                    />
                </section>
                 {/* md보다 클때는 채팅 과 목록이 둘다 보여야함 */}
                {/* md 보다 작고 layout이 false일 때는 채팅부분이 안보임 */}
                <section className={`md:flex ${!layout && 'hidden'}`}>
                    chat
                </section>
            </div>
        
        </main>
    )
}

export default ChatClient
