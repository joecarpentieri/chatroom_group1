import './App.css';
import ChatContainer from './containers/ChatContainer';
import { Box, Modal } from '@mui/material';
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
  const[errorMessage, setErrorMessage] = useState("")
  const[isErrorMessageOpen, setIsErrorMessageOpen]= useState(false);


  const handleErrorMessageOpen = () => setIsErrorMessageOpen(true);
  const handleErrorMessageClose= () => setIsErrorMessageOpen(false);

  const handleFormSubmit = (event) => {

      event.preventDefault();

      const userFound = listOfUsers.find(user => user.userName === stateUserName)
      if(userFound) {
          handleClose() 
          setCurrentUser(userFound);
          setStateUserName("")
          } else {
          setErrorMessage("Invalid user, you are not a ROCKSTAR");
          handleErrorMessageOpen();
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

      <Modal
      open = {isErrorMessageOpen}
      onClose={handleErrorMessageClose}
      >
        <Box id = "error-message">
      <p>{errorMessage}</p>
      <button onClick={handleErrorMessageClose}>ok</button>
        </Box>
      </Modal>
      
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
