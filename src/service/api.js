export const newGame = async () => {
    const response = await fetch("http://localhost:14420/new");
    const game = await response.json();
    return game;
};

export const guess = async (id, letter) => {
    const response = await fetch("http://localhost:14420/guess", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id, guess: letter }),
    });
    const game = await response.json();
    return game;
};
