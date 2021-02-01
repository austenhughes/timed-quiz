var start =document.querySelector("#start");
var reStart =document.querySelector("#reStart");
var timer =document.querySelector("#timer");
var questions =document.querySelector("#questions");
var answers = document.querySelector(".answers");
var scoreCard =document.querySelector("#scoreCard");
var scorelist =document.querySelector("#scoreList");
var quiz =document.querySelector("#quiz");
var getInitials=document.querySelector("#initialBox");
var enterInitials=document.querySelector("#enter-intitals");


scoreCard.style.visibility = "hidden";
reStart.style.visibility = "hidden";

var score = 0;
var curentScore=0;

var araytoStoreScores=[];
var arayToStoreQuestions=
        [
            {
                question: "what is the corect place to insert the javascript?",
                choices: ["A. the <head> ","B. the <body> ","C. the <script> ","D. anywhere"],
                correct: "C. the <script> "
            },

            {
                question: "who invented javascript?",
                choices: ["A. the internet","B. a monkey ","C. Bendan Eich ","D. A guy named Vlad"],
                correct: "C. Bendan Eich "
            },

            {
                question: "when was javascript created?",
                choices: ["A. 2045","B. 1810","C. 1995 ","D. 1980"],
                correct: "C. 1995 "
            },

            {
                question: "how do you set a varible with javascript",
                choices: ["A. var ","B. you cant ","C. everything is a vairble ","D. you ask it nicely"],
                correct: "A. var "
            },

            {
                question: "where do you link your script page?",
                choices: ["A. on the javascript page ","B. on your style sheet ","C. in your html ","D. you dont need to "],
                correct: "C. in your html "
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

var curentQuestion = 0

function runQuiz() {

    start.style.visibility = "hidden";

    console.log("i am working"),
    setTime();
    askquestion();
};

function askquestion(){

    clearQuestion();


    displayQuistion();
    function displayQuistion(){ 

        if (curentQuestion == arayToStoreQuestions.length){
            secondsLeft = 0
            enterScore
        }else{
        
        var question = arayToStoreQuestions[curentQuestion].question;
        console.log(question)
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

}

clearQuestion();
function clearQuestion(){
    answers.innerHTML="";
}


function clickFunction(){  

    console.log(curentQuestion)
    var corectAnswer = (arayToStoreQuestions[curentQuestion]).correct;
    console.log(corectAnswer);

    if(this.textContent == corectAnswer){
        console.log("right");
        console.log(this.textContent);
        score =score + 1;
        console.log(score);
        curentQuestion ++ 
        askquestion();

    } else if(this.textContent !== corectAnswer) {
        console.log("wrong");
        console.log(this.textContent);
        console.log(score);
        secondsLeft = secondsLeft - 5;
        curentQuestion ++
        askquestion ();
    }

}

function enterScore(){

    clearQuestion();

    getScore();
    function getScore(){
        console.log(score , " out of ", arayToStoreQuestions.length);
        
        dispalyScore();
        function dispalyScore(){
            reStart.style.visibility = "visible";
            scoreCard.style.visibility = "visible";
            getInitials.style.visibility = "visible";
            enterInitials.style.visibility = "visible";
        }

        function addInitials(){
            var textarea = document.querySelector("#initialBox").value;
            var getInitials = document.createElement("div");
            getInitials.textContent = textarea,
            scorelist.append(textarea, " : ", score , " out of ", arayToStoreQuestions.length);
            hidebox();
        }

        function hidebox(){
        getInitials.style.visibility = "hidden";
        enterInitials.style.visibility = "hidden";
        }
    

        enterInitials.addEventListener("click", addInitials,);

    }

}

function playagain(){
    secondsLeft = 20
    getInitials.value="";
    curentQuestion = 0
    score = 0
    scoreCard.style.visibility = "hidden";
    reStart.style.visibility = "hidden";
    getInitials.style.visibility = "hidden";
    runQuiz();
}

reStart.addEventListener("click", playagain,);
start.addEventListener("click", runQuiz,);

