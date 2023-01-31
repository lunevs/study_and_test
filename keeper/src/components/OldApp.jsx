import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import Hello from "./Hello";

const userIsRegistered = true;

const OldApp = () => {

    // const [date, setDate] = useState("");
    // const updateDate = () => {
    //     const newDate = new Date().toLocaleTimeString();
    //     setDate(newDate);
    // }
    //setInterval(updateDate, 1000);

    return (
        <div>
            <Header />
            {notes.map(note => {
                return <Note
                    key={note.key}
                    header={note.title}
                    body={note.content}
                />
            })}
            <Footer />



            {/*{userIsRegistered && <Note key="12312312312" header="I AM THE HEADER" body="qqq w  we eeeee rrrr tttt yyyyy uuuuu iiiiiii ooooooooo pppppppp" />}*/}
            {/*<br style={{clear: "both"}} />*/}
            {/*<div style={{fontSize: "32px", margin: "0 auto", width: "200px"}}>*/}
            {/*    <p>{date}</p>*/}
            {/*    <button onClick={updateDate} style={{width: "100px"}}>update</button>*/}
            {/*</div>*/}
            {/*<br />*/}
            {/*<Hello />*/}
            {/*<br />*/}
        </div>
    );
}

export default OldApp;
