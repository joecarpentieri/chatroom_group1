import './App.css';
import ChatContainer from './containers/ChatContainer';
import { Box, Modal, Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import UserForm from './components/UserForm';
import LoginForm from './components/LoginForm';

function App() {
  const[open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [listOfUsers, setListOfUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const[stateUserName, setStateUserName]= useState("")


  const handleFormSubmit = (event) => {

      event.preventDefault();

      const userFound = listOfUsers.find(user => user.userName === stateUserName)
      if(userFound) {
          handleClose() 
          setCurrentUser(userFound);
          setStateUserName("")
          } else {
          alert("Invalid user, you are not a ROCKSTAR🎸🎸!!!!!")
      }

  }

  const postUser = async(newUser) => {
    const response = await fetch ("http://localhost:8080/users", {
      method : "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUser)  
    })

  const addNewUser = await response.json();
  setListOfUsers([...listOfUsers, addNewUser])
  } 

  const fetchAllUsers = async ()  => {
    const response = await fetch ("http://localhost:8080/users")
    const data = await response.json();
    setListOfUsers(data)
    console.log(data)   
}

useEffect(() => {
  fetchAllUsers()
}, [])

  return (
    <>
    <div className="bubble-text">
      <h1>CHATTERBOX</h1>
     </div >
     <div className='current-user'>
     current user:{currentUser ? <p>{currentUser.userName}</p> : null}
     </div> 
      <button className='button-old' onClick={handleOpen}>Log Out</button>
      < ChatContainer listOfUsers={listOfUsers} currentUser={currentUser}/>
      
      < Modal 
        open= {open}
        onClose={handleClose}>
          
          <Box id="log-in-modal">
            <UserForm postUser = {postUser}/>
            <LoginForm  setStateUserName={setStateUserName} stateUserName={stateUserName} handleFormSubmit = {handleFormSubmit}/>
          </Box>
          
        </Modal> 
        
    </>
  );
}





export default App;
