import Chat from "./Chat";
const ChatList = ({listOfChatrooms}) => {
 
    const displayChatrooms = listOfChatrooms.map( chatroom => {
        return <Chat chatroom={chatroom} key={chatroom.id}/>
    })

    return ( 

            <>
            <h3>List of Chats</h3>
            {displayChatrooms}
            </>
     );
}
 
export default ChatList;