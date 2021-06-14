import React, { useState } from "react";
import Game from "./Game";

function App() {
    const [game, setGame] = useState(null);

    const newGame = async () => {
        try {
            const response = await fetch("http://localhost:14420/new");
            const json = await response.json();
            setGame(json);
        } catch (error) {
            console.log(error);
        }
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

export default App;
