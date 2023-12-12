import { useState } from "react";
import { Box, Modal } from "@mui/material";
// import Box from "@mui/material";
import Button from "@mui/material";

import MessageList from "./MessageList";
const Chat = ({chatroom}) => {


    const [open, setOpen]= useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const listOfMessages = chatroom.messages;
    
    return ( 




        <>
            <button onClick={handleOpen}>{chatroom.name}</button>
            <Modal
             open ={open}
             onClose={handleClose}
             >
                <Box>
            <button onClick={handleClose}>X</button>
            <MessageList listOfMessages={listOfMessages} /> 
                </Box>
               </Modal>
        </>
     );
}
 
export default Chat;