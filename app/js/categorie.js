// A changer - identifiant différent pour chaque devSpace
var URLQuestions = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Questions';

function handleClick() {
    var numberOfQuestions = document.getElementById("questionsSelection");
    var strNumberOfQuestions = numberOfQuestions.value;
    sessionStorage.setItem("numberOfQuestions",strNumberOfQuestions);

    var temps;
    if (strNumberOfQuestions == "40"){
        temps = 90;
    }
    else if (strNumberOfQuestions == "80") {
        temps = 180; 
    }
    else{
        temps = 1;
    }
    sessionStorage.setItem("tempsTimer", temps);
    sessionStorage.setItem("secondTimer", 1);
    return strNumberOfQuestions;
}
function getQuestions(numberOfQuestions){
    fetch(URLQuestions)
    .then(response => response.json())
    .then((data) =>{
        var questions = [];
        var shuffled = data.value.sort(() => 0.5 - Math.random());
        for (var i = 0; i < numberOfQuestions; i++) {
            var question = shuffled[i];
            //console.log(question);
            //setTimeout(() => {  console.log("SLEEP"); }, 15000);

            if(question.Answer1 == "NULL"){
                question.Valid1 = false;
            }
            if(question.Answer2 == "NULL"){
                question.Valid2 = false;
            }
            if(question.Answer3 == "NULL"){
                question.Valid3 = false;
            }
            if(question.Answer4 == "NULL"){
                question.Valid4 = false;
            }
            if(question.Answer5 == "NULL"){
                question.Valid5 = false;
            }
            if(question.Answer6 == "NULL"){
                question.Valid6 = false;
            }
            if(question.Answer7 == "NULL"){
                question.Valid7 = false;
            }
            if(question.Answer8 == "NULL"){
                question.Valid8 = false;
            }
            if(question.Answer9 == "NULL"){
                question.Valid9 = false;
            }
            if(question.Answer10 == "NULL"){
                question.Valid10 = false;
            }
            if(question.Answer11 == "NULL"){
                question.Valid11 = false;
            }
            questions.push(question);
            console.log(questions);
        }
        sessionStorage.setItem("questions", JSON.stringify(questions));
        setTimeout(() => { console.log("waiting for questions loading"); }, 3000);
    })
}

function startQuestionnaire(){
    var strNumberOfQuestions = handleClick();
    getQuestions(parseInt(strNumberOfQuestions));
    for(let i = 0; i < 81; i++){
        sessionStorage.removeItem("selectedAnswers"+(i+1));
    }
    sessionStorage.setItem("currentQuestion", "1");
    //setTimeout(() => {  console.log("SLEEP"); }, 15000);
    alert("Vous allez lancer un questionnaire de " + strNumberOfQuestions + " questions.");
    window.location.href= 'questionnaire.html';
}

function startTimer(){
    var strNumberOfQuestions = handleClick();
    alert("Vous allez lancer un questionnaire de " + strNumberOfQuestions + " questions.");
    window.location.href= 'timer.html';
}