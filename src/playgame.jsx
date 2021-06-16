import React from "react";

const PlayGame = ({game, handleLetter, handleGuess}) => {
    return (
        <div>
            <h2 className="current">{game.current}</h2>
            <p>
                <input
                    className="letter-input"
                    maxLength={1}
                    onChange={handleLetter}
                />

                <button
                    className="btn"
                    onClick={handleGuess}
                >
                    Guess
                </button>
            </p>
        </div>
    );
}

export default PlayGame;