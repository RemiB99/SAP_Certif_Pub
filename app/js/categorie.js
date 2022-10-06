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
        temps = 10;
    //    temps = 1;
    }
    sessionStorage.setItem("tempsTimer", temps);
    sessionStorage.setItem("secondTimer", 1);
    return strNumberOfQuestions;
}
function getQuestions(numberOfQuestions){
    fetch(URLQuestions)
    .then(response => response.json())
    .then((data) =>{
        console.log(data.value);
        var questions = [];
        var shuffled = data.value.sort(() => 0.5 - Math.random());
        for (var i = 0; i < numberOfQuestions; i++) {
            var question = shuffled[i];
            var nbProp = 11;

            if(question.Answer1 == "NULL"){
                question.Valid1 = false;
                nbProp--;
            }
            if(question.Answer2 == "NULL"){
                question.Valid2 = false;
                nbProp--;
            }
            if(question.Answer3 == "NULL"){
                question.Valid3 = false;
                nbProp--;
            }
            if(question.Answer4 == "NULL"){
                question.Valid4 = false;
                nbProp--;
            }
            if(question.Answer5 == "NULL"){
                question.Valid5 = false;
                nbProp--;
            }
            if(question.Answer6 == "NULL"){
                question.Valid6 = false;
                nbProp--;
            }
            if(question.Answer7 == "NULL"){
                question.Valid7 = false;
                nbProp--;
            }
            if(question.Answer8 == "NULL"){
                question.Valid8 = false;
                nbProp--;
            }
            if(question.Answer9 == "NULL"){
                question.Valid9 = false;
                nbProp--;
            }
            if(question.Answer10 == "NULL"){
                question.Valid10 = false;
                nbProp--;
            }
            if(question.Answer11 == "NULL"){
                question.Valid11 = false;
                nbProp--;
            }
            //ADDED ON 30/09/2022
            var contents=new Array();
            contents[0]= question.Answer1;
            contents[1]= question.Answer2;
            contents[2]= question.Answer3;
            contents[3]= question.Answer4;
            contents[4]= question.Answer5;
            contents[5]= question.Answer6;
            contents[6]= question.Answer7;
            contents[7]= question.Answer8;
            contents[8]= question.Answer9;
            contents[9]= question.Answer10;
            contents[10]= question.Answer11;

            var contents2=new Array();
            contents2[0]= question.Valid1;
            contents2[1]= question.Valid2;
            contents2[2]= question.Valid3;
            contents2[3]= question.Valid4;
            contents2[4]= question.Valid5;
            contents2[5]= question.Valid6;
            contents2[6]= question.Valid7;
            contents2[7]= question.Valid8;
            contents2[8]= question.Valid9;
            contents2[9]= question.Valid10;
            contents2[10]= question.Valid11;

            var j=0;
            //variable used to contain controlled random number 
            var random;
            var random2;
            var temp;
            var temp2;
            //while all of array elements haven't been cycled thru
            while (j<nbProp-1){
                //generate random num between 0 and arraylength-1
                random=Math.floor(Math.random()*(nbProp-1));
                random2=Math.floor(Math.random()*(nbProp-1));

                temp = contents[random];
                contents[random] = contents[random2];
                contents[random2] = temp;
               
                temp2 = contents2[random];
                contents2[random] = contents2[random2];
                contents2[random2] = temp2;

                j++;
            }
            question.Answer1 = contents[0];
            question.Answer2 = contents[1];
            question.Answer3 = contents[2];
            question.Answer4 = contents[3];
            question.Answer5 = contents[4];
            question.Answer6 = contents[5];
            question.Answer7 = contents[6];
            question.Answer8 = contents[7];
            question.Answer9 = contents[8];
            question.Answer10 = contents[9];
            question.Answer11 = contents[10];

            question.Valid1 = contents2[0]
            question.Valid2 = contents2[1]
            question.Valid3 = contents2[2]
            question.Valid4 = contents2[3]
            question.Valid5 = contents2[4]
            question.Valid6 = contents2[5]
            question.Valid7 = contents2[6]
            question.Valid8 = contents2[7]
            question.Valid9 = contents2[8]
            question.Valid10 = contents2[9]
            question.Valid11 = contents2[10]       
            // //END ADDED ON 30/09/2022


            questions.push(question);
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
    alert("Vous allez lancer un questionnaire de " + strNumberOfQuestions + " questions.");
    window.location.href= 'questionnaire.html';
}

function startTimer(){
    var strNumberOfQuestions = handleClick();
    alert("Vous allez lancer un questionnaire de " + strNumberOfQuestions + " questions.");
    window.location.href= 'timer.html';
}