//All global variables

let chosenColorArray = [];
let randomColorArray = [];

let score = -1;
let gameStart = false;

let arrayButtonColor = ["yellow", "blue", "red", "green"];

//Start the game!!! initialize the game
document.body.addEventListener("keypress", function(){
  if(!gameStart){
    nextRandomColor();
    gameStart = true;
  }
})

//When clicked, get the color and add into array
let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function name() {
    let chosenColor = this.getAttribute("id");
    chosenColorArray.push(chosenColor);

    pressAnimation(chosenColor);

    console.log(chosenColorArray);

    checkPattern(chosenColorArray.length - 1);
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
    document.querySelector("#score").innerHTML = "<h1>Game Over! Press any button to start^^</h1>";
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
  score = -1;
  randomColorArray = [];
  gameStart = false;
}