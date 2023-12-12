import React, { useState, useEffect } from 'react';
import ChatList from '../components/ChatList';
import ChatForm from '../components/ChatForm';
import AssignUserForm from '../components/AssignUserForm';


const ChatContainer = () => {

    const [listOfChatrooms, setListOfChatrooms] = useState([])
    const [listOfUsers, setListOfUsers] = useState([])

    const fetchListOfChatrooms = async () => {
        const response = await fetch("http://localhost:8080/chatrooms");
        const data = await response.json();

        setListOfChatrooms(data);
        console.log(data);
    }

    const fetchAllUsers = async ()  => {
        const response = await fetch ("http://localhost:8080/users")
        const data = await response.json();
        setListOfUsers(data)
        console.log(data)
        
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

    const patchAssignment = async (chatroomId, userId) => {
        const response = await fetch (`http://localhost:8080/chatrooms/${chatroomId}/add-user/${userId}`, {
            method : "PATCH",
            headers: {"Content-Type": "application/json"},
            
        })
        const assignUser = await response.json()
        await fetchListOfChatrooms();
        await fetchAllUsers();
        console.log(assignUser) 
    } 


    
    useEffect(() => {
        fetchListOfChatrooms()
        fetchAllUsers()
    }, [])



    return ( 

        <>
        <ChatList listOfChatrooms={listOfChatrooms} />
        <ChatForm postChatroom={postChatroom} />
        <AssignUserForm listOfUsers = {listOfUsers} listOfChatrooms={listOfChatrooms} patchAssignment ={patchAssignment}/>
        
        </>

     );
}
 
export default ChatContainer;