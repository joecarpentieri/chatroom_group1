
import React, { useState } from 'react';

const MessageForm = ({postMessage, chatroomId, listOfUserAssociations, currentUser}) => {

    const mappedUsers = listOfUserAssociations.map (association => {
        return <option key={association.user.id} value={association.user.id}> 
        {association.user.userName} </option>
    })

const [stateMessage, setStateMessage] = useState(
    
    {
        userId : null,
        content: ""
    })


    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (stateMessage.userId === null || stateMessage.content === "") {
            alert("Info not filled out")
            return;
        }
        postMessage(chatroomId,stateMessage)
        setStateMessage ({

            userId : null,
            content: ""
        })
    }

    const handleChange = (event) => {
        let propertyName = event.target.name
        let copiedMessage =  {...stateMessage}
        copiedMessage.userId = currentUser.id
        copiedMessage[propertyName] = event.target.value
        setStateMessage(copiedMessage)
    }

    return ( 

        <form id = "message-form" onSubmit={handleFormSubmit}>

            <label htmlFor='message-text'> </label>
            <input
            id ="message-text"
            name='content'
            type='text'
            placeholder='Type a message...'
            onChange={handleChange}
            value={stateMessage.content}/>

            <input 
            type='submit' 
            value= "Send"  
            id = "send-button" 
            className='button-old'/>
        </form>

     
     );
}
 
export default MessageForm;