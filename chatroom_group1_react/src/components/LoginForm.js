import React, { useState, useEffect } from 'react';

const LoginForm = ({handleClose,listOfUsers}) => {

    
    const[stateUserName, setStateUserName]= useState("")


    const handleFormSubmit = (event) => {
    event.preventDefault();

    const userFound = listOfUsers.find(user => user.userName === stateUserName)
    if(userFound) {
         handleClose()   
        setStateUserName("")
        } else {
         alert("invalid user, you are not a ROCKSTAR🎸🎸!!!!!")
     }

    }

 





    const handleChange = (event) => {
        let copiedUserName = {...stateUserName}
        copiedUserName = event.target.value
        setStateUserName(copiedUserName)
    }

    return (  

        <form id="login-form" onSubmit={handleFormSubmit}>
        <h3>Log-in!</h3>
        <label htmlFor="user">Username:</label>
        <input 
        id= "user"
        name= "userName"
        type="text"
        placeholder="Type username ..."
        onChange={handleChange}
        value={stateUserName}/>
        <input type='submit' value= "login"  id = "login-button" className='button'/>             
        </form>
    );
 }
 
export default LoginForm;