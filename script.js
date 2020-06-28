//All global variables

let chosenColorArray = [];
let randomColorArray = [];

let score = -1;
let gameStart = false;
let preventSpamClick = false;

let arrayButtonColor = ["yellow", "blue", "red", "green"];

//document.querySelector(".container").style.visibility = "hidden";

//Start the game!!! initialize the game
document.body.addEventListener("keypress", function(){
  if(!gameStart){
    //document.querySelector(".container").style.visibility = "visible";
    gameStart = true;

    setTimeout(() => {
      nextRandomColor();
    }, 1000);
  }

});

//difficulty
let modeSelector = document.querySelectorAll("button");

for (let i = 0; i < modeSelector.length; i++) {
  modeSelector[i].addEventListener("click", function(){
    modeSelector[0].classList.remove("selected");
    modeSelector[1].classList.remove("selected");
    this.classList.add("selected");
  })
  
}

//When clicked, get the color and add into array

let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function name() {

    if(preventSpamClick){
      return;
    }

    preventSpamClick = true;

    let chosenColor = this.getAttribute("id");
    chosenColorArray.push(chosenColor);

    pressAnimation(chosenColor);
    soundEffect(chosenColor);
    //console.log(chosenColorArray);

    checkPattern(chosenColorArray.length - 1);

    setTimeout(() => {
      preventSpamClick = false;
    }, 400);
  });
}

//check if user is clicking according to the pattern
function checkPattern(currentPattern) {
  if (randomColorArray[currentPattern] === chosenColorArray[currentPattern]) {
    //console.log("yes");
    if (chosenColorArray.length === randomColorArray.length) {
      setTimeout(() => {
        nextRandomColor();
      }, 1000);
    } 
  }
  else {
    document.querySelector("#score").innerHTML = "<h1>Game Over! <br> Press any keyboard button to restart.</h1>";
    document.querySelector("body").classList.add("gameover");
    setTimeout(() => {
      document.querySelector("body").classList.remove("gameover");
    }, 300);
    reset();

  }
}

//Pick a random color and save the color pattern
function nextRandomColor() {
  chosenColorArray = []; //Important, reset user pattern for every new input

  score++;
  document.querySelector("#score").innerHTML = "<h1>Score: " + score +"</h1>";

  let randomColor = Math.floor(Math.random() * 4);
  let randomColorSelected = arrayButtonColor[randomColor];
  randomColorArray.push(randomColorSelected);

  pressAnimation(randomColorSelected);
  soundEffect(randomColorSelected);
}


//pressanimation
function pressAnimation(chosenColor) {
  document.querySelector("#" + chosenColor).classList.add("pressedAnimation");
  setTimeout(function () {
    document
      .querySelector("#" + chosenColor)
      .classList.remove("pressedAnimation");
  }, 200);
}

function reset() {
  soundEffect("gameover");
  score = -1;
  randomColorArray = [];
  gameStart = false;
}

function soundEffect(color){
  let soundEffect = new Audio("soundEffect/" + color +".mp3"); // buffers automatically when created
  soundEffect.play();
}