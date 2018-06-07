var game = document.getElementsByClassName("questions");
console.log(game);


function renderButtons() {
     $("#button").empty();
         for (var i = 0; i < questions.length; i++) {
        $(".button").append("<button>" + choices[i] + "</button>");
    }
}
var questionOne = {
    question: "Bourbon is the native spirit of what country?",
    choices: ["Spain", "France", "United+States", "Tunisia", "Monaco"],
    // output: questionOne.choices[2],
   // correctAnswer: questionOne.choices[2],
};
 var questionTwo = {
    question: "According to government rules, what percentage of bourbon must be made of corn?",
    choices: ["48%", "35%", "61%", "51%", "73%"],
    //correctAnswer: questionTwo.choices[3],
 };
var questionThree = {
    question: "The name <i>Bourbon</i> originates from what country?",
    choices: ["France", "United States", "England", "Luxembourg", "Denmark"],
    //correctAnswer: questionThree.choices[0],
};
var questionFour = {
    question: "Un-aged bourbon is referred to as what: ?",
    choices: ["Not good", "White dog", "Apple cider", "Ripple", "Whiskey"],
    //correctAnswer: questionFour.choices[1],
};
var questionFive = {
    question: "What state is the homeplace of bourbon?",
    choices: ["Virginia", "Kentucky", "Tennesee", "Missouri", "New York"],
    //correctAnswer: questionFive.choices[1],
};
var questionSix = {
    question: "Which of these is not considered a bourbon?",
    choices: ["Pappy Van Winkle", "Eagle Rare", "Early Times", "Basil Hayden\'s", "Maker\'s Mark"],
    //correctAnswer: questionSix.choices[2],
};
var questionSeven = {
    question: "How often can a barrel be used in making bourbon?",
    choices: ["Once", "Twice", "Thrice", "Five times", "Barrels can be used indefinitely"],
    //correctAnswer: questionSeven.choices[0],
};

// --- The two arrays: a question bank and a used question bank ---
const questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];
console.log(questions);
var beginBttn = document.getElementById("begin");
console.log(beginBttn);
beginBttn.onclick = function() {
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].question);
        var questionDiv = $("<div class='question-section'>");

        questionDiv.text(questions[i].question);
        
        $(".question-bank").append(questionDiv);
    }
}
questionOne.choices[2];

// Show function?
function gameIteration() {
for (var i=0; i<questions.length; i++);
$("#button").click(function(){
    $(questions[i]).show();
});
}


// --- On button click, initiates the questions and iterates through the array until the final question ---

var button = document.querySelectorAll(".button");
console.log(button);
button.onclick = function() {
    for(var i=0; i<questions.length; i++) {
        displayedQuestions = document.getElementById("question-bank");
        return questions[i];        
    }
}; 

function displayInquiry() {
    for (i=0; i<questions.length; i++);
    document.getElementById(questions(i));
};

// -- Timing bar; need to figure out to how to get it to reset after each iteration ---

function timeBar() {
  var progress = document.getElementById("time-bar");
  var percent = document.getElementById("timer");
  var counter = 5;
  var progress = 25;
  var id = setInterval(frame, 50);
  function frame() {
    if (progres == 500 && counter == 100) {
      clearInterval(id);
    } else {
      progress += 5;
      counter += 1;
      elem.style.width = width + 'px'; 
      percent.innerHTML = counter + '%';
    }
  }
}
button.onclick(progress());

// Results, tally and display. ---

function tallyGoodResponses () {
    for (i=0; i<questions.length; i++);
    if (button.onclick.displayInquiry("click") == correctAnswer) {
        var goodResponse = i++;
    }
    else var badResponse = i++;
};
function displayResults() {
    return tallyGoodResponses();
};