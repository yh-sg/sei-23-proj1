//All global variables
let chosenColorArray = [];
let randomColorArray = [];

let score = 0;
let arrayButtonColor = ["yellow", "blue", "red", "green"];

//All DOM Manipulation
let buttons = document.querySelectorAll(".btn");

//when clicked, get the color and add into array
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function name() {
    let chosenColor = this.getAttribute("id");
    chosenColorArray.push(chosenColor);

    pressAnimation(chosenColor);

    console.log(chosenColorArray);

    checkPattern(chosenColorArray.length-1);
  });
}

//initialize the game
nextRandomColor();


//pressanimation
function pressAnimation(chosenColor){
    document.querySelector("#" + chosenColor).classList.add("pressedAnimation");
    setTimeout(function () {
      document.querySelector("#" + chosenColor).classList.remove("pressedAnimation");
    },200)
}

//check if user is clicking according to the pattern
function checkPattern(currentPattern){
  if(chosenColorArray[currentPattern]===randomColorArray[currentPattern]){
    console.log("yes");
  }
    if(chosenColorArray.length === randomColorArray.length){

      setTimeout(() => {
        nextRandomColor();
      }, 1000);
    }
  else{
    console.log("no");
  }
}

//Pick a random color and save the color pattern
function nextRandomColor() {
  score++;
  document.querySelector("#score").innerHTML = "<h1>score: " + score + "</h1>";

  chosenColorArray = []; //Important, reset user pattern for new input


  let randomColor = Math.floor(Math.random() * 4);
  randomColor = arrayButtonColor[randomColor];
  randomColorArray.push(randomColor);

  pressAnimation(randomColor);
}