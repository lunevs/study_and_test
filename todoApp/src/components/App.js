import React, { useState } from "react";
import TodoList from "./TodoList";
import InputArea from "./InputArea";

const App = () => {

    const [tasksList, setTasksList] = useState([]);

    const addingItem = (itemText) => {
        setTasksList(tasksList.concat(itemText));
    }

    const deleteItem = (id) => {
        setTasksList(prevState => {
            return prevState.filter((val, idx) => idx !== id);
        })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea onAdd={addingItem} />
            <TodoList tasksList={tasksList} onClickItem={deleteItem} />
        </div>
    );
}

export default App;