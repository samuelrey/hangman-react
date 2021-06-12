import React from "react";

const Game = ({ game }) => {
    console.log(game);
    return (
        <div>
            <h2 className="current">{game.current}</h2>
            <p>
                <input className="letter-input"></input>
                <button className="btn">Guess</button>
            </p>
        </div>
    );
};

export default Game;
