"use strict";

const boardSize = 5;


let stateBoard = [];
let difficulty =25;

let htmlBoard = document.getElementById("game-board");


// make state board
function makeBoard() {
  // generate array grid boardSize X boardSize
  for (let y = 0; y < boardSize; y++) {
    stateBoard.push(Array.from({ length: boardSize }));
  }

  let count = 0;
  while (count < difficulty) {
    let randY = Math.floor(Math.random() * boardSize);
    let randX = Math.floor(Math.random() * boardSize);
    // if co-ord not already selected, select it as 
    if (!stateBoard[randX][randY]) {
      stateBoard[randX][randY] = "off";
      count++;
    }
  }
}


function makeHtmlBoard() {

  for (let row in stateBoard) {
    let tRow = document.createElement('tr');
    for (let col in stateBoard) {

      let cell = document.createElement('td');
      cell.setAttribute('id', `${row}-${col}`);
      // check if on or off in stateBoard and assign proper class 
      if (!stateBoard[row][col]) {
        cell.classList.add('on');
      } else {
        cell.classList.add('off');
      }
      // add click handler to all cells and append to tRow
      cell.addEventListener('click', handleClick);
      tRow.append(cell);
    }
    // add 'grid' to DOM
    htmlBoard.append(tRow);
  }
}

// click handler
function handleClick(evt) {
  let coords = evt.target.id;
  changeLights([coords]);
  console.log(evt.target.getAttribute('class'));
  let adjacents = getAdjacentCells(+coords[0], +coords[2]);
  changeLights(adjacents);
  checkWin()
};

// returns array of all adjacent cells to turn on/off
function getAdjacentCells(y, x) {
  stateBoard[y][x] = stateBoard[y][x] === "on" ? "off" : "on";
  let adjacents = [];
  if (y > 0) {
    adjacents.push([`${y - 1}-${x}`]);
  }
  if (x > 0) {
    adjacents.push([`${y}-${x - 1}`]);
  }
  if (y < boardSize - 1) {
    adjacents.push([`${y + 1}-${x}`]);
  }
  if (x < boardSize - 1) {
    adjacents.push([`${y}-${x + 1}`]);
  }
  return adjacents;
}

// change lights in adjancent to clicked cell
function changeLights(coords) {

  // stateBoard[y][x] = stateBoard[y][x] === "on" ? "off" : "on"

  for (let coord of coords) {
    let cell = document.getElementById(coord);

    let y = coord[0][0];
    let x = coord[0][2];
    stateBoard[y][x] = stateBoard[y][x] === "on" ? "off" : "on";

    if (cell.getAttribute('class') === "on") {
      cell.classList.remove('on');
      cell.classList.add('off');
    } else {
      cell.classList.remove('off');
      cell.classList.add('on');
    }
  }
}

function checkWin() {
  
  const won = stateBoard.forEach(row => {
    row.every(cell => {
      cell === "off" || undefined})
    });
  
    if(won){
    alert("winner")
  }
}

makeBoard();
makeHtmlBoard();
