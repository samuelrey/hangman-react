import React, { useState } from "react";

const Game = ({ game, handleGuess }) => {
    const [letter, setLetter] = useState("");

    const handleChange = ({ target: { value } }) => {
        setLetter(value);
    };

    return (
        <div>
            <h2 className="current">{game.current}</h2>
            <p>
                <input
                    className="letter-input"
                    maxLength={1}
                    onChange={handleChange}
                />

                <button
                    className="btn"
                    onClick={() => {
                        handleGuess(letter);
                    }}
                >
                    Guess
                </button>
            </p>
        </div>
    );
};

export default Game;
