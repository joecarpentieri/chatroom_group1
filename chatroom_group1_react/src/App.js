import './App.css';
import ChatContainer from './containers/ChatContainer';
import { Box, Modal, Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const[open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <h1>CHATTERBOX</h1>
      < ChatContainer />
      < Modal 
        open= {open}
        onClose={handleClose}>
          <Box id="log-in-modal">
            <button onClick={handleClose} id="log-in-button">Log In</button>
          </Box>
        </Modal> 
    </>
  );
}





export default App;
