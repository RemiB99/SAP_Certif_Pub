//import { exists } from "fs";

// A changer - identifiant différent pour chaque devSpace
var URLQuestions = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Questions';
var tailleTabQuestions;

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
        var needShuffle = JSON.parse(sessionStorage.getItem("RandomQuestions"));
        var questionsCategorie = [];
        var category = sessionStorage.getItem('selectedCategory');
        var noRandomStartID = 1;
        var shuffled;
        if(needShuffle == "true"){
            shuffled = data.value.sort(() => 0.5 - Math.random());
            noRandomStartID = 1;
        }else{
            shuffled = data.value;
            noRandomStartID = parseInt(sessionStorage.getItem("startID"));
            console.log("noRandomStartID : " + noRandomStartID);
        }
        console.log('category : ' + category);
        console.log('length' + shuffled.length);
        for (var i = 0; i < shuffled.length; i++){
            var questionCategorie = shuffled[i];
            if(shuffled[i].type != category){
//                console.log(shuffled[i].type);
//                shuffled.splice(i, 1);
            }else{
//                console.log("Bonne catégorie : " + shuffled[i]);
                questionsCategorie.push(questionCategorie);
            }
        }
//        console.log(shuffled);
        tailleTabQuestions = questionsCategorie.length;
        console.log(questionsCategorie);
        //noRandomStartID--;
        //for (var i = 0; i < numberOfQuestions; i++) {
        for (var i = noRandomStartID-1; i < (numberOfQuestions + noRandomStartID-1); i++) {
//            var question = shuffled[i];
            var question = questionsCategorie[i];
            console.log(question);
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

            var randomOrder = JSON.parse(sessionStorage.getItem("RandomAnswers")); 
            //console.log(randomOrder);
            if(randomOrder == "true"){
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
    var learningMode = document.getElementById("learnMode");
    var randomAnswers = document.getElementById("randomAnswers");
    var randomQuestions = document.getElementById("randomQuestions");
    var startID = document.getElementById("startID");
    var strNumberOfQuestions = handleClick();

    //setTimeout(() => { console.log("test"); }, 3000);

    if(learningMode.checked == true){
        sessionStorage.setItem("LearningMode", JSON.stringify("true"));
        console.log(learningMode.checked);
    }else{
        sessionStorage.setItem("LearningMode", JSON.stringify("false"));
        console.log(learningMode.checked);
    }

    if(randomAnswers.checked == true){
        sessionStorage.setItem("RandomAnswers", JSON.stringify("true"));
        console.log(randomAnswers.checked);
    }else{
        sessionStorage.setItem("RandomAnswers", JSON.stringify("false"));
        console.log(randomAnswers.checked);
    }

    if(randomQuestions.checked == true){
        sessionStorage.setItem("RandomQuestions", JSON.stringify("true"));
        console.log(randomQuestions.checked);
    }else{
        sessionStorage.setItem("RandomQuestions", JSON.stringify("false"));
        console.log(randomQuestions.checked);
    }

    sessionStorage.setItem("startID", startID.value);

    getQuestions(parseInt(strNumberOfQuestions));
    for(let i = 0; i < 81; i++){
        sessionStorage.removeItem("selectedAnswers"+(i+1));
    }
    //setTimeout(3000);
    console.log("nb questions choisies" + parseInt(strNumberOfQuestions));
    console.log("nb questions dans base" + tailleTabQuestions);
    setTimeout(() => { delayCheck(strNumberOfQuestions); }, 3000);
    // if(parseInt(strNumberOfQuestions) < tailleTabQuestions){
    //     sessionStorage.setItem("currentQuestion", "1");
    //     alert("Vous allez lancer un questionnaire de " + strNumberOfQuestions + " questions.");
    //     window.location.href= 'questionnaire.html';
    // }else{
    //     alert("Nombre de questions dans la base insuffisant, veuillez sélectionner un autre mode");
    // }
}

function delayCheck(strNumberOfQuestions){
    if(parseInt(strNumberOfQuestions) < tailleTabQuestions){
        sessionStorage.setItem("currentQuestion", "1");
        alert("Vous allez lancer un questionnaire de " + strNumberOfQuestions + " questions.");
        window.location.href= 'questionnaire.html';
    }else{
        alert("Nombre de questions dans la base insuffisant, veuillez sélectionner un autre mode");
    }
}

function startTimer(){
    var strNumberOfQuestions = handleClick();
    alert("Vous allez lancer un questionnaire de " + strNumberOfQuestions + " questions.");
    window.location.href= 'timer.html';
}

function testRedirect(){
    fetch(URLQuestions)
    .then(response => response.json())
    .then((data) =>{
//        console.log(data.value);
        var types = [];
        var allData;
        allData = data.value;
        
//    window.location.href= 'categorie2.html';
        for (var i = 0; i < allData.length; i++) {
            var current;
            current = allData[i];
            if (types.indexOf(current.type) >= 0){
            }else{
                types.push(current.type);
            }
        }
        sessionStorage.setItem("categories", JSON.stringify(types));
        window.location.href= 'categorie2.html';
    })
}

function fillHTML(){
    var title_element = document.getElementById('title_quizz');
    var quizz = sessionStorage.getItem('selectedCategory');
    var title = 'Test : ' + quizz;
    title_element.innerHTML = title;
}