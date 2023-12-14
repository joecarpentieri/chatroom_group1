import Chat from "./Chat";
const ChatList = ({listOfChatrooms, fetchListOfChatrooms, currentUser}) => {
 
    const displayChatrooms = listOfChatrooms.map( (chatroom) => {
        return <Chat chatroom={chatroom} key={chatroom.id} fetchListOfChatrooms={fetchListOfChatrooms} currentUser={currentUser}/>
    })
    console.log(displayChatrooms);



    return ( 

            <>
            {/* <h1>Chatrooms</h1> */}
            {displayChatrooms}
            </>
     );
}
 
export default ChatList;