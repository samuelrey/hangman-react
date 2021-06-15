import React, { useState } from "react";

const Game = ({ game, handleGuess }) => {
    const [letter, setLetter] = useState("");

    const handleChange = ({ target: { value } }) => {
        setLetter(value);
    };

    // TODO conditionally render game over state if the answer is not null.
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
                        let letterInput =
                            document.querySelector(".letter-input");
                        letterInput.value = "";
                        handleGuess(letter.toUpperCase());
                    }}
                >
                    Guess
                </button>
            </p>
        </div>
    );
};

export default Game;
