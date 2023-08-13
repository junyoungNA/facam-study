import React from 'react'
import getCurrentUser from '../actions/getCurrent';
import ChatClient from './ChatClient';

const ChatPage = () => {
    const currentUser = getCurrentUser();
    return (
        <ChatClient currentUser={currentUser}/>
    )
}

export default ChatPage
