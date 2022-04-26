var questions = JSON.parse(sessionStorage.getItem('questions'));
var currentQuestion = parseInt(sessionStorage.getItem('currentQuestion'));
var numberOfQuestions = parseInt(sessionStorage.getItem('numberOfQuestions'));

document.getElementById ("retourMenu").addEventListener ("click", returnMenu);

var txtNbrTotalRep = document.querySelector('#nbrTotalRep');
var txtPercentageTrue = document.querySelector('#percentageTrue');
var nbRepTotal=0;

var xImgTab = [];
var vImgTab = [];

var reponses;

var reponseTab = [false, false, false, false, false, false, false, false, false, false, false];
var answerTab = [false, false, false, false, false, false, false, false, false, false, false];

initvImg();
initxImg();
checkQuestions();

function checkQuestions() {
    for (let i = 0; i < numberOfQuestions; i++) {
        reponseTab = [false, false, false, false, false, false, false, false, false, false, false];
        answerTab = [false, false, false, false, false, false, false, false, false, false, false];
        reponses = JSON.parse(sessionStorage.getItem('selectedAnswers'+(i+1)));
        console.log(reponses);
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
            console.log("BONNE REPONSE !");
            vImgTab[i] = "../images/valider.png";
            nbRepTotal += 1;
        }else{
            console.log("MAUVAISE REPONSE...");
            vImgTab[i] = "../images/echec.png";
        }
        xImgTab[i].setAttribute("src", vImgTab[i]);
    }
}

function initxImg(){
    //var xImgTab = [];
    for(let i = 0; i < numberOfQuestions; i++){
        xImgTab[i] = document.getElementById("image"+(i+1));
    }
}

function initvImg(){
    //var vImgTab = [];
    for(let i = 0; i < numberOfQuestions; i++){
        vImgTab[i] = "../images/echec.png";
    }
}

// var xImg1 = document.getElementById("image1");
// var xImg2 = document.getElementById("image2");
// var xImg3 = document.getElementById("image3");

// var vImg1 = xImg1.getAttribute("src");
// var vImg2 = xImg2.getAttribute("src");
// var vImg3 = xImg3.getAttribute("src");



// var reponses = JSON.parse(sessionStorage.getItem('selectedAnswers1'));
// console.log("Question : ");
// console.log(questions[0]);
// console.log("Réponses choisies : ");
// console.log(reponses);
// console.log(typeof reponses);
// if (Object.values(reponses).includes("answer1")) {
//     reponseTab[0] = true;
// }
// if (Object.values(reponses).includes("answer2")) {
//     reponseTab[1] = true;
// }
// if (Object.values(reponses).includes("answer3")) {
//     reponseTab[2] = true;
// }
// if (Object.values(reponses).includes("answer4")) {
//     reponseTab[3] = true;
// }
// if (Object.values(reponses).includes("answer5")) {
//     reponseTab[4] = true;
// }
// if (Object.values(reponses).includes("answer6")) {
//     reponseTab[5] = true;
// }
// if (Object.values(reponses).includes("answer7")) {
//     reponseTab[6] = true;
// }
// if (Object.values(reponses).includes("answer8")) {
//     reponseTab[7] = true;
// }
// if (Object.values(reponses).includes("answer9")) {
//     reponseTab[8] = true;
// }
// if (Object.values(reponses).includes("answer10")) {
//     reponseTab[9] = true;
// }
// if (Object.values(reponses).includes("answer11")) {
//     reponseTab[10] = true;
// }

// answerTab[0] = questions[0].Valid1;
// answerTab[1] = questions[0].Valid2;
// answerTab[2] = questions[0].Valid3;
// answerTab[3] = questions[0].Valid4;
// answerTab[4] = questions[0].Valid5;
// answerTab[5] = questions[0].Valid6;
// answerTab[6] = questions[0].Valid7;
// answerTab[7] = questions[0].Valid8;
// answerTab[8] = questions[0].Valid9;
// answerTab[9] = questions[0].Valid10;
// answerTab[10] = questions[0].Valid11;

// console.log(reponseTab);
// console.log(answerTab);

// if(JSON.stringify(reponseTab)==JSON.stringify(answerTab)){
//     console.log("BONNE REPONSE !");
//     vImg1 = "../images/valider.png";
//     nbRepTotal += 1;
// }else{
//     console.log("MAUVAISE REPONSE...");
//     vImg1 = "../images/echec.png";
// }
// xImg1.setAttribute("src", vImg1);

// currentQuestion++;
// reponses = JSON.parse(sessionStorage.getItem('selectedAnswers2'));
// console.log("Question : ");
// console.log(questions[currentQuestion-1]);
// console.log("Réponses choisies : " + reponses);


// currentQuestion = currentQuestion + 1;
// reponses = JSON.parse(sessionStorage.getItem('selectedAnswers3'));
// console.log("Question : ");
// console.log(questions[currentQuestion-1]);
// console.log("Réponses choisies : " + reponses);


/////// éric

// document.getElementById ("retourMenu").addEventListener ("click", returnMenu);

// var txtNbrTotalRep = document.querySelector('#nbrTotalRep');
// const bnRep="Bonne réponse";
// //var xImg1 = document.getElementById("image1");
// var xImg2 = document.getElementById("image2");
// var xImg3 = document.getElementById("image3");

// var vImg1 = xImg1.getAttribute("src");
// var vImg2 = xImg2.getAttribute("src");
// var vImg3 = xImg3.getAttribute("src");

// var session1= sessionStorage.getItem("resultat1");
// var session2= sessionStorage.getItem("resultat2");
// var session3= sessionStorage.getItem("resultat3");
// var nbRep1=0;
// var nbRep2=0;
// var nbRep3=0;
// //var nbRepTotal=0;

// if(session1 == bnRep){
// vImg1 = "../images/valider.png";
// }else
// vImg1 = "../images/echec.png";
// xImg1.setAttribute("src", vImg1);

// if(session2 == bnRep){
// vImg2 = "../images/valider.png";
// }else
// vImg2 = "../images/echec.png";
// xImg2.setAttribute("src", vImg2);

// if(session3 == bnRep){
// vImg3 = "../images/valider.png";
// }else
// vImg3 = "../images/echec.png";
// xImg3.setAttribute("src", vImg3);
// session1 == bnRep ? nbRep1=1: nbRep1=0;

// session2 == bnRep ? nbRep2=1: nbRep2=0;

// session3 == bnRep ? nbRep3=1: nbRep3=0;

// nbRepTotal=nbRep1 + nbRep2 +nbRep3;
console.log(nbRepTotal)
txtNbrTotalRep.textContent= "Nombre de réponses correctes : " + nbRepTotal + "/" + numberOfQuestions;
var percentage = nbRepTotal * 100 / numberOfQuestions ;
percentage = Math.round(percentage * 10) / 10
txtPercentageTrue.textContent = "Pourcentage de bonne réponses : " + percentage + "%";

function returnMenu() {
    window.location.href= 'choix_categories.html';
}