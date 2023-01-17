import React from "react";

const Copyright = () => {

    const fName = "Sergey";
    const lName = "Lunev";
    const year = Math.round(2000 + Math.random() * 100);

    return (
        <div>
            <p>Created by {fName} {lName}</p>
            <p>Created by {fName + " " + lName}</p>
            <p>Created by {`${fName} ${lName}`}</p>
            <p>Copyright {year}</p>
            <br />
        </div>
    );

}


export default Copyright;