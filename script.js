var quiz= document.querySelector("quiz");
var confirm = document.querySelector("confirm");
var scoreCard = document.querySelector("scoreCard");

var startQuizButton = document.querySelector("startButton");
var restartQuizButton = document.querySelector("restartButton");

var question = document.querySelector("#question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("B");
var choiceC = document.querySelector("C");
var choiceD = document.querySelector("D");

var recordedRessults = []

function runQuiz() {

    // make start page hidden
    // make scorecard page hidden
    // make quiz apear 
    var corectAnswers = 0;
    var numberOfQuestion = 0;
    var score;

    var question1;
    question1=
        (question = "",
        choiceA = "",
        choiceB = "",
        choiceC = "",
        choiceD = "",
        choice = corect1,
        numberOfQuestion= numberOfQuestion.concat(+1))
            if(question1 === corect1){
                corectAnswers = corectAnswers.concat(+1);
                console.log("question 1 corect.")
                // dispaly corect :) for short set amount of time
            }else {
                // display incorect for short set amount of time
                console.log("question 1 incorect.")
            }

    var question2;
    question2=
        (question = "",
        choiceA = "",
        choiceB = "",
        choiceC = "",
        choiceD = "",
        choice = corect2)
            if(question2 === corect2){
                corectAnswers = corectAnswers.concat(+1);
                console.log("question 2 corect.")
                // dispaly corect :) for short set amount of time
            }else {
                // display incorect for short set amount of time
                console.log("question 2 incorect.")
            }

    var question3;
    question3=
        (question = "",
        choiceA = "",
        choiceB = "",
        choiceC = "",
        choiceD = "",
        choice = corect3)
            if(question3 === corect3){
                corectAnswers = corectAnswers.concat(1);
                console.log("question 3 corect.")
                // dispaly corect :) for set amount of time
            }else {
                // display incorect for short set amount of time
                console.log("question 3 incorect.")
            }

    var question4;
    question4=
        (question = "",
        choiceA = "",
        choiceB = "",
        choiceC = "",
        choiceD = "",
        choice = corect4)
            if(question4 === corect4){
                corectAnswers = corectAnswers.concat(1);
                console.log("question 4 corect.");
                // dispaly corect :) for short set amount of time
            }else {
                // display incorect for short set amount of time
                console.log("question 4 incorect.");
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

generateBtn.addEventListener("click", runQuiz,);
