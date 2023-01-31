import React, {useState} from "react";

const InputArea = (props) => {

    const [task, setTask] = useState("");

    const handleChange = (event) => {
        const newTask = event.target.value;
        setTask(newTask);
    }

    return (
        <div className="form">
            <input type="text" name="task" value={task} onChange={handleChange} />
            <button onClick={() => {
                props.onAdd(task);
                setTask("");
            }} >
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;