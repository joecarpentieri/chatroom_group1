const Message = ({message}) => {
    return ( 
        <>
        <p>{message.userName}: {message.content} [sent:{message.timeCreated}]</p>
        </>
     );
}
 
export default Message;