import React, { useState, useEffect } from 'react';
import ChatList from '../components/ChatList';
import ChatForm from '../components/ChatForm';
import AssignUserForm from '../components/AssignUserForm';
import Navigation from '../components/Navigation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

ç
const ChatContainer = ({listOfUsers, currentUser}) => {

    const [listOfChatrooms, setListOfChatrooms] = useState([])

    const fetchListOfChatrooms = async () => {
        const response = await fetch("http://localhost:8080/chatrooms");
        const data = await response.json();

        setListOfChatrooms(data);
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
    } 


    
    useEffect(() => {
        fetchListOfChatrooms()
    }, [])

    const chatroomRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Navigation />,
            children: [
                {
                    path: "/chatrooms",
                    element: <ChatList listOfChatrooms={listOfChatrooms} fetchListOfChatrooms={fetchListOfChatrooms} currentUser={currentUser}/> 
                },
                {
                    path: "/chatrooms/new",
                    element: <> 
                        <ChatForm postChatroom={postChatroom} />
                        <AssignUserForm listOfUsers = {listOfUsers} listOfChatrooms={listOfChatrooms} patchAssignment ={patchAssignment}/>
                    </>
                }
            ]
        }
        
    ])

    return ( 

        <>
        <RouterProvider router={chatroomRoutes} />
        
        </>

     );
}
 
export default ChatContainer;