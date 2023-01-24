import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";
import Emoji from "./Emoji";

const App = () => {
    return (
        <div>
            <Header />
            <Note />

            <br />

            <Emoji />

            <br />

            <Card
                name="Beyonce"
                tel="+123 456 789 0"
                img_url="https://avatars.mds.yandex.net/i?id=3b738b3aaa5a4a1b46661825cd306180fae2cd6a-7755772-images-thumbs&n=13"
                email="me@me.com"
            />

            <Card
                name="Boyarskiy"
                tel="+123 456 789 0"
                img_url="https://avatars.mds.yandex.net/i?id=79d4d1abf5a35de081d7f3540591179cbd43c425-8228018-images-thumbs&n=13"
                email="me@me.com"
            />

            <Card
                name="Chak Noris"
                tel="+123 456 789 0"
                img_url="https://avatars.mds.yandex.net/i?id=0a757931ca3bb7d41c12d576bd32995faf708592-8497209-images-thumbs&n=13"
                email="me@me.com"
            />

            <Footer />
        </div>
    );
}

export default App;
