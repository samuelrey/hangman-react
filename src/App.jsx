import React, { useState } from "react";
import Game from "./Game";

function App() {
    const [game, setGame] = useState(null);

    const newGame = async () => {
        const response = myNew();
        setGame(response);
    };

    if (game !== null) {
        return (
            <div className="App">
                <h2>hangman</h2>
                <main>
                    <Game game={game} />
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

function myNew() {
    // TODO fetch response from API
    return {
        id: "1893",
        current: "________",
        answer: null,
        remainingGuesses: 6,
    };
}

export default App;
