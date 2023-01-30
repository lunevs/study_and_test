import React from "react";


// <Card
//     name="Beyonce"
//     tel="+123 456 789 0"
//     img_url="https://avatars.mds.yandex.net/i?id=3b738b3aaa5a4a1b46661825cd306180fae2cd6a-7755772-images-thumbs&n=13"
//     email="me@me.com"
// />
//
// <Card
//     name="Boyarskiy"
//     tel="+123 456 789 0"
//     img_url="https://avatars.mds.yandex.net/i?id=79d4d1abf5a35de081d7f3540591179cbd43c425-8228018-images-thumbs&n=13"
//     email="me@me.com"
// />
//
// <Card
//     name="Chak Noris"
//     tel="+123 456 789 0"
//     img_url="https://avatars.mds.yandex.net/i?id=0a757931ca3bb7d41c12d576bd32995faf708592-8497209-images-thumbs&n=13"
//     email="me@me.com"
// />


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