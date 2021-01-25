var start =document.querySelector("#start");
var timer =document.querySelector("#timer");
var questions =document.querySelector("#questions");
var answers = document.querySelector(".answers");
var scoreCard =document.querySelector("#scoreCard");
var quiz =document.querySelector("#quiz")

var score = 0;

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


function runQuiz() {
    console.log("i am working"),
    askquestion();
};

var curentQuestion = 0

function askquestion(){

    var question = arayToStoreQuestions[curentQuestion].question;
    var chosen = arayToStoreQuestions[curentQuestion].choices;

    displayQuistion();
    function displayQuistion(){

        console.log(chosen);
    
        var questionsOnPage = document.createElement("div");
        questionsOnPage.textContent = question,
        questions.prepend(questionsOnPage);

        arayToStoreQuestions[curentQuestion].choices.forEach(function(chosen){
        var answersOnPage = document.createElement("div");
        answersOnPage.textContent = chosen,
        answersOnPage.addEventListener("click", clickFunction);
        answers.append(answersOnPage);   
        });

        // clearlast();
        // function clearlast(){
        // answersOnPage.textContent= "";
        // questionsOnPage.textContent= "";
        // displayQuistion();
        // }
    }

}


function clickFunction(){   
    curentQuestion ++
    if(curentQuestion < arayToStoreQuestions.length && this.textContent === arayToStoreQuestions[curentQuestion].correct){
        console.log("right");
        console.log(this.textContent);
        score =score + 1;
        console.log(score);  
        askquestion();
    }else if (curentQuestion === arayToStoreQuestions.length && this.textContent === arayToStoreQuestions[curentQuestion].correct){
        console.log("right ... game over");
        console.log(this.textContent);
        score = score+ 1;
        console.log(score);
        enterScore ();  
    }else if (curentQuestion < arayToStoreQuestions.length && this.textContent !== arayToStoreQuestions[curentQuestion].correct){
        console.log("wrong");
        console.log(this.textContent);
        console.log(score);
        askquestion ();
    }else if (curentQuestion === arayToStoreQuestions.length && this.textContent !== arayToStoreQuestions[curentQuestion].correct){
        console.log("wrong ... game over");
        console.log(this.textContent);
        console.log(score);
        enterScore ();
    }
}

function enterScore(){

    getScore();
    function getScore(){
        score = score/arayToStoreQuestions.length,
        console.log(score,+ "%")
    }

}

start.addEventListener("click", runQuiz,);

