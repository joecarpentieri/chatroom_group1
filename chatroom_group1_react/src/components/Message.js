const Message = ({message}) => {
    

    return ( 
        <>
        <div  id="message">
        <p>{message.userName}: {message.content}</p>
        <p>[sent:{message.timeCreated}]</p>
        </div>
        </>
     );
}
 
export default Message;