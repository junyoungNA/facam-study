'use client'
import React, { useEffect } from 'react'
import { User } from '@prisma/client'
import { useState } from 'react'
import axios from 'axios';

interface ChatClientProps {
    currentUser ?: User | null,
}

const ChatClient = ({ currentUser} : ChatClientProps) => {
    const [receiver, setReceiver] = useState({
        receiver:'',
        receiverName:'',
        receiverImage :''
    })

    useEffect(() => {
        axios.get('/api/chat').then((res) => console.log(res));
    }, [])

    const [layout, setLayout] = useState(true);
    return (
        <main>
            <div className='grid gird-cols-[1fr] md:grid-cols-[300px_1f]'>
                {/* md보다 클때는 채팅 과 목록이 둘다 보여야함 */}
                {/* md 보다 작고 layout이 true일 때는 목록이 안보임 */}
                <section className={`md:flex ${layout && 'hidden'}`}>
                    contact
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
