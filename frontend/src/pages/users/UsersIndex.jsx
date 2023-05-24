import axios from "axios";
import { useState, useEffect } from "react";
import GenericTable from "../../components/GenericTable";

const API = process.env.REACT_APP_API_URL;

const UsersIndex = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${API}/users`)
            .then((response) => {
                //console.log("UsersIndex response.data", response.data);
                setUsers(response.data);
            })
            .catch((e) => console.warn("UsersIndex Axios catch", e));
    }, [])

    return (
        <div>
            <h1>
                Frontend UsersIndex Page
            </h1>
            <GenericTable tableData={users} tableKey={"users"} />
        </div>
    )
};
export default UsersIndex;