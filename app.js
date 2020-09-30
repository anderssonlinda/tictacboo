var windows = document.querySelectorAll('.window img');
var newGameBtn = document.querySelector('.newGame');
var namePlayer1 = document.querySelector('.name-player1');
var namePlayer2 = document.querySelector('.name-player2');
var displayPlayer1Score = document.querySelector('.score-player1');
var displayPlayer2Score = document.querySelector('.score-player2');
var displayRound = document.querySelector('.display-round');
var displayWinner = document.querySelector('.display-winner');
var player1Values = [];
var player2Values = [];
var player1Score = 0;
var player2Score = 0;
var winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9]
];
var turn = 0;
var round = 1;

function displayToken(event) {
    if(turn %2 == 0){
        event.target.removeEventListener('click', displayToken);
        event.target.classList.add('player1Light');
        player1Values.push(Number(event.target.dataset.position));
        turn++;
        isItAWin(player1Values);
        isItADraw()
    } else {
        event.target.classList.add('player2Light');
        event.target.removeEventListener('click', displayToken);
        player2Values.push(Number(event.target.dataset.position));
        turn++;
        isItAWin(player2Values);
        isItADraw()
    }
}

function isItAWin(playerValues) {
    for(var i = 0; i < winningCombinations.length; i++){
        var rightValues = null;
        for(var k = 0; k < playerValues.length; k++){
            if(winningCombinations[i].includes(playerValues[k])){
                rightValues++
            }    
        }
        if(rightValues == 3) {
            if(turn % 2 == 0){
                player2Score++;
                displayPlayer2Score.textContent = `Score: ${player2Score}`;
                displayWinner.textContent = `${namePlayer2.textContent} won this round!`;
                freezeGame()
            } else {
                player1Score++;
                displayPlayer1Score.textContent = `Score: ${player1Score}`;
                displayWinner.textContent = `${namePlayer1.textContent} won this round!`;
                freezeGame()
            }
        } 
    }
}

function isItADraw() {
    if(round == 9){
        displayWinner.textContent = `It's a draw!`;
        freezeGame()
    }
}

function freezeGame() {
    for(var i = 0; i < windows.length; i++){
        windows[i].removeEventListener('click', displayToken);
    }
}

function newGame() {
    for(var i = 0; i < windows.length; i++){
        windows[i].addEventListener('click', displayToken);
        windows[i].classList.remove('player1Light');
        windows[i].classList.remove('player2Light');
    }
    round++
    turn = 0;
    player1Values = [];
    player2Values = [];
    displayRound.textContent = `Round: ${round}`
    displayWinner.textContent = '';
}

for(var i = 0; i < windows.length; i++){
    windows[i].addEventListener('click', displayToken);
}

newGameBtn.addEventListener('click', newGame);