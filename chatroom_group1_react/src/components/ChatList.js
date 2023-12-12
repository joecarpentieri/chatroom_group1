import Chat from "./Chat";
const ChatList = ({listOfChatrooms}) => {
 
    const displayChatrooms = listOfChatrooms.map( (chatroom) => {
        return <Chat chatroom={chatroom} key={chatroom.id}/>
    })
    console.log(displayChatrooms);



    return ( 

            <>
            <h1>Chatrooms</h1>
            {displayChatrooms}
            </>
     );
}
 
export default ChatList;