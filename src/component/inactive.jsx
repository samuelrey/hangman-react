import React from "react";

const InactiveGame = ({ handleNew }) => {
    return (
        <div className="App">
            <h2>hangman</h2>
            <button className="btn" onClick={handleNew}>
                New
            </button>
        </div>
    );
};

export default InactiveGame;
