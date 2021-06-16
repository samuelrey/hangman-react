import React from "react";

const GameOver = ({game, handleNew}) => {
    return (
        <div>
            <h2>Game Over</h2>
            <h2 className="current">{game.current}</h2>
            <h2 className="current">{game.answer}</h2>

            <button className="btn" onClick={handleNew}>New</button>
        </div>
    )
}

export default GameOver;