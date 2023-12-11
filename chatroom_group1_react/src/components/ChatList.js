import Chat from "./Chat";
const ChatList = ({listOfChatrooms}) => {
 
    const displayChatrooms = listOfChatrooms.map( chatroom => {
        return <Chat chatroom={chatroom} key={chatroom.id}/>
    })

    return ( 

            <>
            <h1>List of Chats</h1>
            {displayChatrooms}
            </>
     );
}
 
export default ChatList;