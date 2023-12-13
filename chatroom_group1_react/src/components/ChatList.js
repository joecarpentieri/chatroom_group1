import Chat from "./Chat";
const ChatList = ({listOfChatrooms, fetchListOfChatrooms}) => {
 
    const displayChatrooms = listOfChatrooms.map( (chatroom) => {
        return <Chat chatroom={chatroom} key={chatroom.id} fetchListOfChatrooms={fetchListOfChatrooms}/>
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