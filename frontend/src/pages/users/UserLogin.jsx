import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';

const API = process.env.REACT_APP_API_URL;

const UserLogin = () => {

    const [loginAttemptUser, setLoginAttemptUser] = useState(
        {
            loginName: "",
            loginPassword: ""
        }
    );
    const [userListToCheck, setUserListToCheck] = useState([]);

    const { loginUser } = useContext(UserContext);

    useEffect(() => {
        axios.get(`${API}/users`)
            .then((response) => {
                setUserListToCheck(response.data);
            })
    }, []);

    const validateUser = () => {
        const negativeChecker = userListToCheck.findIndex((userToCheck) => {
            return (userToCheck.user_login_name === loginAttemptUser.loginName)
        });

        if (negativeChecker < 0) {
            alert("Login name not found.  Please create a new user, or check login name entry.")
        } else if (userListToCheck[negativeChecker].user_login_password !== loginAttemptUser.loginPassword) {
            alert ("Password not found for this login name")
        } else {
            loginUser(userListToCheck[negativeChecker])
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateUser(loginAttemptUser);
    };

    const handleTextChange = (event) => {
        setLoginAttemptUser({ ...loginAttemptUser, [event.target.id]: event.target.value });
    };

    return (
        <div>
            <h1>
                Front End UserLogin Page
            </h1>
            <form onSubmit={handleSubmit} >
                <label>Login Name:
                    <input
                        id="loginName"
                        value={loginAttemptUser.loginName}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Login Name"
                        required
                    />
                </label>
                <label>Login Password:
                    <input
                        id="loginPassword"
                        value={loginAttemptUser.loginPassword}
                        type="password"
                        onChange={handleTextChange}
                        placeholder="Login Password"
                        required
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default UserLogin;