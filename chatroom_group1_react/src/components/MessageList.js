import Message from "./Message";
const MessageList = ({listOfMessages, fetchListOfChatrooms}) => {

    const displayMessages = listOfMessages.map((message) => {
        return <Message key={message.id} message={message} fetchListOfChatrooms={fetchListOfChatrooms}/>
    })


    return ( 
        <div className="message">
        {displayMessages}
        </div>
     );
}
 
export default MessageList;