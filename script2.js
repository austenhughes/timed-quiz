var quiz= document.querySelector("#quiz");
var confirm = document.querySelector("#confirm");
var scoreCard = document.querySelector("#scoreCard");
var start =document.querySelector("#start")

var startQuizButton = document.querySelector("#startButton");
var restartQuizButton = document.querySelector("#re-startButton");

startQuizButton.addEventListener("click", runQuiz);
restartQuizButton.addEventListener("click", runQuiz);

var questionText = document.querySelector("#question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

window.choiceA.addEventListener("click", selected = "selectA");
choiceB.addEventListener("click", selected  = "selectB");
choiceC.addEventListener("click", selected = "selectC");
choiceD.addEventListener("click", selected = "selectD");

var selected = "";

var arayToStoreQuestions = [];
var arayToStoreScores = [];
var score =0;

function runQuiz(){

for(var i=0; i < arayToStoreQuestions.length; i++)

    if(selected = selectB){
        console.log(selected)
        numberOfQuestion= ((numberOfQuestion) +1);
        corectAnswers = ((corectAnswers)+1);
        console.log("question 1 corect.")
        console.log(numberOfQuestion)
        i++
    // dispaly corect :) for short set amount of time
}else{
        console.log(selected)
        numberOfQuestion= ((numberOfQuestion)+1);
    // display incorect for short set amount of time
    // take away time
        console.log("question 1 incorect.")
        console.log(numberOfQuestion)
        i++
}
}
