import React, { useState } from "react";
import Game from "./Game";

function App() {
    const [id, setId] = useState(null);

    const newGame = async () => {
        // TODO fetch response from API
        setId("1447");
    };

    if (id) {
        return (
            <div className="App">
                <h2>hangman</h2>
                <main>
                    <Game />
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
