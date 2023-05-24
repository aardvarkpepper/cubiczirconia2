import { snakeCaseToTitleCase } from "../utils/utils.js";

const UserDetails = ({userDetailsKeysArray, userDetails}) => {
    return (
        <div>
            <h1>
                Frontend UserDetails Component
            </h1>
            <table>
                <tbody>
                    {userDetailsKeysArray.map((keyElement) => {
                        return (
                            <tr key={`users ${keyElement}`}>
                                <td>
                                    {snakeCaseToTitleCase(keyElement)}
                                </td>
                                <td>
                                    {userDetails[keyElement]}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};
export default UserDetails;