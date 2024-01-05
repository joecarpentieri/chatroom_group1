import Chat from "./Chat";
const ChatList = ({listOfChatrooms, fetchListOfChatrooms, currentUser}) => {
 
    const displayChatrooms = listOfChatrooms.map( (chatroom) => {
        return <Chat chatroom={chatroom} key={chatroom.id} fetchListOfChatrooms={fetchListOfChatrooms} currentUser={currentUser}/>
    })

    return ( 

            <>
            {displayChatrooms}
            </>
     );
}
 
export default ChatList;