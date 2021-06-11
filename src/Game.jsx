import React from "react";

const Game = () => {
    return (
        <div>
            <h2 className="current">____</h2>
            <p>
                <input className="letter-input"></input>
                <button className="btn">Guess</button>
            </p>
        </div>
    );
};

export default Game;
