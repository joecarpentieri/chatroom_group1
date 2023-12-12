import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
 return(
    <>
        <nav>
            <ul>
                <li><Link to="/chatrooms">All Chatrooms</Link></li>
                <li><Link to="/chatrooms/new">Add new Chat</Link></li>
            </ul>
        </nav>
        <Outlet />

    </>
 )
}

export default Navigation;