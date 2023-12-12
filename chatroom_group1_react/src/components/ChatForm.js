import React, { useState } from 'react';

const ChatForm = ({postChatroom}) => {

    const [stateChatroom, setStateChatroom] = useState({
        name: ""
    })

    const handleFormSubmit = ((event) => {
        event.preventDefault();
        postChatroom(stateChatroom);
        setStateChatroom({
            name: ""
        })
    })

    const handleChange = ((event) => {
        let propertyName = event.target.name;
        let copiedChatroom = {...stateChatroom}
        copiedChatroom[propertyName] = event.target.value;
        setStateChatroom(copiedChatroom);
    })

    return (  



        <>
        <form id="chatroomForm" onSubmit={handleFormSubmit}>
            <h3>Add a Chatroom</h3>
            <label htmlFor='chatroom-name'>Chatroom name:</label>
            <input 
            id='chatroom-name'
            name='name'
            type='text'
            placeholder='Enter Chatroom Name'
            value={stateChatroom.name}
            onChange={handleChange}
            />
            <input type='submit' value="Add Chatroom!" className="button"/>
        </form>

        </>
    );
}
 
export default ChatForm;