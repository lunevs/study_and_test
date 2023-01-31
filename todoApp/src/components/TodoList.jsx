import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({tasksList, onClickItem}) => {
    return (
        <div>
            <ul>
                {tasksList.map((el, idx) => {
                    return <TodoItem key={idx} id={idx} text={el} onClickItem={onClickItem}/>
                })}
            </ul>
        </div>

    );
}

export default TodoList;