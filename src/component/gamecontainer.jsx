import React, { useState } from "react";
import { newGame, guess } from "../service/api";
import GameOver from "./gameover";
import InactiveGame from "./inactive";
import ActiveGame from "./active";

const GameContainer = () => {
    const [game, setGame] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [letters, setLetters] = useState([]);

    const handleNewGame = async () => {
        try {
            const g = await newGame();

            setGame(g);
            setGuesses([]);
            setLetters(alphabet());
        } catch (error) {
            console.log(error);
        }
    };

    const handleGuess = async (letter) => {
        try {
            const g = await guess(game.id, letter);

            let newGuesses = guesses;
            newGuesses.push(letter);

            let newLetters = letters;
            let index = newLetters.indexOf(letter);
            newLetters.splice(index, 1);

            setGame(g);
            setGuesses(newGuesses);
            setLetters(newLetters);
        } catch (error) {
            console.log(error);
        }
    };

    if (game === null) {
        return <InactiveGame handleNew={handleNewGame} />;
    }

    if (game.answer !== null) {
        return <GameOver game={game} handleNew={handleNewGame} />;
    }

    return (
        <ActiveGame
            game={game}
            handleGuess={handleGuess}
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
