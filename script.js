/*
Adding UI to the original Rock Paper Scissors game.
*/

console.log("Welcome To The Rock Paper Scissors Game!");
// Part 1

const selectionButtons = document.querySelectorAll("[data-id]");
const SELECTIONS = [
    {
        name: "rock",
        emoji: '✊',
        beats: "scissors"
    },
    {
        name: "paper",
        emoji: '✋',
        beats: "rock"
    },
    {
        name: "scissors",
        emoji: '✌️',
        beats: "paper"
    }
];

selectionButtons.forEach(button => {
    button.addEventListener("click", e => {
        const selectionName = button.dataset.id
        makeSelection(selectionName);
    })
})
function makeSelection(selection) {
    console.log(selection);
}

// Generating a random number between 0 - 2
const computerSelection = SELECTIONS[Math.floor(Math.random() * 3)];
// const computerSelection = function () {
//     let genWord = choices[Math.floor(Math.random() * 3)];
//     console.log("Computer chose: ", genWord);
//     return genWord;
// };

/* //Part 2
//Player's choice. Prompt and conversion function
const playerSelection = function () {
    let playerSelectionAny = prompt("Type 'Rock', 'Paper', or 'Scissors':");

    // this will make every word start with the capital letter
    let test = playerSelectionAny.charAt(0).toLocaleUpperCase() + playerSelectionAny.slice(1).toLocaleLowerCase();

    // this will thest if the word matches the choices array
    if (test === choices[0] || test === choices[1] || test === choices[2]) {
        console.log("You chose: ", test);
        return test;
    } else {
        alert("Try again...");
        playerSelection();
    }
}; */

//Part 3.
//Play a single round of the game.

/* let playerScore = 0;
let computerScore = 0;
const round = function (playerSelection, computerSelection) {
    if (
        (playerSelection === choices[0] && computerSelection === choices[2]) ||
        (playerSelection === choices[1] && computerSelection === choices[0]) ||
        (playerSelection === choices[2] && computerSelection === choices[1])
    ) {
        // adding before displaying the score
        console.log(`You Win! You ${++playerScore}, Computer ${computerScore} `)
    }
    // lse if (rock & pap) || (pap & sc) || (sc & rock) - `you lose`
    else if (
        (playerSelection === choices[0] && computerSelection === choices[1]) ||
        (playerSelection === choices[1] && computerSelection === choices[2]) ||
        (playerSelection === choices[2] && computerSelection === choices[0])
    ) {
        console.log(`You loose! You ${playerScore}, Computer ${++computerScore} `)
    } else { console.log("It's a tie!") }
}; */

/* // Part 4
// create function > game < to call > playRound < function inside 5 times
const game = function () {
    for (let i = 1; i < 6; i++) {
        // game counter
        console.log(` \n    Game ${i} \n`)
        // Pass the playerSelection and computerSelection as arguments invoking both at the same time
        round(playerSelection(), computerSelection());
    };
};
game();
*/

// ~~~ FIN ~~~