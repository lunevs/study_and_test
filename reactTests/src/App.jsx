import React from "react";
import Heading from "./components/Heading";
import List from "./components/List";
import Copyright from "./components/Copyright";
import Images from "./components/Images";

const App = () => {
    return (
        <div>
            <Heading />
            <List />
            <Copyright />
            <Images />
        </div>
    );
}

export default App;