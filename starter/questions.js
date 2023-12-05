// Question Array



var questionList = [

    {
        questionText: "What’s the biggest animal in the world?",
    answer: ["Blue Whale", "Polar Bear", "Elephant", "Giraffe"],
    correct: "Blue Whale",

    },
    
    {questionText: "What is the smallest planet in our solar system?",
    answer: ["Venus", "Saturn", "Mercury", "Mars"],
    correct: "Mercury",
}


]


var questions = [];

init();

function renderQuestions() {

  questionList.innerHTML = "";

  // Render a new question list for each question
  for (var i = 0; i < questionsList.length; i++) {
    var questions = questionList[i];

    var button = document.createElement("button");
    button.textContent = "questionList"

    li.appendChild(button);
    todoList.appendChild(li);
  }
}




function init() {
    // Get stored questions from localStorage
    // Parsing the JSON string to an object
    var storedQuestions = JSON.parse(localStorage.getItem("questions"));
  
    // If questions were retrieved from localStorage, update the questions array to it
    if (storedQuestions !== null) {
      questions = storedQuestions;
    }
  
    // Render questons to the DOM
    renderQuestions();
  }
  
  function storeQuestions() {
    // Stringify and set "questions" key in localStorage to questions array
    localStorage.setItem("questions", JSON.stringify(questions));
  }
