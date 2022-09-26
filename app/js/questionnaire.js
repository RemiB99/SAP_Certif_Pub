// session variables
var numberOfQuestions = parseInt(sessionStorage.getItem('numberOfQuestions'));
var currentQuestion = parseInt(sessionStorage.getItem('currentQuestion'));
var questions = JSON.parse(sessionStorage.getItem('questions'));
console.log(questions[currentQuestion-1]);

function fillHTML() {

    //SideNav Infos
    var sidenav= document.getElementById('mySidenav');
    var arr = [];
    var numberOfQuestions = parseInt(sessionStorage.getItem('numberOfQuestions'));

    for(let i = 1; i < numberOfQuestions+1; i++){
        arr.push("Question " + i);
    }

    // begin added
        var ul = document.createElement('ul');
        ul.setAttribute('class', 'list-group');
        ul.setAttribute('style', 'width: 100%;');

        for (i = 0; i <= arr.length - 1; i++) {
            var li = document.createElement('li');
            if (i==currentQuestion-1) {
                li.setAttribute('class', 'currentQuestion');
                li.setAttribute('id', i);
                li.setAttribute('onClick', 'switchQuestion(this.id)');
//                li.addEventListener("click", switchQuestion);
                var p = document.createElement('p');
                p.innerHTML = arr[i];
                li.appendChild(p);
                ul.appendChild(li);
            }
            else {
                li.setAttribute('id', i);
                li.setAttribute('onClick', 'switchQuestion(this.id)');
//                li.addEventListener("click", switchQuestion);
                var p = document.createElement('p');
                p.innerHTML = arr[i];
                li.appendChild(p);
                ul.appendChild(li);
            }
        }
        sidenav.appendChild(ul);
    // end added

    // boucle a décommenter si marche pas
    // for (let i = 1; i <= numberOfQuestions; i++) {
    //     if (i==currentQuestion) {
    //         sidenav.innerHTML += "<a href='' class='currentQuestion' id=side" + i + ">Question " + i + "</a>";
    //     }
    //     else {
    //         sidenav.innerHTML += "<a href='' id=side" + i + " onClick='switchQuestion()'>Question " + i + " </a>";
    //     }
    //     }

    //numberOfQuestion
    var numberOfQuestionDiv= document.getElementById('numberOfQuestion');
    numberOfQuestionDiv.textContent = currentQuestion + '/' + numberOfQuestions;
    
    //Question
    var questionDiv = document.getElementById('question');
    questionDiv.textContent = questions[currentQuestion-1].description;

    //numberOfAnswers
    var numberOfAnswersDiv = document.getElementById('nbRep');
    numberOfAnswersDiv.textContent = "Number of answers : " + questions[currentQuestion-1].nbAns;


    var selectedAnswers = sessionStorage.getItem('selectedAnswers'+currentQuestion);
    //answerPart
    for (let i = 1; i <= 11; i++) {
        var answerDiv = document.getElementById('answer'+i);
        var currentAnswer = questions[currentQuestion-1]['Answer'+i];
        
        if (currentAnswer != "NULL"){
            answerDiv.className = "answerInactive";
            answerDiv.textContent = questions[currentQuestion-1]['Answer'+i];
            if(selectedAnswers != null){
                if(selectedAnswers.includes("answer"+i)){
                    document.getElementById("answer"+i).classList.remove('answerInactive');
                    document.getElementById("answer"+i).classList.add('answerActive');
                }
            }
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
//console.log("selectedAnswers"+currentQuestion);
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

function switchQuestion(id){
    var selectedAnswers = sessionStorage.getItem('selectedAnswers'+parseInt(id+1));
    var varID = parseInt(id)+1;
    sessionStorage.setItem("currentQuestion", varID.toString());
    location.reload();
}