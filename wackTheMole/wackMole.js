document.addEventListener("DOMContentLoaded", () => {

  const game = document.getElementById('game-board');
  const scoreBoard = document.getElementById('score-board');
  let score = 0;
  let time = 4;

  // loadHtmlBoard
  function makeHtmlBoard() {
    let gameBoard = document.createElement('table');
    let count = 0;
    for (let i = 0; i < 3; i++) {
      let row = document.createElement('tr');
      for (let j = 0; j < 3; j++) {
        let cell = document.createElement('td');
        cell.classList.add('cell');
        cell.setAttribute('id', count)
        row.append(cell);
        count++;
      }
      gameBoard.append(row);
    }
    game.append(gameBoard);
  }

  // wackMole
  function wackMole(evt) {
    score++;
    scoreBoard.innerHTML = score;
    let mole = evt.target;
    // prevent double click
    mole.removeEventListener('click', wackMole);
  }


  // moveMole
  function moveMole() {
    // first clear last mole 
    let lastMole = document.querySelector(".mole");
    if (lastMole) {
      lastMole.removeEventListener('click', wackMole);
      lastMole.classList.remove('mole');
    }
    // get new random mole position and assign to corresponding td
    let molePosition = Math.floor(Math.random() * 9);
    let newMole = document.getElementById(molePosition);
    newMole.addEventListener('click', wackMole);
    newMole.classList.add('mole')
  }


  // start timer 
  function startTimer() {
    let htmlTime = document.getElementById('timer')
    setInterval(() => {
      console.log(time)
      time = time - 1;
      htmlTime.innerHTML = time;
      if (time <= 0) {
        alert("game over -- score : " + score)
      }
    }, 1000);
  }

  // start game
  function startNewGame(){
    startTimer()
    setInterval(() => {
      moveMole()
    }, 600);
    if(time === 0){
      clearInterval(moveMole)
    }
  }
  
  makeHtmlBoard()
  document.getElementById("new-game").addEventListener('click', startNewGame);

})