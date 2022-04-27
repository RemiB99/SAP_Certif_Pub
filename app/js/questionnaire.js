// session variables
var numberOfQuestions = parseInt(sessionStorage.getItem('numberOfQuestions'));
var currentQuestion = parseInt(sessionStorage.getItem('currentQuestion'));
var questions = JSON.parse(sessionStorage.getItem('questions'));
console.log(questions[currentQuestion-1]);
//var numberOfAnswer = JSON.parse(sessionStorage.getItem())
function fillHTML() {

    //SideNav Infos
    var sidenav= document.getElementById('mySidenav');
    for (let i = 1; i <= numberOfQuestions; i++) {
        if (i==currentQuestion) {
            sidenav.innerHTML += "<a href='' class='currentQuestion' id=side" + i + ">Question " + i + "</a>";
        }
        else {
            sidenav.innerHTML += "<a href='' id=side" + i + ">Question " + i + "</a>";
        }
        }

    //numberOfQuestion
    var numberOfQuestionDiv= document.getElementById('numberOfQuestion');
    numberOfQuestionDiv.textContent = currentQuestion + '/' + numberOfQuestions;
    
    //Question
    var questionDiv = document.getElementById('question');
    questionDiv.textContent = questions[currentQuestion-1].description;

    //numberOfAnswers
    var numberOfAnswersDiv = document.getElementById('nbRep');
    numberOfAnswersDiv.textContent = "Number of answers : " + questions[currentQuestion-1].nbAns;

    //answerPart
    for (let i = 1; i <= 11; i++) {
        var answerDiv = document.getElementById('answer'+i);
        var currentAnswer = questions[currentQuestion-1]['Answer'+i];

        console.log("Current Answer : " + currentAnswer);
        if (currentAnswer != "NULL"){
            answerDiv.className = "answerInactive";
            answerDiv.textContent = questions[currentQuestion-1]['Answer'+i];
        }
    }

    var nextQuestion = document.getElementById('nextQuestion');
    if (currentQuestion === numberOfQuestions) {
        nextQuestion.textContent = 'Terminer le test';
    }
}

function handleClick(divID) {
    var element = document.getElementById(divID);
    if (element.className ==  "answerActive") {
        element.className =  "answerInactive";
    }
    else {
        element.className =  "answerActive";
    }
    
}

function submitAnswers() {
    var validatedDivs = document.getElementsByClassName("answerActive");
    var selectedAnswers = [];
    for(var i=0; i<validatedDivs.length; i++) {
        selectedAnswers[i] = validatedDivs[i].id;
    }
    sessionStorage.setItem("selectedAnswers"+currentQuestion, JSON.stringify(selectedAnswers));
    if (currentQuestion != numberOfQuestions) {
        var nextQuestion = currentQuestion+1;
    sessionStorage.setItem("currentQuestion", nextQuestion.toString());
    location.reload();
    }
    else {
        // Affichage des résultats
        if (confirm("Voulez-vous vraiment terminer le test avant la fin du temps imparti ?")){

            window.location.href= 'resultatsQuestionnaire.html';
        }
    }
    
}