import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {

   const { user } = useContext(UserContext);

    return (
        <div className="Navbar">
            <div className="NavbarLinks">
                <Link to="/" className="inlineComponent">
                    User App Home
                </Link>
                <Link to={`/users`} className="inlineComponent">
                    User Index
                </Link>
                <Link to={`/user/login`} className="inlineComponent">
                    Current User: {user.user_login_name}; (Access Level: {user.user_access_level})
                </Link>
                <Link to={`/users/${user.user_id}/settings`} className="inlineComponent">
                    Settings
                </Link>
                <Link to="/users/new" className="inlineComponent">
                    New User
                </Link>
            </div>
        </div>
    );
};

export default Navbar;