let computerMove = 0;
let playerMove = 0;
let randomNumber = 0;

const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

/**
 * The buttonClicked function carries out the various stages of the game. First, it clears the field from the displayed messages to the user,
 * then assigns the value of the button to the player, then randomizes a number from 1 to 3 inclusive,
 * in the next step it assigns the value from the randomly selected range to the computer and substitutes the appropriate word for the numbers,
 * i.e. paper, stone or scissors. Finally, it compares the player's move with that of the computer and displays who won and what moves were played by both players.
 */
function buttonClicked(argButtonName) {
  clearMessages();
  clearResult();
  console.log(argButtonName + ' został kliknięty');

  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

/**
 * The getMoveName function assigns a randomly selected number to the appropriate term, ie stone, paper, scissors. Additionally,
 * if there is a number other than 1 to 3 inclusive. He takes this move as a stone.
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

let playerCount = 0;
let computerCount = 0;
/**
 * The displayResult function compares the player's movement with the computer's movement and tells who won and what moves were made by both players.
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ' , ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerCount = playerCount + 1;
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerCount = playerCount + 1;
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    playerCount = playerCount + 1;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
    computerCount = computerCount + 1;
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  printResult('Wynik gry: Komputer > ' + computerCount + ' - ' + playerCount + ' < Gracz.');
}