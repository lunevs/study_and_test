import React from "react";

const Images = () => {
    return (
        <div>
            <div className="box-line">
                <div className="sq">
                    <div className="circle">1</div>
                </div>
                <div className="sq">
                    <div className="circle">2</div>
                </div>
                <div className="sq">
                    <div className="circle">3</div>
                </div>
            </div>

            <img src="https://picsum.photos/200?grayscale" />
            <br />
            <br />
            <img src="https://avatars.mds.yandex.net/i?id=839ad9276639e7d8e65a2e67eb64e4dbafac728d-8491909-images-thumbs&n=13" />
            <img src="https://avatars.mds.yandex.net/i?id=7c9458e858c0b2e8941d647ff8985f403941866d-8282929-images-thumbs&n=13" />
            <img src="https://avatars.mds.yandex.net/i?id=79a3d2c915bc7039f4a1169cc549858fcaea73c9-7863956-images-thumbs&n=13" />
        </div>
    );

}


export default Images;