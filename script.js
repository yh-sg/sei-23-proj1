//All global variables
let chosenColorArray = [];
let randomColorArray = [];
let randomColor;
let arrayButtonColor = ["yellow", "blue", "red", "green"];

//All DOM Manipulation
let buttons = document.querySelectorAll(".btn");

//when clicked, get the color and add into array
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function name() {
    let chosenColor = this.getAttribute("id");
    let x = chosenColorArray.push(chosenColor);

    pressAnimation(chosenColor);

    console.log(chosenColorArray);
  });
}

nextRandomColor();

//Pick a random color and save the color pattern
function nextRandomColor() {
  let randomColor = Math.floor(Math.random() * 4);
  randomColor = arrayButtonColor[randomColor];
  randomColorArray.push(randomColor);

  pressAnimation(randomColor);
}

//pressanimation
function pressAnimation(chosenColor){
    document.querySelector("#" + chosenColor).classList.add("pressedAnimation");
    setTimeout(function () {
      document.querySelector("#" + chosenColor).classList.remove("pressedAnimation");
    },200)
}