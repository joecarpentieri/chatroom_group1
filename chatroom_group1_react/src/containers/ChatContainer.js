import React, { useState, useEffect } from 'react';
import ChatList from '../components/ChatList';
import ChatForm from '../components/ChatForm';


const ChatContainer = () => {

    const [listOfChatrooms, setListOfChatrooms] = useState([])

    const fetchListOfChatrooms = async () => {
        const response = await fetch("http://localhost:8080/chatrooms");
        const data = await response.json();

        setListOfChatrooms(data);
        console.log(data);
    }

    useEffect(() => {
        fetchListOfChatrooms()
    }, [])



    return ( 

        <>
        
        <h2>ChatRoom</h2>
        <ChatList listOfChatrooms={listOfChatrooms}/>
        <ChatForm />
        
        </>

     );
}
 
export default ChatContainer;