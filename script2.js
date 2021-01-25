var quiz= document.querySelector("#quiz");
var confirm = document.querySelector("#confirm");
var scoreCard = document.querySelector("#scoreCard");
var start =document.querySelector("#start")

var startQuizButton = document.querySelector("#startButton");
var restartQuizButton = document.querySelector("#restartButton");

var questionText = document.querySelector("#question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

var recordedRessults = []

var selected;
var selectA;
var selectB;
var selectC;
var selectD;


function runQuiz() {

    var runTimer = document.querySelector("#timer"); 
    var secondsLeft = 10;
    
    setTime();
    function setTime(){
    var timerInterval = setInterval(function() {
    runTimer.textContent = secondsLeft + " seconds left";
    secondsLeft--;
     if(secondsLeft === 0) {
      clearInterval(timerInterval);
      runTimer.textContent= ("game over")
    }

    }, 
    1000);
    }

    // make start page hidden
    // make scorecard page hidden
    // make quiz apear 
    var corectAnswers = 0;
    var numberOfQuestion = 0;
    var score;
    var selected;
    
    var questions;
    questions=
        [

        (questionText.textContent = "Who is the first pokemon listed in the pokedex?",
        choiceA.textContent = "Rhydon",
        choiceB.textContent = "Bulbasaur",// corect answer
        choiceC.textContent = "Pikachu",
        choiceD.textContent = "Slowbro")

        ]

        for(var i=0; i < arayToStoreQuestions.length; i++)

            if(selected = selectB){
                console.log(selected)
                numberOfQuestion= ((numberOfQuestion) +1);
                corectAnswers = ((corectAnswers)+1);
                console.log("question 1 corect.")
                console.log(numberOfQuestion)
                // dispaly corect :) for short set amount of time
            }else{
                console.log(selected)
                numberOfQuestion= ((numberOfQuestion)+1);
                // display incorect for short set amount of time
                console.log("question 1 incorect.")
                console.log(numberOfQuestion)
            }

    getScore();
        
    function getScore(){
    score=corectAnswers/numberOfQuestion;
    console.log("this round score is ", score);
    recordedRessults = recordedRessults.concat(score);
    console.log("these are the recorded results", recordedRessults)
    }

//     make quiz page hidden
//     make core card page apear
//     dispaly recorededResults as a list 
//     button to try again 
//     run function runQuiz
// 

}

choiceA.addEventListener("click", selected = selectA);
choiceB.addEventListener("click", selected = selectB);
choiceC.addEventListener("click", selected = selectC);
choiceD.addEventListener("click", selected = selectD);

start.addEventListener("click", runQuiz,);