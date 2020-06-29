//All global variables
let chosenColorArray = [];
let randomColorArray = [];
//let reverseRandomColorArray = [];

let score = -1;
let gameStart = false;
let preventSpamClick = false;
let classic = false;
let reverse = false;

let arrayButtonColor = ["yellow", "blue", "red", "green"];

//DOM Manipulation
let modeSelector = document.querySelectorAll("button");
let buttons = document.querySelectorAll(".btn");

document.querySelector(".container").style.visibility = "hidden";

//Start the game!!! initialize the game
document.body.addEventListener("keypress", function(){
  if(!gameStart && classic || reverse){
    document.querySelector(".container").style.visibility = "visible";
    gameStart = true;

    setTimeout(() => {
      nextRandomColor();
    }, 1000);
  }

});

//difficulty
for (let i = 0; i < modeSelector.length; i++) {
  modeSelector[i].addEventListener("click", function(){
    modeSelector[0].classList.remove("selected");
    modeSelector[1].classList.remove("selected");
    this.classList.add("selected");
    console.log(this.innerText);
    if(this.innerText === "CLASSIC"){
      classic = true;
      reverse = false;
    }
    else if(this.innerText === "REVERSE"){
      classic = false;
      reverse = true;
    }
    // if(this.innerText==="CHOAS"){
    //   document.querySelector("#yellow").classList.remove("yellow");
    //   document.querySelector("#green").classList.remove("green");
    //   document.querySelector("#red").classList.remove("red");
    //   document.querySelector("#blue").classList.remove("blue");
    //   for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].removeAttribute("id");
    //   }
    // }
  })
  
}

//When clicked, get the color and add into array
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
  console.log(randomColorArray);
  if (randomColorArray[currentPattern] === chosenColorArray[currentPattern]) {
    console.log(chosenColorArray);
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
  document.querySelector("#score").innerHTML = "<h1> The Simon Game!! <br> Score: " + score +"</h1>";

  let randomColor = Math.floor(Math.random() * 4);
  let randomColorSelected = arrayButtonColor[randomColor];
  if(classic){
  randomColorArray.push(randomColorSelected);
  }else if(reverse){
    randomColorArray.unshift(randomColorSelected);
  }

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

// function randomColors(){
//   //pick a "color" from 0 to 255
//   let r = Math.floor(Math.random()*256);
//   let g = Math.floor(Math.random()*256);
//   let b = Math.floor(Math.random()*256);
//   return "rgb(" + r + ", " + g + ", " + b + ")";
// }

// function colorArray(){
//  let array = [];
//   for (let i = 0; i < 4; i++) {
//     array.push(randomColors());
//   }
//   return array;
// }

// //testing
// // let colors = ["rgb(0,255,0)",
// // "rgb(255,0,255)","rgb(0,0,255)","rgb(0,255,255)"]
// let colors = colorArray();
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].style.backgroundColor = colors[i];
// }