let HEIGHT = 3;
let WIDTH = 3;

let currPlayer = 1;

let board = [];

// make state board
function makeBoard() {
  // board = [...Array(3).fill(Array(3).fill(undefined))]
  for (let y = 0; y < HEIGHT; y++) {
    board.push(Array.from({ length: WIDTH }));
  }
}
makeBoard();

// make HTML board
function makeHtmlBoard() {
  // get table element on HTML
  let htmlBoard = document.getElementById('board');

  for (let y = 0; y < HEIGHT; y++) {
    let row = document.createElement('tr');
    for (let x = 0; x < WIDTH; x++) {
      let cell = document.createElement('td');
      cell.setAttribute('id', `${y}-${x}`);
      cell.addEventListener('click', handleClick);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}


function handleClick(evt) {
  let selectedId = evt.target.id
  selectTile(selectedId)
}

/**
 * 
 * takes in string representing tile coordinates IE "1-2" representing 
 * board[1][2] - checks if already taken and assigns curr player piece to that 
 * tile in HTML and gameboard
 */

function selectTile(coord) {
  let y = +coord[0]
  let x = +coord[2]

  // assign state manager board at index [y][x] to currPlayer 
  board[y][x] = currPlayer

  
  
  let selected = document.getElementById(coord);
  selected.removeEventListener('click', handleClick);

  let piece = document.createElement('div');
  piece.classList.add('id', 'piece');
  piece.classList.add('id', `p${currPlayer}`);

  selected.append(piece);
  checkWin();
  currPlayer = currPlayer === 1 ? 2 : 1;
}

function checkWin(){

  function _win(cells){
    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  for (var y = 0; y < HEIGHT; y++) {
    for (var x = 0; x < WIDTH; x++) {
      // TODO: assign values to the below variables for each of the ways to win
      // horizontal has been assigned for you
      // each should be an array of 4 cell coordinates:
      // [ [y, x], [y, x], [y, x], [y, x] ]

      const horiz = [[y, x], [y, x + 1], [y, x + 2]];
      const vert = [[y, x], [y + 1, x], [y + 2, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2]];

      // find winner (only checking each win-possibility as needed)
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        alert("winner")
        return true;
      }
    }
  }
    
}

makeHtmlBoard();