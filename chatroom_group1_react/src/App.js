import './App.css';
import ChatContainer from './containers/ChatContainer';
import { Box, Modal, Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import UserForm from './components/UserForm';

function App() {
  const[open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [listOfUsers, setListOfUsers] = useState([])
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
      <h1>CHATTERBOX</h1>
      < ChatContainer setListOfUsers={setListOfUsers} listOfUsers={listOfUsers}/>
      < Modal 
        open= {open}
        onClose={handleClose}>
          <Box id="log-in-modal">
            <UserForm postUser = {postUser} />
            <button onClick={handleClose} id="log-in-button" className='button'>Log In</button>
          </Box>
          
        </Modal> 
        
    </>
  );
}





export default App;
