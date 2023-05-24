import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GenericForm from "../../components/GenericForm";
import { UserContext } from '../../contexts/UserContext';

const API = process.env.REACT_APP_API_URL;

const UserCreate = () => {

    const [newUser, setNewUser] = useState({});
    const [userObjectKeysArray, setUserObjectKeysArray] = useState([]);
    const [userList, setUserList] = useState([]);

    const { user } = useContext(UserContext);

    let navigate = useNavigate();

    /*
            "user_login_name": "guest_user",
        "user_login_password": "password",
        "user_failed_logins": 0,
        "user_last_login": "2023-01-01T05:00:00.000Z",
        "user_date_of_birth": "2023-01-01T05:00:00.000Z",
        "user_account_create_date": "2023-01-01T05:00:00.000Z",
        "user_username": "Guest",
        "user_image_type": "local",
        "user_image_local": "/images/guest.jpg",
        "user_image_url": "https://example.com/guest.jpg",
        "user_subscription_type": "Free",
        "user_access_level": 1,
        "user_email": "noemail@notanemail.com",
        "user_quote": "Logged in as guest.",
        "user_notepad": "Guest account settings may not be modified.  Have a nice day."
    */

    useEffect(() => {
        setNewUser(
            {
                user_id: "",
                user_login_name: "",
                user_login_password: "",
                user_failed_logins: 0,
                user_last_login: "",
                user_date_of_birth: "",
                user_account_create_date: "",
                user_username: "",
                user_image_type: "",
                user_image_local: "",
                user_image_url: "",
                user_subscription_type: "",
                user_access_level: 0,
                user_email: "",
                user_quote: "",
                user_notepad: "",
            }
        )
    }, [])

    useEffect(() => {
        setUserObjectKeysArray(Object.keys(newUser));
    }, [newUser])

    useEffect(() => {
        axios.get(`${API}/users`)
            .then((response) => {
                setUserList(response.data);
            })
            .catch((e) => console.warn("UsersIndex Axios catch", e));
    }, [])

    const addUser = async (userToAdd) => {
        axios
            .post(`${API}/users`, userToAdd)
            .then(
                (response) => {
                    navigate(`/users/${response.data.user_id}`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.user_access_level < 2) {
            alert("Access level 2 required to create new user.")
        } else if (userList.filter(aUser => aUser.user_login_name === newUser.user_login_name).length > 0) {
            alert("Login name already in use.  Please select another login name.")
        } else {
            addUser(newUser);
        }
    }

    return (
        <div>
            <h1>
                Frontend UserCreate Page
            </h1>
            <GenericForm
                formDataObject={newUser}
                formDataObjectKeysArray={userObjectKeysArray}
                setFormDataObject={setNewUser}
                handleSubmit={handleSubmit}
                formType="Create User"
            />
        </div>
    )
};
export default UserCreate;