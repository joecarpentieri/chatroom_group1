import React, { useState, useEffect } from 'react';
import { Box, Button, Modal } from "@mui/material";
import MessageForm from "./MessageForm";
import MessageList from './MessageList';

const Chat = ({chatroom}) => {


    const [open, setOpen]= useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    // const listOfUserAssociations = chatroom.userChatroomAssociations;
    const[listOfUserAssociations, setListOfUserAssociations] = useState([]);
    useEffect(() => {
        setListOfUserAssociations(chatroom.userChatroomAssociations);
    
    },[chatroom.userChatroomAssociations]
    )

    

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
            <Button onClick={handleOpen}>{chatroom.name}</Button>
            <Modal
             open ={open}
             onClose={handleClose}
             >
                <Box id="modal-box">
                <Button onClick={handleClose}>X</Button>
                <MessageList listOfMessages={listOfMessages} /> 
                <MessageForm postMessage= {postMessage} 
                chatroomId = {chatroom.id} listOfUserAssociations={listOfUserAssociations} />
                </Box>
               </Modal>
        </>
     );
}
 
export default Chat;