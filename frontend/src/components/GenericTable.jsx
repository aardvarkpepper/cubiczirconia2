import { Link } from "react-router-dom";
import { snakeCaseToTitleCase } from "../utils/utils.js";
import "./GenericTable.css";

const GenericTable = ({ tableData = ([]), tableKey="" }) => {

    let tableDataKeysArray = [];
    if (tableData.length > 0) {
        tableDataKeysArray = Object.keys(tableData[0]);
    }

    const genericTableOutput = () => {
        if (tableData.length === 0) {
            return (
                <div>
                    <div>This table component requires particular arguments to be passed in from a parent element.</div>
                    <div>The table not rendering may be a result of the above not happening.</div>
                </div>
            )
        } else {
            return (
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                {tableDataKeysArray.map((objectKey, index) => {
                                    return (
                                        <th key={`${tableKey}${objectKey}tableheader${index}`}>
                                            {snakeCaseToTitleCase(objectKey)}
                                        </th>
                                    )
                                })}
                                <th>Show </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((element, index) => {
                                return (
                                    <tr key={`${tableKey}${element}tablerow${index}`}>
                                        {tableDataKeysArray.map((objectKey, index) => {
                                            return (
                                                <td key={`${tableKey}${element}tablecell${index}`}>
                                                    {element[objectKey]}
                                                </td>
                                            )
                                        })}
                                        <td key={`${tableKey}${element}tablecelllink${index}`}>
                                            <Link to={`/users/${element[tableDataKeysArray[0]]}`}>
                                                <span>
                                                    Show
                                                </span>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )
        }
        // if formType none
    }
    return (
        <div className="GenericTable">
            <h1>
                Frontend GenericTable Component
            </h1>
            {genericTableOutput()}
        </div>
    )
};
export default GenericTable;