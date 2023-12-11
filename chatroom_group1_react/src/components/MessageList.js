import Message from "./Message";
const MessageList = ({listOfMessages}) => {

    const displayMessages = listOfMessages.map((message) => {
        return <Message key={message.id} message={message} />
    })


    return ( 
        <>
        {displayMessages}
        </>
     );
}
 
export default MessageList;