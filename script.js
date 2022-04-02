/*
1. Start with the function called > computerPlay < that will randomly generate 'Rock' 'Paper' 'Scissors'
> Make an array of the 3 values.
> Generate a random value from 0 to 2
> Pass that value to a function that will take the value in the array using the value
> Print it in console.

2. Let player select or type a value in any case.
> Create prompt
> Make the input to Uppercase
> Check if the prompt === one of the values. If not, return to the prompt again.

3. Create a function that plays a single round of the game
> Create a function that takes two parameters > playerSelection < and > computerSelection <
> Function should have if (rock & sc) || (pap & rock) || (sc & pap) - `you win`
> else if (rock & pap) || (pap & sc) || (sc & rock) - `you lose`
> else `it's a tie`

4. Play round 
> create function > game < to call > playRound < function inside 5 times
> Use for loop to increment the game count
> Keep score by adding 1 to you if you win and 1 to computer if you loose, or else do nothing and play next game
*/



console.log("Weclome to the Game!")
// Part 1
// 3 choises of words [0, 1, 2]
const choices = ['Rock', 'Paper', 'Scissors'];

// Generating a random number between 0 - 2
const computerSelection = function () {
    // let genNumb = Math.floor(Math.random() * 3);
    // let genWord = choices[genNumb];
    let genWord = choices[Math.floor(Math.random() * 3)];
    console.log("\n Computer chose: ", genWord);
    return genWord;
};
// computerSelection();

//Part 2
//Player's choice. Prompt and conversion function
const playerSelection = function () {
    let playerSelectionAny = prompt("Type 'Rock', 'Paper', or 'Scissors':");
    // this will make every word  with the capital letter
    let test = playerSelectionAny.charAt(0).toLocaleUpperCase() + playerSelectionAny.slice(1).toLocaleLowerCase();
    // tis will thest if the word matches the choices array
    if (test === choices[0] || test === choices[1] || test === choices[2]) {
        console.log("\n You chose: ", test);
        return test;
    } else {
        alert("Try again...");
        playerSelection();
    }
};
// playerSelection();

//Part 3.
//Play a single round of the game.
// if (rock & sc) || (pap & rock) || (sc & pap) - `you win`
const round = function (playerSelection, computerSelection) {
    let playerScore = 1;
    let computerScore = 1;
    if (playerSelection === choices[0] && computerSelection === choices[2] ||
        playerSelection === choices[1] && computerSelection === choices[0] ||
        playerSelection === choices[2] && computerSelection === choices[1]) {
        console.log(`You Win! Score is ${playerScore++} `)
    }
    // lse if (rock & pap) || (pap & sc) || (sc & rock) - `you lose`
    else if (playerSelection === choices[0] && computerSelection === choices[1] ||
        playerSelection === choices[1] && computerSelection === choices[2] ||
        playerSelection === choices[2] && computerSelection === choices[0]) {
        console.log(`You loose! Score is ${computerScore++} `)
    } else { console.log("It's a tie!") }
};
round(playerSelection(), computerSelection());








