import React from "react";


const Note = (props) => {
    return (
        <div className="note">
            <h1>{props.header}</h1>
            <p>{props.body}</p>
            <button onClick={() => props.deleteItem(props.id)}>DELETE</button>
        </div>
    );
}

export default Note;
