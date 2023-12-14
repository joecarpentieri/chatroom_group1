import React, { useState } from 'react';

const ChatForm = ({postChatroom}) => {

    const [stateChatroom, setStateChatroom] = useState({
        name: ""
    })

    const handleFormSubmit = ((event) => {
        event.preventDefault();
        if(stateChatroom.name === "") {
            alert("Chatroom name is not filled out correctly")
            return
        }
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
        <div className='bubble-text'>
        <form id="chatroomForm" onSubmit={handleFormSubmit}>
            <h2>Add a Chatroom</h2>
            <label htmlFor='chatroom-name' >Chatroom name:</label>
            <input 
            id='chatroom-name'
            name='name'
            type='text'
            placeholder='Enter Chatroom Name'
            value={stateChatroom.name}
            onChange={handleChange}
            
            />
            <input type='submit' value="Add Chatroom!" className="button-old"/>
        </form>

        </div>
    );
}
 
export default ChatForm;