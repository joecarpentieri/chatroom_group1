import Chat from "./Chat";
const ChatList = ({listOfChatrooms, listOfUsers}) => {
 
    const displayChatrooms = listOfChatrooms.map( chatroom => {
        return <Chat chatroom={chatroom} key={chatroom.id} listOfUsers = {listOfUsers}/>
    })



    return ( 

            <>
            <h1>Chatrooms</h1>
            {displayChatrooms}
            </>
     );
}
 
export default ChatList;