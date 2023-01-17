import React from "react";

const Heading = () => {
    const currentYear = new Date()
    let greetingMessage = "Good Morning";
    let greetingStyle = {
        color: "green"
    };
    if (currentYear.getHours() > 12) {
        greetingMessage = "Good Afternoon";
        greetingStyle.color = "blue";
    }

    return (
        <div>
            <h1 className="heading" style={greetingStyle}>{greetingMessage}</h1>
            <p>Copyright {currentYear.getFullYear()}</p>
        </div>
    );
}

export default Heading;