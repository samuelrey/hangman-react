import React, { useState } from "react";
import Game from "./Game";

function App() {
    const [game, setGame] = useState(null);

    const newGame = async () => {
        // try {
        //     const response = await fetch("http://localhost:14420/new");
        //     const json = await response.json();
        //     setGame(json);
        // } catch (error) {
        //     console.log(error);
        // }
        setGame(fakeGame());
    };

    const handleGuess = (letter) => {
        console.log("Guessed: ", letter);
    };

    if (game !== null) {
        return (
            <div className="App">
                <h2>hangman</h2>
                <main>
                    <Game game={game} handleGuess={handleGuess} />
                </main>
            </div>
        );
    }

    return (
        <div className="App">
            <h2>hangman</h2>
            <button className="btn" onClick={() => newGame()}>
                New
            </button>
        </div>
    );
}

const fakeGame = () => {
    return {
        id: "14420",
        current: "____",
        answer: null,
    };
};

export default App;
