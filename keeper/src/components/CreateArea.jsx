import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CreateArea = (props) => {

    const [item, setItem] = useState({
        title: "",
        content: "",
        id: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setItem(prevState => ({
            ...prevState,
            [name]: value,
            id: uuidv4()
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (item.title && item.content) {
            props.addItem(item);
            setItem({
                title: "",
                content: "",
                id: ""
            })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="create-note">
                <input name="title" placeholder="Title" onChange={handleChange} value={item.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={item.content} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
