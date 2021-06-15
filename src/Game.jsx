import React, { useState } from "react";

const Game = ({ game, handleGuess }) => {
    const [letter, setLetter] = useState("");

    const handleChange = ({ target: { value } }) => {
        setLetter(value);
    };

    if (game.answer !== null) {
        // TODO handle new button.
        return (
            <div>
                <h2>Game Over!</h2>
                <h2 className="current">{game.current}</h2>
                <h2 className="current">{game.answer}</h2>

                <button className="btn">New</button>
            </div>
        )
    }

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
