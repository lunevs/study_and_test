import React, {useState} from "react";

const Hello = () => {

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });
    const [isMouseOver, setIsMouseOver] = useState(false);

    const changeForm = (event) => {
        const {name, value} = event.target;
        setContact(prevValue => {
            return {
              ...prevValue,
              [name]: value
            };
        })
    }

    const submitForm = (event) => {
        event.preventDefault()
    }
    const handeMouseOver = () => {
        setIsMouseOver(true);
    }
    const handeMouseOut = () => {
        setIsMouseOver(false);
    }

    return (
        <div className="authBlock">
            <h2>Hello {contact.fName} {contact.lName}</h2>
            <p>{contact.email}</p>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    name="fName"
                    className="inpStyle"
                    value={contact.fName}
                    onChange={changeForm}
                />
                <input
                    type="text"
                    placeholder="Enter your surname"
                    name="lName"
                    className="inpStyle"
                    value={contact.lName}
                    onChange={changeForm}
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="inpStyle"
                    value={contact.email}
                    onChange={changeForm}
                />
                <button
                    type="submit"
                    onMouseOver={handeMouseOver}
                    onMouseOut={handeMouseOut}
                    className="butStyle"
                    style={{backgroundColor: isMouseOver ? "black" : "white"}}
                >
                    Enter
                </button>
            </form>
        </div>
    );
}

export default Hello;