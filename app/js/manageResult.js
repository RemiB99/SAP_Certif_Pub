var questions = JSON.parse(sessionStorage.getItem('questions'));
var currentQuestion = parseInt(sessionStorage.getItem('currentQuestion'));
var numberOfQuestions = parseInt(sessionStorage.getItem('numberOfQuestions'));

var URLStatistiques = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Statistiques';

document.getElementById ("retourMenu").addEventListener ("click", returnMenu);

var txtNbrTotalRep = document.querySelector('#nbrTotalRep');
var txtPercentageTrue = document.querySelector('#percentageTrue');
var nbRepTotal=0;

var xImgTab = [];
var vImgTab = [];

var reponses;

var reponseTab = [false, false, false, false, false, false, false, false, false, false, false];
var answerTab = [false, false, false, false, false, false, false, false, false, false, false];

// infos pour les statistiques
var statUSER = sessionStorage.getItem("utilisateur");
var statDATE = new Date();
var statTYPEQUESTIONNAIRE = sessionStorage.getItem("selectedCategory");
var statNBQ = parseInt(sessionStorage.getItem('numberOfQuestions'));
var statNBJUSTE;
var statPOURCENTAGE;
var statLEARNINGMODE = sessionStorage.getItem("LearningMode");
var statREPALEA = sessionStorage.getItem("RandomAnswers");
var statQUALEA = sessionStorage.getItem("RandomQuestions");
var statBASEID = sessionStorage.getItem("startID");

var day = statDATE.getDate();
var month = statDATE.getMonth() + 1;
var year = statDATE.getFullYear();
statDATE = `${year}-${month}-${day}`;

initvImg();
initxImg();
checkQuestions();
getStats();
postStat();

function checkQuestions() {
    for (let i = 0; i < numberOfQuestions; i++) {
        reponseTab = [false, false, false, false, false, false, false, false, false, false, false];
        answerTab = [false, false, false, false, false, false, false, false, false, false, false];
        reponses = JSON.parse(sessionStorage.getItem('selectedAnswers'+(i+1)));
        if(reponses != null){

            if (Object.values(reponses).includes("answer1")) {
                reponseTab[0] = true;
            }
            if (Object.values(reponses).includes("answer2")) {
                reponseTab[1] = true;
            }
            if (Object.values(reponses).includes("answer3")) {
                reponseTab[2] = true;
            }
            if (Object.values(reponses).includes("answer4")) {
                reponseTab[3] = true;
            }
            if (Object.values(reponses).includes("answer5")) {
                reponseTab[4] = true;
            }
            if (Object.values(reponses).includes("answer6")) {
                reponseTab[5] = true;
            }
            if (Object.values(reponses).includes("answer7")) {
                reponseTab[6] = true;
            }
            if (Object.values(reponses).includes("answer8")) {
                reponseTab[7] = true;
            }
            if (Object.values(reponses).includes("answer9")) {
                reponseTab[8] = true;
            }
            if (Object.values(reponses).includes("answer10")) {
                reponseTab[9] = true;
            }
            if (Object.values(reponses).includes("answer11")) {
                reponseTab[10] = true;
            }
        }

        answerTab[0] = questions[i].Valid1;
        answerTab[1] = questions[i].Valid2;
        answerTab[2] = questions[i].Valid3;
        answerTab[3] = questions[i].Valid4;
        answerTab[4] = questions[i].Valid5;
        answerTab[5] = questions[i].Valid6;
        answerTab[6] = questions[i].Valid7;
        answerTab[7] = questions[i].Valid8;
        answerTab[8] = questions[i].Valid9;
        answerTab[9] = questions[i].Valid10;
        answerTab[10] = questions[i].Valid11;

        if(JSON.stringify(reponseTab)==JSON.stringify(answerTab)){
            vImgTab[i] = "../images/valider.png";
            nbRepTotal += 1;
        }else{
            vImgTab[i] = "../images/echec.png";
        }
        xImgTab[i].setAttribute("src", vImgTab[i]);
    }
}

function initxImg(){
    for(let i = 0; i < numberOfQuestions; i++){
        xImgTab[i] = document.getElementById("image"+(i+1));
    }
}

function initvImg(){
    for(let i = 0; i < numberOfQuestions; i++){
        vImgTab[i] = "../images/echec.png";
    }
}

function getCorrection(){
    confirm("TEST CORRECTION !!!");
}

function getStats(){
    console.log(nbRepTotal)
    statNBJUSTE = nbRepTotal;
    txtNbrTotalRep.textContent= "Nombre de réponses correctes : " + nbRepTotal + "/" + numberOfQuestions;
    var percentage = nbRepTotal * 100 / numberOfQuestions ;
    percentage = Math.round(percentage * 10) / 10
    txtPercentageTrue.textContent = "Pourcentage de bonne réponses : " + percentage + "%";
    statPOURCENTAGE = percentage;
}

function returnMenu() {
    window.location.href= 'choixCategorie.html';
}

function postStat(){
    console.log("Utilisateur : "            + statUSER);
    console.log("Date : "                   + statDATE);
    console.log("Type Questionnaire : "     + statTYPEQUESTIONNAIRE);
    console.log("Nombre Questions : "       + statNBQ);
    console.log("Bonnes Réponses : "        + statNBJUSTE);
    console.log("Pourcentage : "            + statPOURCENTAGE);

    console.log("Learning Mode : "          + statLEARNINGMODE);
    console.log("Réponses Aléatoires : "    + statREPALEA);
    console.log("Questions Aléatoires : "   + statQUALEA);
    console.log("Base ID : "                + statBASEID);

    const data = {
        user : statUSER,
        typeQuestionnaire : statTYPEQUESTIONNAIRE,
        date : statDATE,
        nbQ : statNBQ,
        nbJuste : statNBJUSTE,
        pourcentage : statPOURCENTAGE,
        learningMode : statLEARNINGMODE,
        responsesAlea : statREPALEA,
        questionsAlea : statQUALEA,
        baseID : statBASEID
    }

    fetch(URLStatistiques, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
}