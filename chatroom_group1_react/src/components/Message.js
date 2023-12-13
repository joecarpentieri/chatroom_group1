const Message = ({message}) => {
    

    
    let messageTime = new Date(message.timeCreated)
    const formattedDate = messageTime.toLocaleString("en-GB", {

        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })

    return ( 
        <>
        <div  id="message">
        <p>{message.userName}: {message.content}</p>
        <p>[sent:{formattedDate}]</p>
        </div>
        </>
     );
}
 
export default Message;