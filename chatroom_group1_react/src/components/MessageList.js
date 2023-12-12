import Message from "./Message";
const MessageList = ({listOfMessages}) => {

    const displayMessages = listOfMessages.map((message) => {
        return <Message key={message.id} message={message} />
    })


    return ( 
        <div className="message">
        {displayMessages}
        </div>
     );
}
 
export default MessageList;