import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


const App = () => {
    
    const [notes, setNotes] = useState([]);

    const handleAddItem = (noteItem) => {
        setNotes(prevState => {
            return [...prevState, noteItem];
        });
    }

    const handleDeleteItem = (id) => {
        setNotes(prevState => {
            return prevState.filter(val => val.id !== id);
        })
    }

    return (
        <div>
            <Header />
            <CreateArea addItem={handleAddItem} />
            {notes.map(note => {
                return <Note
                    key={note.id}
                    id={note.id}
                    header={note.title}
                    body={note.content}
                    deleteItem={handleDeleteItem}
                />
            })}
            <Footer />
        </div>
    );
}

export default App;
