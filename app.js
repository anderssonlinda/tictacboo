var body = document.querySelector('body');
var windows = document.querySelectorAll('.window img');
var newGameBtn = document.querySelector('.newGame');
var ghost = document.querySelector('.ghost');
var colourPlayer1 = document.querySelector('.colourPlayer1');
var colourPlayer2 = document.querySelector('.colourPlayer2');
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
    hideGhost()
    if(turn %2 == 0){
        event.target.removeEventListener('click', displayToken);
        if(player1ColourOption == 0){
            event.target.classList.add('player1Light');
        } else if (player1ColourOption == 1) {
            event.target.classList.add('greenLight');
        } else if (player1ColourOption == 2) {
            event.target.classList.add('purpleLight');
        }
        player1Values.push(Number(event.target.dataset.position));
        turn++;
        isItAWin(player1Values);
        isItADraw()
    } else {
        if(player2ColourOption == 0){
            event.target.classList.add('player1Light');
        } else if (player2ColourOption == 1) {
            event.target.classList.add('magentaLight');
        } else if (player2ColourOption == 2) {
            event.target.classList.add('redLight');
        }
        event.target.classList.add('player2Light');
        event.target.removeEventListener('click', displayToken);
        player2Values.push(Number(event.target.dataset.position));
        turn++;
        isItAWin(player2Values);
        isItADraw()
    }
    colourPlayer1.removeEventListener('click', changePlayerColour);
    colourPlayer2.removeEventListener('click', changePlayerColour);
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
    if(turn == 9){
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
        windows[i].classList.remove('player1Light', 'greenLight', 'purpleLight');
        windows[i].classList.remove('player2Light', 'magentaLight', 'redLight');
    }
    round++
    turn = 0;
    player1Values = [];
    player2Values = [];
    displayRound.textContent = `Round: ${round}`
    displayWinner.textContent = '';
    colourPlayer1.addEventListener('click', changePlayerColour);
    colourPlayer2.addEventListener('click', changePlayerColour);
}

function hideGhost() {
    ghost.classList.add('fadeOut');
    ghost.style.opacity = 0;
}

var player1ColourOption = 0;
var player2ColourOption = 0;
function changePlayerColour(event) {
    if(event.target == colourPlayer1){
        player1ColourOption++;
        if (player1ColourOption == 1){
            event.target.style.backgroundColor = '#4DE94C';
        } else if (player1ColourOption == 2){
            event.target.style.backgroundColor = '#6F0A82';
        } else if (player1ColourOption == 3){
            player1ColourOption = 0;
        }
        if(player1ColourOption == 0) {
            colourPlayer1.style.background = '#FFCD2E';
        }
    } else if(event.target == colourPlayer2) {
        player2ColourOption++;
        if (player2ColourOption == 1){
            event.target.style.backgroundColor = '#3783FF';
        } else if (player2ColourOption == 2){
            event.target.style.backgroundColor = '#F60000';
        } else if (player2ColourOption == 3){
            player2ColourOption = 0;
        }
        if(player2ColourOption == 0) {
            colourPlayer2.style.background = '#FF7601';
        }
    }
}

for(var i = 0; i < windows.length; i++){
    windows[i].addEventListener('click', displayToken);
}

newGameBtn.addEventListener('click', newGame);
ghost.addEventListener('click', hideGhost);
colourPlayer1.addEventListener('click', changePlayerColour);
colourPlayer2.addEventListener('click', changePlayerColour);