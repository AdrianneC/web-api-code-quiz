
//When the start quiz button is clicked

var startButton = document.querySelector("#start");
var quizQuestions = document.querySelector("#questions");
var timerElement = document.querySelector("#timer");
var timerCount = document.querySelector("#time")

var chosenQuestions = "";
var timer = 0;


// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 10;
}



// The setTimer function starts and stops the timer
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    }
  }, 1000);
}



// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);



