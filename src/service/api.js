export const newGame = async () => {
    const response = await fetch(
        "https://hangman-ev2sk.ondigitalocean.app/new"
    );
    const game = await response.json();
    return game;
};

export const guess = async (id, letter) => {
    const response = await fetch(
        "https://hangman-ev2sk.ondigitalocean.app/guess",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id, guess: letter }),
        }
    );
    const game = await response.json();
    return game;
};
