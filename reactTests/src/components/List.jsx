import React from "react";
import { add, multiply, divide, subtract } from "../utils/Maths";

const List = () => {
    return (<ul>
        <li>{add(500, 10)}</li>
        <li>{multiply(500, 10)}</li>
        <li>{subtract(500, 10)}</li>
        <li>{divide(500, 10)}</li>
    </ul>);
}

export default List;
