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

    const postChatroom = async (newChatroom) => {
        const response = await fetch ("http://localhost:8080/chatrooms", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newChatroom)
        });
        const addChatroom = await response.json();
        setListOfChatrooms([...listOfChatrooms, addChatroom])
    }

    useEffect(() => {
        fetchListOfChatrooms()
    }, [])



    return ( 

        <>
        <ChatList listOfChatrooms={listOfChatrooms}/>
        <ChatForm postChatroom={postChatroom}/>
        
        </>

     );
}
 
export default ChatContainer;