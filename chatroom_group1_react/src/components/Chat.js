import React, { useState, useEffect } from 'react';
import { Box, Button, Modal } from "@mui/material";
import MessageForm from "./MessageForm";
import MessageList from './MessageList';
import '../index.css';

const Chat = ({chatroom, fetchListOfChatrooms, currentUser}) => {


    const [open, setOpen]= useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [listOfMessages, setListOfMessages] = useState([]); 
    
    useEffect(() => {
        setListOfMessages(chatroom.messages)
    }, [chatroom.messages]);
    


    const postMessage = async (chatroomId, newMessage) => {
        const response = await fetch (`http://localhost:8080/chatrooms/${chatroomId}`, {
             method: "POST",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(newMessage)
        });

        const addMessage = await response.json()
        setListOfMessages([...listOfMessages, addMessage])
    }

    console.log(postMessage)

    
    return ( 

        <>
        <article className="bubbles-names"> 
            <Button onClick={handleOpen} className='bubble' id="bubble">{chatroom.name}</Button>
            <Modal
             open ={open}
             onClose={handleClose}
             >
                <Box id="modal-box">
                <Button onClick={handleClose}>X</Button>
                <p id='chatroom_name'>{chatroom.name}</p>
                <MessageList listOfMessages={listOfMessages} fetchListOfChatrooms={fetchListOfChatrooms} currentUser={currentUser}/> 
                <MessageForm postMessage= {postMessage} chatroomId = {chatroom.id} listOfUserAssociations={chatroom.userChatroomAssociations} currentUser={currentUser}/>
                </Box>
               </Modal>
               </article>
        </>
     );
}
 
export default Chat;