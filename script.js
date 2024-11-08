// Assignment 5-b
// Function for computer's play
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Test computerPlay function in the console
console.log("Computer chooses:", computerPlay());