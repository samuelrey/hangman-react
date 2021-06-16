import React from "react";

const ActiveGame = ({game, handleGuess, letters, guesses}) => {
    return (
        <div>
            <h2 className="current">{game.current}</h2>
            <div>
                {letters.map((letter) => {
                    return (
                        <button 
                            key={letter}
                            onClick={() => handleGuess(letter)} 
                            className="btn"
                        >
                            {letter}
                        </button>
                    )
                })}
            </div>
            <div>
                {guesses.map((letter) => {
                    return (
                        <button
                            key={letter}
                            className="btn"
                        >
                            {letter}
                        </button>
                    )
                })}
            </div>
            <div>
                <h2>Remaining guesses: {game.remainingGuesses}</h2>
            </div>
        </div>
    );
}

export default ActiveGame;