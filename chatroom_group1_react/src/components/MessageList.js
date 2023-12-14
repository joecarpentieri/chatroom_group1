import Message from "./Message";
const MessageList = ({listOfMessages, fetchListOfChatrooms, currentUser}) => {

    const displayMessages = listOfMessages.map((message) => {
        return <Message key={message.id} message={message} fetchListOfChatrooms={fetchListOfChatrooms} currentUser={currentUser}/>
    })


    return ( 
        <div className="message">
        {displayMessages}
        </div>
     );
}
 
export default MessageList;