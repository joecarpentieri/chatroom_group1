import MessageList from "./MessageList";
const Chat = ({chatroom}) => {

    const listOfMessages = chatroom.messages;
    
    return ( 

        <>
            <h4>{chatroom.name}</h4>
            <MessageList listOfMessages={listOfMessages} />
        </>
     );
}
 
export default Chat;