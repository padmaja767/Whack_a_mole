// let currMoleTile;
// let currPlantTile;
// let score = 0;
// let gameOver=false;
// window.onload = function(){
//     setGame();
// }
// function setGame(){
//     for(let i=0;i<9;i++){
//         let tile = document.createElement("div");
//         tile.id = i.toString();
//         tile.addEventListener("click",selectTile);
//         document.getElementById("board").appendChild(tile);
//     }
//     setInterval(setMole,1000);
//     setInterval(setPlant,2000)
// }
// function getRandomTile(){
//     let num=Math.floor(Math.random()*9);
//     return num.toString();
// }
// function setMole(){
//     if (gameOver){
//         return;
//     }
//     if(currMoleTile){
//         currMoleTile.innerHTML = "";
//     }
//     let mole = document.createElement("img");
//     mole.src = "./monty-mole.png";
//     let num = getRandomTile();
//     if (currPlantTile && currPlantTile.id==num){
//         return;
//     }
//     currMoleTile = document.getElementById(num);
//     currMoleTile.appendChild(mole);
// }
// function setPlant(){
//     if (gameOver){
//         return;
//     }
//     if (currPlantTile){
//         currPlantTile.innerHTML = "";
//     }
//     let plant = document.createElement("img");
//     plant.src='./piranha-plant.png';
//     let num=getRandomTile();
//     if (currMoleTile && currMoleTile.id==num){
//         return;
//     }
//     currPlantTile = document.getElementById(num);
//     currPlantTile.appendChild(plant);
// }
// function selectTile(){
//     if (gameOver){
//         return;
//     }
//     if (this == currMoleTile){
//         score+=10;
//         document.getElementById("score").innerText = score.toString();
//     }
//     else if (this==currPlantTile){
//         document.getElementById("score").innerText = "GAME OVER: "+score.toString();
//         gameOver=True;
//     }
// }
// function startGame(){
//     console.log("start game");
// }


let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
let moleInterval;
let plantInterval;
let startTime;
let endTime;
let elapsedTime;
let timerInterval;
let timeLeft = 0; // Initial time in seconds


window.onload = function() {
  setGame();
}

function setGame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }
  // setInterval(setMole, 1000);
  // setInterval(setPlant, 2000);
  startTime = new Date(); // Record start time
 
  moleInterval = setInterval(setMole, 1000);
  plantInterval = setInterval(setPlant, 2000);
   startTimer(); // Start the timer
}

function startTimer() {
      timerInterval = setInterval(() => {
      let currentTime =new Date();
      elapsedTime = Math.floor((currentTime - startTime) / 1000); // Calculate elapsed time in seconds
      document.getElementById("timePlayed").innerText = formatTime(elapsedTime);
    }, 1000);
  }

  function formatTime(seconds) {
    // Convert seconds to hours, minutes, and seconds
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;
  
    // Format the time string
    let timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    return timeString;
  }

function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";
  let num = getRandomTile();
  if (currPlantTile && currPlantTile.id == num) {
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = './piranha-plant.png';
  let num = getRandomTile();
  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = "Score: " + score.toString();
  } else if (this == currPlantTile) {
    endGame();
  }
}

function endGame() {
  gameOver = true;
  clearInterval(moleInterval); // Stop mole movement
  clearInterval(plantInterval); // Stop plant movement
  clearInterval(timerInterval); // Stop the timer
  endTime = new Date(); // Record end time
  elapsedTime = Math.floor((endTime - startTime) / 1000); // Calculate elapsed time in seconds
  
  // Display final score and time played on game over card
  document.getElementById("finalScore").innerText = score.toString();
  // document.getElementById("timePlayed").innerText = formatTime(elapsedTime);
  document.getElementById("timePlayedCard").innerText = formatTime(elapsedTime);
  document.getElementById("gameOverCard").style.display = "block"; // Display game over card
  document.getElementById("gameOverCard").style.display = "block";

}
function restartGame() {
    score = 0;
    gameOver = false;
    timeLeft = 0; // Reset the timer to initial time
  clearInterval(moleInterval); // Clear the interval for mole movement
  clearInterval(plantInterval); // Clear the interval for plant movement
  clearInterval(timerInterval); // Clear the timer interval
  // Reset DOM elements
  document.getElementById("score").innerText = "Score: 0";
  document.getElementById("timePlayed").innerText = "Time Played: 00:00:00";
  document.getElementById("gameOverCard").style.display = "none"; // Hide game over card

  // Restart the game
  setGame(); // Start the game again
  }
  


// let currMoleTile;
// let currPlantTile;
// let score = 0;
// let gameOver = false;
// let seconds = 0;
// let timerInterval;

// window.onload = function () {
//     setGame();
//     startTimer();
// };

// function setGame() {
//     for (let i = 0; i < 9; i++) {
//         let tile = document.createElement("div");
//         tile.id = i.toString();
//         tile.addEventListener("click", selectTile);
//         document.getElementById("board").appendChild(tile);
//     }
//     setInterval(setMole, 1000);
//     setInterval(setPlant, 2000);
// }

// function getRandomTile() {
//     let num = Math.floor(Math.random() * 9);
//     return num.toString();
// }

// function setMole() {
//     if (gameOver) {
//         return;
//     }
//     if (currMoleTile) {
//         currMoleTile.innerHTML = "";
//     }
//     let mole = document.createElement("img");
//     mole.src = "./monty-mole.png";
//     let num = getRandomTile();
//     if (currPlantTile && currPlantTile.id == num) {
//         return;
//     }
//     currMoleTile = document.getElementById(num);
//     currMoleTile.appendChild(mole);
// }

// function setPlant() {
//     if (gameOver) {
//         return;
//     }
//     if (currPlantTile) {
//         currPlantTile.innerHTML = "";
//     }
//     let plant = document.createElement("img");
//     plant.src = './piranha-plant.png';
//     let num = getRandomTile();
//     if (currMoleTile && currMoleTile.id == num) {
//         return;
//     }
//     currPlantTile = document.getElementById(num);
//     currPlantTile.appendChild(plant);
// }

// function selectTile() {
//     if (gameOver) {
//         return;
//     }
//     if (this == currMoleTile) {
//         score += 10;
//         document.getElementById("score").innerText = "Score: " + score.toString();
//     } else if (this == currPlantTile) {
//         document.getElementById("score").innerText = "GAME OVER: " + score.toString();
//         gameOver = true;
//         clearInterval(timerInterval);
//         displayGameOverCard();
//     }
// }

// function startTimer() {
//     timerInterval = setInterval(updateTimer, 1000);
// }

// function updateTimer() {
//     seconds++;
//     document.getElementById("timer").innerText = "Time: " + seconds.toString() + "s";
// }

// function displayGameOverCard() {
//     document.getElementById("final-score").innerText = "Score: " + score.toString();
//     document.getElementById("final-time").innerText = "Time: " + seconds.toString() + "s";
//     document.getElementById("game-over-card").style.display = "block";
// }
