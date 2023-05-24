import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import GenericForm from "./GenericForm";
import { authentication } from "../utils/utils";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const API = process.env.REACT_APP_API_URL;

const UserEdit = ({ userDetailsKeysArray, userDetails, setUserDetails, setShowUserEdit }) => {

    const { id } = useParams();
    const { user } = useContext(UserContext);

    let navigate = useNavigate();

    // Update
    const updateUser = (updatedUser) => {
        axios
            .put(`${API}/users/${id}`, updatedUser)
            .then(
                () => {
                    navigate(`/users/${id}`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (authentication(user.user_access_level, 3)) {
            updateUser(userDetails);
            setShowUserEdit(previous => !previous);
        } else {
            alert("User access level 3 required to edit record.")
        }

    };

    //delete
    const deleteUser = () => {
        axios.delete(`${API}/users/${id}`)
            .then(() => {
                navigate(`/users`);
            },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c))
    };

    const handleDelete = () => {
        if (user.user_access_level < 4) {
            alert("Access level 4 required to delete user record.")
        } else {
            const response = window.confirm("Really delete this record?")
            if (response) {
                alert("OK, deleting user.")
                deleteUser();
            } else {
                alert("Deletion cancelled.")
            }
        }
    };

    return (
        <div>
            <h1>
                Frontend UserEdit Component
            </h1>
            <div>ID numbers may not be changed.</div>
            <div>The ID number for this record is {userDetails.user_id}</div>
            <GenericForm
                formDataObject={userDetails}
                setFormDataObject={setUserDetails}
                formDataObjectKeysArray={userDetailsKeysArray}
                handleSubmit={handleSubmit}
                formType="Edit Details"
            />
            <button onClick={handleDelete}>Delete Record</button>
        </div>
    )
};
export default UserEdit;