import { useState } from "react";

const AssignUserForm = ({listOfUsers, listOfChatrooms,patchAssignment}) => {

    const mappedUsers = listOfUsers.map (user => {
        return <option key={user.id} value={user.id}> {user.userName} </option>
    })
    const displayChatrooms = listOfChatrooms.map( chatroom => {
        return <option  key={chatroom.id} value={chatroom.id}>{chatroom.name}</option> 
    })



    const [stateAssignment, setStateAssignment] = useState(
        { 
            chatroomId: null,
            userId: null
        })


const handleFormSubmit = (event) =>{
    event.preventDefault();
    patchAssignment(stateAssignment["chatroomId"], stateAssignment["userId"])
    setStateAssignment (
        {
        chatroomId: null,
        userId: null
        })
}


const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedAssignment = {...stateAssignment}
        copiedAssignment[propertyName] = event.target.value
        setStateAssignment(copiedAssignment)
}


    return ( 
            <>
            <h2>Add user to ChatRoom</h2>
            <form id = "assignmentForm" onSubmit={handleFormSubmit}> 
                <label htmlFor="chatroom">Select Chatroom:</label>
                <select id = "chatroom" name='chatroomId' onChange={handleChange} defaultValue="select-chatroom">
                    <option disabled value= "select-chatroom">Choose a Chatroom</option>
                    {displayChatrooms}
                </select>

                <label htmlFor="user">Select User:</label>
                <select id = "user" name='userId' onChange={handleChange} defaultValue="select-user">
                    <option disabled value= "select-user">Choose a user</option>
                    {mappedUsers}
                </select>

                <input type="submit" value= "add user to Chatroom" id = "add-button" />
                </form>
            
            </>

    );
}
export default AssignUserForm;













