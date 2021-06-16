import React, { useState } from "react";
import GameOver from "./gameover";
import InactiveGame from "./inactive";
import ActiveGame from "./active";

const GameContainer = () => {
    const [game, setGame] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [letters, setLetters] = useState([]);

    const newGame = async () => {
        try {
            const response = await fetch("http://localhost:14420/new");
            const json = await response.json();

            setGame(json);
            setGuesses([]);
            setLetters(alphabet());
        } catch (error) {
            console.log(error);
        }
    };

    const guess = async (letter) => {
        try {
            const response = await fetch("http://localhost:14420/guess", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: game.id, guess: letter }),
            });
            const json = await response.json();
            let newGuesses = guesses;
            let newLetters = letters;

            newGuesses.push(letter);

            let index = newLetters.indexOf(letter);
            newLetters.splice(index, 1);

            setGame(json);
            setGuesses(newGuesses);
            setLetters(newLetters);
        } catch (error) {
            console.log(error);
        }
    };

    if (game === null) {
        return <InactiveGame handleNew={newGame} />;
    }

    if (game.answer !== null) {
        return <GameOver game={game} handleNew={newGame} />;
    }

    return (
        <ActiveGame
            game={game}
            handleGuess={guess}
            letters={letters}
            guesses={guesses}
        />
    );
};

const alphabet = () => {
    const ascii = Array.from(Array(26)).map((e, i) => i + 65);
    return ascii.map((x) => String.fromCharCode(x));
};

export default GameContainer;
