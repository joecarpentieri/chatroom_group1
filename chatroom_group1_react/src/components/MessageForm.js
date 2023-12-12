
import React, { useState } from 'react';

const MessageForm = ({postMessage, chatroomId, listOfUsers}) => {


    const mappedUsers = listOfUsers.map (user => {
        return <option key={user.id} value={user.id}> {user.userName} </option>
    })

const [stateMessage, setStateMessage] = useState(
    
    {
        userId : null,
        content: ""
    })


    const handleFormSubmit = (event) => {
        event.preventDefault();
        postMessage(chatroomId,stateMessage)
        setStateMessage ({

            userId : null,
            content: ""
        })
    }



    const handleChange = (event) => {
        let propertyName = event.target.name
        let copiedMessage =  {...stateMessage}
        copiedMessage[propertyName] = event.target.value
        setStateMessage(copiedMessage)
    }





    return ( 

        <form id = "message-form" onSubmit={handleFormSubmit}>
            <label htmlFor='user'> Select User: </label>
            <select id = "user" name="userId" defaultValue="select-user" onChange={handleChange}>
                    <option disabled value= "select-user">Choose a user</option>
                    {mappedUsers}
            </select>

            <label htmlFor='message-text'>Message:</label>
            <input
            id ="message-text"
            name='content'
            type='text'
            placeholder='type a message...'
            onChange={handleChange}
            value={stateMessage.content}
            />

            <input type='submit' value= "send"  id = "send-button"/ >
        </form>

     
     );
}
 
export default MessageForm;