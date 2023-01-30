import React from "react";
import { emoji } from "../utils/emoji";

const EmojiCard = (em) => {
    return (
        <div className="emojiCard">
            <span>{em.emoji}</span>
            <h2>{em.name}</h2>
            <p>{em.meaning}</p>
        </div>
    );
}

const Emoji = () => {
    return (
        <div className="emoji">
            {emoji.map(EmojiCard)}
        </div>
    );
}

export default Emoji;