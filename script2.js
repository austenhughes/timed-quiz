var quiz= document.querySelector("#quiz");
var confirm = document.querySelector("#confirm");
var scoreCard = document.querySelector("#scoreCard");
var start =document.querySelector("#start")

var startQuizButton = document.querySelector("#startButton");
var restartQuizButton = document.querySelector("#restartButton");

startQuizButton.addEventListener("click", startQuiz,);
restartQuizButton.addEventListener("click", startQuiz,);

var questionText = document.querySelector("#question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

choiceA.addEventListener("click",);
choiceB.addEventListener("click",);
choiceC.addEventListener("click",);
choiceD.addEventListener("click",);

var arayToStoreQuestions = [
    
    {

    question:
    questionText = " text here ",
    choiceA = " answer a ",
    choiceB = " answer b ",
    choiceC = " answer c ",
    choiceD = " answer d ",

    answer: "chooseA",

    },
];

var arayToStoreScores = [];
var score =0;

for(var i=0; i < arayToStoreQuestions.length; i++){
    var response = quiz.textContent(arayToStoreQuestions[i].question)
}