var start =document.querySelector("#start");
var reStart =document.querySelector("#reStart");
var timer =document.querySelector("#timer");
var questions =document.querySelector("#questions");
var answers = document.querySelector(".answers");
var scoreCard =document.querySelector("#scoreCard");
var quiz =document.querySelector("#quiz");
var scorelist=document.querySelector("#scoreList");
var getInitials=document.querySelector("#initialBox")

var score = 0;
var curentScore=0;

var araytoStoreScores=[];
var arayToStoreQuestions=
        [
            {
                question: "this is a question",
                choices: ["A. thing","B. other thing","C. other other thing","D. last thing"],
                correct: "B. other thing"
            },

            {
                question: "this is a question",
                choices: ["A. thing","B. other thing","C. other other thing","D. last thing"],
                correct: "B. other thing"
            },

            {
                question: "this is a question",
                choices: ["A. thing","B. other thing","C. other other thing","D. last thing"],
                correct: "B. other thing"
            },

            {
                question: "this is a question",
                choices: ["A. thing","B. other thing","C. other other thing","D. last thing"],
                correct: "B. other thing"
            },

            {
                question: "this is a question",
                choices: ["A. thing","B. other thing","C. other other thing","D. last thing"],
                correct: "B. other thing"
            },
        ]


var runTimer = document.querySelector("#timer"); 
var secondsLeft = 20
    
    
function setTime(){
    var timerInterval = setInterval(function() {
        runTimer.textContent = secondsLeft + " seconds left";
        secondsLeft--;
        
    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        runTimer.textContent= ("game over")
        enterScore();
    }
        
    }, 
    2000);
    }  

function runQuiz() {

    console.log("i am working"),
    setTime();
    askquestion();
};

var curentQuestion = 0

function askquestion(){

    clearQuestion();

    var question = arayToStoreQuestions[curentQuestion].question;
    var chosen = arayToStoreQuestions[curentQuestion].choices;

    displayQuistion();
    function displayQuistion(){ 

        var questionsOnPage = document.createElement("div");
        questionsOnPage.textContent = question,
        answers.append(questionsOnPage);

        arayToStoreQuestions[curentQuestion].choices.forEach(function(chosen){
        var answersOnPage = document.createElement("div");
        answersOnPage.textContent = chosen,
        answersOnPage.addEventListener("click", clickFunction);
        answers.append(answersOnPage);   
        });    
    
    }

}

clearQuestion();
function clearQuestion(){
    answers.innerHTML="";
}


function clickFunction(){  

    curentQuestion ++
    console.log(curentQuestion)

    if(curentQuestion < arayToStoreQuestions.length && this.textContent == araytoStoreScores[curentScore].correct){
        console.log("right");
        console.log(this.textContent);
        score =score + 1;
        console.log(score); 
        askquestion();
  
    }else if(curentQuestion == arayToStoreQuestions.length && this.textContent == araytoStoreScores[curentScore].correct) {
        console.log("right ... game over");
        console.log(this.textContent);
        score = score+ 1;
        console.log(score);
        secondsLeft = 0;
        enterScore(); 

    } else if(curentQuestion < arayToStoreQuestions.length && this.textContent !== araytoStoreScores[curentScore].correct){
        console.log("wrong");
        console.log(this.textContent);
        console.log(score);
        secondsLeft = secondsLeft - 5;
        askquestion ();
    
    }else if(curentQuestion == arayToStoreQuestions.length && this.textContent !== araytoStoreScores[curentScore].correct){
        console.log("wrong ... game over");
        console.log(this.textContent);
        console.log(score);
        secondsLeft = 0;
        enterScore();
    }
}

function enterScore(){

    clearQuestion();

    getScore();
    function getScore(){
        score = (score/arayToStoreQuestions.length)
        console.log((score* 10), " out of ", arayToStoreQuestions.length)
       
     dispalyScore();
    }

    getIinitials();
    function getIinitials(){
    }

    function dispalyScore(){
   
    }

}

function playagain(){
    runQuiz();
}

reStart.addEventListener("click", playagain,);
start.addEventListener("click", runQuiz,);

