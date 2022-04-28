/*
Adding UI to the original Rock Paper Scissors game. I used 2 youtube tutorials by 
Web Dev Simplified-  https://youtu.be/1yS-JV4fWqY
Coding Artist- https://youtu.be/Iwvf9iBP04M
*/

const selectionButtons = document.querySelectorAll("[data-id]");
const finalColumn = document.querySelector('[data-final-column]');
const playerScoreSpan = document.querySelector('[data-player-score]');
const aiScoreSpan = document.querySelector('[data-ai-score]');
const gameStatus = document.querySelector('[data-game-status]');
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
        const selectionName = button.dataset.id;
        const selection = SELECTIONS.find(sel => sel.name === selectionName);

        // I really struggled to come up with this 2 lines of code. They remove the created div before adding a new div.
        const delElm = document.querySelectorAll('.result-selection');
        delElm.forEach(del => { del.remove() });
        makeSelection(selection);
    })
})

// Determing who is the winner
function makeSelection(selection) {
    const aiSelection = aiGenNumb();
    const yourWinner = isWinner(selection, aiSelection);
    const aiWinner = isWinner(aiSelection, selection);

    addSelectionResult(aiSelection, aiWinner);
    addSelectionResult(selection, yourWinner);

    // add incremented score to display. also show the status
    if (yourWinner) {
        incrementScore(playerScoreSpan);
        gameStatus.innerText = "You Win!";
        gameStatus.classList.add('victory');
        gameStatus.classList.remove('defeat', 'tie');
    }
    else if (aiWinner) {
        incrementScore(aiScoreSpan);
        gameStatus.innerText = "You Lost!";
        gameStatus.classList.add('defeat');
        gameStatus.classList.remove('victory', 'tie');
    }
    else {
        gameStatus.innerText = "Tie!";
        gameStatus.classList.add('tie');
        gameStatus.classList.remove('victory', 'defeat');
    }
}
// increment the score
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}
// display the current selections for each player
function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalColumn.after(div);
}

function isWinner(playerSelection, aiSelection) {
    const result = playerSelection.beats === aiSelection.name;
    return result;
}
//generate the ai selection
function aiGenNumb() {
    const genIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[genIndex];
}

// ~~~ FIN ~~~