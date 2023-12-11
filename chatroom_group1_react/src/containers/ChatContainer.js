import React, { useState, useEffect } from 'react';
import ChatList from '../components/ChatList';
import ChatForm from '../components/ChatForm';


const ChatContainer = () => {
    return ( 

        <>
        
        <h2>ChatRoom</h2>
        <ChatList />
        <ChatForm />
        
        </>

     );
}
 
export default ChatContainer;