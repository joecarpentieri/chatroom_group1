import { useEffect, useState } from "react"

const Message = ({message, fetchListOfChatrooms, currentUser}) => {

    const [stateReaction, setStateReaction] = useState({
        reaction: ""
    })

    const [listOfReactions, setListOfReactions] = useState(
        message.reactions
    )

    const reactionOptionsList = ["😄", "😂", "☹️", "😍", "✅", "🎸"]

    const reactionOptions = reactionOptionsList.map(reaction => {
        return <option key={reactionOptionsList.indexOf(reaction)} value={reaction}>{reaction}</option>
    })

    const isCurrentUser = message.userName === currentUser.userName


    let messageTime = new Date(message.timeCreated)
    const formattedDate = messageTime.toLocaleString("en-GB", {
        
        day: "2-digit",
        month: "2-digit",
        year:"numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })

    const patchReaction = async (messageId, reaction) => {
        const response = await fetch(`http://localhost:8080/messages/${messageId}`, {
            method : "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(reaction)
        })
        const addReaction = await response.json();
        fetchListOfChatrooms();
        setListOfReactions([addReaction.reactions])
    }

    useEffect(() => {
        
    }, [message.reactions.reactions])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        patchReaction(message.id, stateReaction);
        setStateReaction({
            reaction: ""
        })
        event.target.reset();
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedReaction = {...stateReaction};
        copiedReaction[propertyName] = event.target.value;
        setStateReaction(copiedReaction);
    }
    

    return ( 
        <>
        <div  id="message" className={isCurrentUser ? "user" : "notUser"}>
        <p>{message.userName}: {message.content} </p>
        <p>{listOfReactions}</p>
        <p>[sent:{formattedDate}]</p>
        
        <form  id={isCurrentUser ? "reaction-form" : "non-reaction"} onSubmit={handleFormSubmit}>
            <label htmlFor="reaction"></label>
            <select
            id="reaction"
            name="reaction"
            defaultValue="select-reaction"
            onChange={handleChange}
            className='text-box'
            ><option disabled value="select-reaction"></option>{reactionOptions}</select>
            <input type="submit" value="react" className="button-old"/>
        </form>
        </div>
        </>
     );
}
 
export default Message;