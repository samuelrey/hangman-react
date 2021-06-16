import React from "react";

const GameOver = ({ game, handleNew }) => {
    return (
        <div>
            <h2>Game Over</h2>
            <h2 className="answer">{game.answer}</h2>
            <h2 className={game.answer === game.current ? "win" : "loss"}>
                {game.current}
            </h2>

            <button className="btn" onClick={handleNew}>
                New
            </button>
        </div>
    );
};

export default GameOver;
