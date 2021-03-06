"use strict";

const HEIGHT = 25;
const WIDTH = 25;

let board = [];

let htmlBoard = document.getElementById('game-board');

// snakeHead - cell leading the charge that every previous cell follows 

// make stateboard & render html board
function makeBoard() {
  for (let y = 0; y < HEIGHT; y++) {
    board.push(Array.from({ length: WIDTH }));
  }
  makeHtmlBoard();
}

// make html board
function makeHtmlBoard() {
  for (let y = 0; y < HEIGHT; y++) {
    let row = document.createElement('tr');
    for (let x = 0; x < WIDTH; x++) {
      let cell = document.createElement('td')
      cell.classList.add('cell');
      cell.setAttribute('id', `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

function placeHead () {
  
}
function moveSnake() {

}

function newGame() {
  makeBoard();
}



newGame()