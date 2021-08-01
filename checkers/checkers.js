"use strict";

const HEIGHT = 8;
const WIDTH = 8;

let board = [];
let currPiece = []; 

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
    let count= (y % 2);
    let row = document.createElement('tr');
    for (let x = 0; x < WIDTH; x++) {
      let cell = document.createElement('td');
      cell.addEventListener('click', dropPiece)
      cell.classList.add('cell');
      cell.setAttribute('id', `${y}-${x}`);
      if(count % 2 === 0) {
        cell.classList.add('black');
      }
      count++;
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

function placePieces() {
  let count=0;
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      let tile = document.getElementById(`${y}-${x}`);
      let piece = document.createElement('div');
      piece.setAttribute('id', count);
      piece.classList.add('piece');
      piece.setAttribute('draggable', true);
      if(count < 16) {
        piece.classList.add('blue');
        piece.addEventListener('click', movePiece)
        count++;
        tile.append(piece);
      } else if (count >= 48) {
        piece.classList.add('red');
        piece.addEventListener('click', movePiece)
        count++;
        tile.append(piece);
      } else {
        count++;
      }
    }
  }
}


function dropPiece(evt) {
  let cell = document.getElementById(evt.target.id)
  console.log(cell, "--", evt.target.id)
  if(!currPiece[0]) return;
  cell.append(currPiece[0])
  currPiece = [];
}

function movePiece(evt) {
  let piece = document.getElementById(evt.target.id);
  if(!currPiece[0]) currPiece.push(piece);
  console.log("moving piece", currPiece);

}

function newGame() {
  makeBoard();
  placePieces()
}



newGame()