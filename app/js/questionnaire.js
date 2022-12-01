// session variables
var numberOfQuestions = parseInt(sessionStorage.getItem('numberOfQuestions'));
var currentQuestion = parseInt(sessionStorage.getItem('currentQuestion'));
var questions = JSON.parse(sessionStorage.getItem('questions'));

//console.log(questions[currentQuestion]);

function fillHTML() {
    console.log(questions);
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
    // //ADDED ON 30/09/2022
    // var contents=new Array()
    // contents[0]= "TEST 1"
    // contents[1]= "TEST 2"
    // contents[2]= "TEST 3"
    // contents[3]= "TEST 4"
    // contents[4]= "TEST 5"
    // contents[5]= "TEST 6"
    // contents[6]= "TEST 7"
    // contents[7]= "TEST 8"
    // contents[8]= "TEST 9"
    // contents[9]= "TEST 10"
    // contents[10]= "TEST 11"

    // var i=0
    // //variable used to contain controlled random number 
    // var random
    // var random2
    // var temp
    // var spacing="<br>"
    // //while all of array elements haven't been cycled thru
    // while (i<contents.length){
    //     //generate random num between 0 and arraylength-1
    //     random=Math.floor(Math.random()*contents.length)
    //     random2=Math.floor(Math.random()*contents.length)
    //     //if element hasn't been marked as "selected"
    //     temp = contents[random]
    //     contents[random] = contents[random2]
    //     contents[random2] = temp
    //     i++
    //     // if (contents[random]!="selected"){
    //     //     //document.write(contents[random]+spacing)
    //     //     //mark element as selected
    //     //     contents[random]=random
    //     //     i++
    //     // }
    // }
    // console.log(contents);
    // //END ADDED ON 30/09/2022

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

    // var cards = $(".random");
    // //var cards = document.getElementsByClassName("random");
    // for(var i = 0; i < cards.length; i++){
    //     var target = Math.floor(Math.random() * cards.length -1) + 1;
    //     var target2 = Math.floor(Math.random() * cards.length -1) +1;
    //     cards.eq(target).before(cards.eq(target2));
//}
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


//    alert("Selected answers : " + selec);
    var reponseTab = [false, false, false, false, false, false, false, false, false, false, false];
    var answerTab = [false, false, false, false, false, false, false, false, false, false, false];
    
    checkQuestion();


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

function checkQuestion() {
        var learnMode = JSON.parse(sessionStorage.getItem("LearningMode"));
        reponseTab = [false, false, false, false, false, false, false, false, false, false, false];
        answerTab = [false, false, false, false, false, false, false, false, false, false, false];
        var currentQuestion = parseInt(sessionStorage.getItem('currentQuestion'));
        reponses = JSON.parse(sessionStorage.getItem('selectedAnswers'+(currentQuestion)));

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

        answerTab[0] = questions[currentQuestion-1].Valid1;
        answerTab[1] = questions[currentQuestion-1].Valid2;
        answerTab[2] = questions[currentQuestion-1].Valid3;
        answerTab[3] = questions[currentQuestion-1].Valid4;
        answerTab[4] = questions[currentQuestion-1].Valid5;
        answerTab[5] = questions[currentQuestion-1].Valid6;
        answerTab[6] = questions[currentQuestion-1].Valid7;
        answerTab[7] = questions[currentQuestion-1].Valid8;
        answerTab[8] = questions[currentQuestion-1].Valid9;
        answerTab[9] = questions[currentQuestion-1].Valid10;
        answerTab[10] = questions[currentQuestion-1].Valid11;
       
        if(learnMode == "true"){

            console.log("Réponses Données: " + reponseTab);
            console.log("Bonnes réponses : " + answerTab);

            setColor();
                if(reponseTab[0] == answerTab[0] && 
                    reponseTab[1] == answerTab[1] && 
                    reponseTab[2] == answerTab[2] && 
                    reponseTab[3] == answerTab[3] && 
                    reponseTab[4] == answerTab[4] && 
                    reponseTab[5] == answerTab[5] && 
                    reponseTab[6] == answerTab[6] && 
                    reponseTab[7] == answerTab[7] && 
                    reponseTab[8] == answerTab[8] && 
                    reponseTab[9] == answerTab[9] && 
                    reponseTab[10] == answerTab[10]){
                    //alert("Bonne réponse !");
                    setTimeout(function(){ alert("Bonne réponse !"); }, 10);
                    // setTimeout(3000);
                }else{
                    console.log(reponseTab);
                    console.log(answerTab);
                    let alrt = "Mauvaise Réponse...\nVous avez sélectionné : ";
                    let alrt2 = "Les réponses étaient : ";
                    // var sel = ["A","B","C","D","E","F","G","H","I","J","K"];
                    // var ans = ["A","B","C","D","E","F","G","H","I","J","K"];
                    var sel = [];
                    var ans = [];
                    for(var y=0; y<11; y++){
                        console.log(y);
                        if(reponseTab[y] == true){
                            sel.push(y+1);
                        }
                    }
                    for(var z = 0; z<11; z++){
                        if(answerTab[z] == true){
                            ans.push(z+1);
                        }
                    }
                    console.log("sel : " + sel);
                    console.log("ans : " + ans);
                    setTimeout(function(){ alert("Mauvaise Réponse..."); }, 10);
                    // alert(alrt + sel + "\n" + alrt2 + ans);
                    //setTimeout(3000);
                }
        }
}

async function setColor(){

    console.log("Réponses Données: " + reponseTab);
    console.log("Bonnes réponses : " + answerTab);

    if(answerTab[0] == true){
        // document.getElementById("answer1").className = "isTrue";
        document.getElementById("answer1").style.background="green";
    }else{
        // document.getElementById("answer1").className = "isFalse";
        document.getElementById("answer1").style.background="red";
    }

    if(answerTab[1] == true){
        document.getElementById("answer2").style.background="green";
    }else{
        document.getElementById("answer2").style.background="red";
    }

    if(answerTab[2] == true){
        document.getElementById("answer3").style.background="green";
    }else{
        document.getElementById("answer3").style.background="red";
    }

    if(answerTab[3] == true){
        document.getElementById("answer4").style.background="green";
    }else{
        document.getElementById("answer4").style.background="red";
    }

    if(answerTab[4] == true){
        document.getElementById("answer5").style.background="green";
    }else{
        document.getElementById("answer5").style.background="red";
    }

    if(answerTab[5] == true){
        document.getElementById("answer6").style.background="green";
    }else{
        document.getElementById("answer6").style.background="red";
    }

    if(answerTab[6] == true){
        document.getElementById("answer7").style.background="green";
    }else{
        document.getElementById("answer7").style.background="red";
    }

    if(answerTab[7] == true){
        document.getElementById("answer8").style.background="green";
    }else{
        document.getElementById("answer8").style.background="red";
    }

    if(answerTab[8] == true){
        document.getElementById("answer9").style.background="green";
    }else{
        document.getElementById("answer9").style.background="red";
    }

    if(answerTab[9] == true){
        document.getElementById("answer10").style.background="green";
    }else{
        document.getElementById("answer10").style.background="red";
    }

    if(answerTab[10] == true){
        document.getElementById("answer11").style.background="green";
    }else{
        document.getElementById("answer11").style.background="red";
    }
}

function annonce(){
    if(reponseTab[0] == answerTab[0] && 
        reponseTab[1] == answerTab[1] && 
        reponseTab[2] == answerTab[2] && 
        reponseTab[3] == answerTab[3] && 
        reponseTab[4] == answerTab[4] && 
        reponseTab[5] == answerTab[5] && 
        reponseTab[6] == answerTab[6] && 
        reponseTab[7] == answerTab[7] && 
        reponseTab[8] == answerTab[8] && 
        reponseTab[9] == answerTab[9] && 
        reponseTab[10] == answerTab[10]){
        alert("Bonne réponse !");
    }else{
        console.log(reponseTab);
        console.log(answerTab);
        let alrt = "Mauvaise Réponse...\nVous avez sélectionné : ";
        let alrt2 = "Les réponses étaient : ";
        // var sel = ["A","B","C","D","E","F","G","H","I","J","K"];
        // var ans = ["A","B","C","D","E","F","G","H","I","J","K"];
        var sel = [];
        var ans = [];
        for(var y=0; y<11; y++){
            console.log(y);
            if(reponseTab[y] == true){
                sel.push(y+1);
            }
        }
        for(var z = 0; z<11; z++){
            if(answerTab[z] == true){
                ans.push(z+1);
            }
        }
        console.log("sel : " + sel);
        console.log("ans : " + ans);
        alert(alrt + sel + "\n" + alrt2 + ans);
    }
}