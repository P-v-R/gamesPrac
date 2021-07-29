
// import _ from 'lodash';
const colors = [

  "red",
  "blue",
  "green",
  "pink",
  "red",
  "blue",
  "green",
  "pink",
  "orange",
  "orange",
  // "black",
  // "black",
  // "purple",
  // "purple",
  // "yellow",
  // "yellow"
];

let selected = [];
let score = 0;


const gameBoard = document.getElementById("game-board")
let scoreBoard = document.createElement('h1')
scoreBoard.innerText = `${score}`
gameBoard.prepend(scoreBoard)

function updateScore(){
  scoreBoard.innerText = `${score}`
}


function makeHTML() {
  let shuffled = _.shuffle(colors)
  for (let color of shuffled) {
    // make a new div for each color - set ID to tile and class to color
    let tile = document.createElement('div');
    tile.setAttribute('id', `tile`);
    tile.setAttribute('color', `${color}`);
    tile.classList.add(`hidden`);
    tile.addEventListener('click', handleClick)
    // append to DOM 
    gameBoard.append(tile)
  }
}

function handleClick(evt) {
  console.log(evt.target.getAttribute('color'));
  let clicked = evt.target
  let clickedColor = evt.target.getAttribute('color')

  clicked.removeEventListener('click', handleClick)
  clicked.style.backgroundColor = clickedColor
  // reveal color of clicked 
  evt.target.classList.remove('hidden')

  // add to selected in selected.length 0 or 1
  selected.push(clicked)
  if (selected.length === 2) {
    checkMatch();
  }
}

// check if both selected matches are the same, if not...flip both
function checkMatch() {
  console.log(selected);
  if (selected[0].getAttribute('color') === selected[1].getAttribute('color')) {
    score++;
    selected=[];
    updateScore()
  } else {
    setTimeout(resetSelected, 400);
    return
  }
  
}

// reset selected colors 
function resetSelected() {
  for (let div of selected) {
    div.style.backgroundColor = null;
    div.classList.add(`hidden`);
    div.addEventListener('click', handleClick);
  }
  selected = [];
}


makeHTML();