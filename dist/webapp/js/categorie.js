// A changer - identifiant différent pour chaque devSpace
var URLQuestions = '/odata-api/sap/Questions';

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
        temps = 5;
    }
    sessionStorage.setItem("tempsTimer", temps);
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
            questions.push(question);
        }
        sessionStorage.setItem("questions", JSON.stringify(questions));
        setTimeout(() => { console.log("waiting for questions loading"); }, 3000);
    })
}

function startQuestionnaire(){
    var strNumberOfQuestions = handleClick();
    getQuestions(parseInt(strNumberOfQuestions));
    sessionStorage.setItem("currentQuestion", "1");
    alert("Vous allez lancer un questionnaire de " + strNumberOfQuestions + " questions.");
    window.location.href= 'questionnaire.html';
}

function startTimer(){
    var strNumberOfQuestions = handleClick();
    alert("Vous allez lancer un questionnaire de " + strNumberOfQuestions + " questions.");
    window.location.href= 'timer.html';
}