import React, { useState } from "react";
import GameOver from "./gameover"
import InactiveGame from "./inactive";
import ActiveGame from "./active"

const GameContainer = () => {
    const [letter, setLetter] = useState("");
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

    const guess = () => {
        const newGame = fakeGuess(letter, game);
        setGame(newGame);
    };

    const updateLetter = (letter) => {
        setLetter(letter);
    };

    if (game === null) {
        return <InactiveGame handleNew={newGame} />;
    }

    if (game.answer !== null) {
        return <GameOver game={game} handleNew={newGame} />;
    }

    return <ActiveGame game={game} handleLetter={(updateLetter)} handleGuess={guess} />;
};

// I added this fake functionality to test the app independent of an API. Once
// I'm satisfied with the view, replace this with actual API calls.
const fakeAnswer = {
    "Z": [0],
    "E": [1],
    "R": [2],
    "O": [3],
};

const fakeGame = () => {
    return {
        id: "14420",
        current: "____",
        answer: null,
        remainingGuesses: 6,
    };
};

const fakeGuess = (letter, game) => {
    let newCurrent = game.current;
    let newRemainingGuesses = game.remainingGuesses;
    let newAnswer = game.answer;

    if (fakeAnswer[letter]) {
        fakeAnswer[letter].forEach((index) => {
            newCurrent = newCurrent.slice(0, index) +
                letter + 
                newCurrent.slice(index + 1)
        });
        delete fakeAnswer[letter];
    } else {
        newRemainingGuesses--;
    }

    if (newRemainingGuesses === 0 || Object.keys(fakeAnswer).length === 0) {
        newAnswer = "ZERO";
    }

    return {
        ...game, 
        current: newCurrent, 
        remainingGuesses: newRemainingGuesses, 
        answer: newAnswer
    };
};

export default GameContainer;