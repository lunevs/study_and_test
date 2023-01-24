import React from "react";

//

const Card = (props) => {
    return(


        <div>
            <div className="myCard">
                <div className="myCardHeader">
                    <h2>{props.name}</h2>
                    <img src={props.img_url} />
                </div>
                <div className="myCardBody">
                    <p className="info">{props.tel}</p>
                    <p className="info">{props.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;