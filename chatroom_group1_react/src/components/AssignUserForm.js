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
    if(stateAssignment.chatroomId === null || stateAssignment.userId === null) {
        alert("please select the option to proceed")
        return
        }
    patchAssignment(stateAssignment["chatroomId"], stateAssignment["userId"])
    setStateAssignment (
        {
        chatroomId: null,
        userId: null
        })
    event.target.reset();
}


const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedAssignment = {...stateAssignment}
        copiedAssignment[propertyName] = event.target.value
        setStateAssignment(copiedAssignment)
}


    return ( 
            <div className="bubble-text">
            <h2>Add user to ChatRoom</h2>
            <form id = "assignmentForm" onSubmit={handleFormSubmit}> 
                <label htmlFor="chatroom">Select Chatroom:</label>
                <select className='text-box' id = "chatroom" name="chatroomId"  defaultValue="select-chatroom" onChange={handleChange}>
                    <option disabled value= "select-chatroom">Choose a Chatroom</option>
                    {displayChatrooms}
                </select>

                <label htmlFor="user">Select User:</label>
                <select className='text-box' id = "user" name="userId" defaultValue="select-user" onChange={handleChange}>
                    <option disabled value= "select-user">Choose a user</option>
                    {mappedUsers}
                </select>

                <input 
                type="submit" 
                value= "Add user to Chatroom" 
                id = "add-button" 
                className="button-old"/>
                </form>
            
            </div>

    );
}
export default AssignUserForm;













