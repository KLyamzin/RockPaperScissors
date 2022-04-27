/*
Adding UI to the original Rock Paper Scissors game.
*/
console.log("Welcome To The Rock Paper Scissors Game!");

const selectionButtons = document.querySelectorAll("[data-id]");
const finalColumn = document.querySelector('[data-final-column]');
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
        const selection = SELECTIONS.find(sel => sel.name === selectionName);

        // I really struggled to come up with this 2 lines of code. They remove the created div before adding a new div.
        const delElm = document.querySelectorAll('.result-selection')
        delElm.forEach(del => { del.remove() })

        makeSelection(selection);


    })
})

// Determing who is the winner
function makeSelection(selection) {
    const aiSelection = aiGenNumb();
    const yourWinner = isWinner(selection, aiSelection);
    const aiWinner = isWinner(aiSelection, selection)

    addSelectionResult(aiSelection, aiWinner);
    addSelectionResult(selection, yourWinner);

}
function addSelectionResult(selection, winner) {

    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)

}



/* 
const div1 = finalColumn.querySelector('#player').classList.add('result-selection')
const div2 = finalColumn.querySelector('#ai').classList.add('result-selection')
// div1.innerText = selection.emoji;
// div1.classList.add("result-selection");
if (yourWinner) div1.classList.add('winner');
// div2.classList.add("result-selection");
if (aiWinner) div2.classList.add('winner'); */

// console.log("AI ", aiSelection);

function isWinner(playerSelection, aiSelection) {
    const result = playerSelection.beats === aiSelection.name;
    // console.log(result);
    return result;
}
function aiGenNumb() {
    const genIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[genIndex];
}

// function addSelectionResult(selection, winner) {
//     const div = document.getElementById('ai');
//     div.innerText = selection.emoji;
//     div.classList.add('result-selection')
//     if (winner) div.classList.add('winner');
//     finalColumn.after(div)
// }

// function addEmojiPlayer(selection, winner) {
//     const div = document.getElementById('player')
//     div.innerText = selection.emoji;
//     div.classList.add('result-selection')
//     if (winner) div.classList.add('winner');
//     finalColumn.after(div)
//}
// Generating a random number between 0 - 2





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