import React from "react";

const TodoItem = ({text, id, onClickItem}) => {

    return (
        <li onClick={() => onClickItem(id)}>
            {text}
        </li>
    );
}

export default TodoItem;