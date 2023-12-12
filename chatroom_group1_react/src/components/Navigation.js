import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
 return(
    <>
        <nav>
            <ul>
                <button className="button"><Link to="/chatrooms">All Chatrooms</Link></button>
                <button className="button"><Link to="/chatrooms/new">Add new Chat</Link></button>
            </ul>
        </nav>
        <Outlet />

    </>
 )
}

export default Navigation;