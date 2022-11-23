var URLQuestions = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Questions';
var URLQuestionTypes = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/QuestionTypes';
var idQDel;
var dataToDelete;
var idQModif;

function addQuestionDiv(){
    document.getElementById("ajoutQuestion").style.display = "block";
    document.getElementById("modifQuestion").style.display = "none";
    document.getElementById("supprQuestion").style.display = "none";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "none";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "none";
    document.getElementById("ajoutFichiercsv").style.display = "none"; 
    document.getElementById("actionDelQuestion").style.display = "none";

    var selectDel = document.getElementById('addType');
    const categories = JSON.parse(sessionStorage.getItem('categories'));
    for(let i = 0; i <= categories.length - 1; i++){
        var option = document.createElement("option");
        option.setAttribute('id', i);
        option.text = categories[i];
        selectDel.appendChild(option);
    }
}

function modifyQuestionDiv(){
    document.getElementById("ajoutQuestion").style.display = "none";
    document.getElementById("modifQuestion").style.display = "block";
    document.getElementById("supprQuestion").style.display = "none";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "none";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "none";    
    document.getElementById("ajoutFichiercsv").style.display = "none"; 
    document.getElementById("actionDelQuestion").style.display = "none";
    var nbQ = sessionStorage.getItem("NbQuestionsTotal");
    document.getElementById("text-id-modif").innerText = "Sélectionnez l'ID de la question à modifier : " + "(min : 1, max : " + nbQ  +")";

    var selectMod = document.getElementById('modType');
    const categories = JSON.parse(sessionStorage.getItem('categories'));
    for(let i = 0; i <= categories.length - 1; i++){
        var option = document.createElement("option");
        option.setAttribute('id', i);
        option.text = categories[i];
        selectMod.appendChild(option);
    }
}

function delQuestionDiv(){
    document.getElementById("ajoutQuestion").style.display = "none";
    document.getElementById("modifQuestion").style.display = "none";
    document.getElementById("supprQuestion").style.display = "block";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "none";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "none";  
    document.getElementById("ajoutFichiercsv").style.display = "none"; 
    document.getElementById("actionDelQuestion").style.display = "none";  
    var nbQ = sessionStorage.getItem("NbQuestionsTotal");
    document.getElementById("text-id-suppr").innerText = "Sélectionnez l'ID de la question à supprimer : " + "(min : 1, max : " + nbQ  +")";
    document.getElementById("supprID").value = "";
}

function addQuestionTypDiv(){
    document.getElementById("ajoutQuestion").style.display = "none";
    document.getElementById("modifQuestion").style.display = "none";
    document.getElementById("supprQuestion").style.display = "none";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "block";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "none";   
    document.getElementById("ajoutFichiercsv").style.display = "none";  
    document.getElementById("actionDelQuestion").style.display = "none";
}

function delQuestionTypDiv(){
    document.getElementById("ajoutQuestion").style.display = "none";
    document.getElementById("modifQuestion").style.display = "none";
    document.getElementById("supprQuestion").style.display = "none";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "none";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "block";    
    document.getElementById("ajoutFichiercsv").style.display = "none"; 
    document.getElementById("actionDelQuestion").style.display = "none";

    // var selectDel = document.getElementById('selectDelSelection');
    // const categories = JSON.parse(sessionStorage.getItem('categories'));
    // for(let i = 0; i <= categories.length - 1; i++){
    //     var option = document.createElement("option");
    //     option.setAttribute('id', i);
    //     option.text = categories[i];
    //     selectDel.appendChild(option);
    // }
}

function addCSVDiv(){
    document.getElementById("ajoutQuestion").style.display = "none";
    document.getElementById("modifQuestion").style.display = "none";
    document.getElementById("supprQuestion").style.display = "none";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "none";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "none";    
    document.getElementById("ajoutFichiercsv").style.display = "block"; 
    document.getElementById("actionDelQuestion").style.display = "none";  
}

function addQuestionButton(){
    console.log("Ajout de question... TODO");
    var addingQType = document.getElementById('addType').value;
    var addingQDesc = document.getElementById('addDesc').value;
    var addingQNOA = document.getElementById('addNOA').value;
    var addingQRep1 = document.getElementById('addQ1').value;
    var addingQRep2 = document.getElementById('addQ2').value;
    var addingQRep3 = document.getElementById('addQ3').value;
    var addingQRep4 = document.getElementById('addQ4').value;
    var addingQRep5 = document.getElementById('addQ5').value;
    var addingQRep6 = document.getElementById('addQ6').value;
    var addingQRep7 = document.getElementById('addQ7').value;
    var addingQRep8 = document.getElementById('addQ8').value;
    var addingQRep9 = document.getElementById('addQ9').value;
    var addingQRep10 = document.getElementById('addQ10').value;
    var addingQRep11 = document.getElementById('addQ11').value;
    var addingQVal1 = document.getElementById('validQ1').checked;
    var addingQVal2 = document.getElementById('validQ2').checked;
    var addingQVal3 = document.getElementById('validQ3').checked;
    var addingQVal4 = document.getElementById('validQ4').checked;
    var addingQVal5 = document.getElementById('validQ5').checked;
    var addingQVal6 = document.getElementById('validQ6').checked;
    var addingQVal7 = document.getElementById('validQ7').checked;
    var addingQVal8 = document.getElementById('validQ8').checked;
    var addingQVal9 = document.getElementById('validQ9').checked;
    var addingQVal10 = document.getElementById('validQ10').checked;
    var addingQVal11 = document.getElementById('validQ11').checked;
    var checkNbAnswers = 0;
    var nbRep = 0;

    if(addingQRep1 != "" && addingQVal1 == true){
//        addingQVal1 = 1;
        checkNbAnswers += 1;
        nbRep += 1;
    }else if(addingQRep1 != "" && addingQVal1 == false){
//        addingQVal1 = 0;
        nbRep += 1;
    }else if(addingQRep1 == ""){
       addingQRep1 = "NULL";
       addingQVal1 = null;
    }

    if(addingQRep2 != "" && addingQVal2 == true){
//        addingQVal2 = 1;
        checkNbAnswers += 1;
        nbRep += 1;
    }else if(addingQRep2 != "" && addingQVal2 == false){
 //       addingQVal2 = 0;
        nbRep += 1;
    }else if(addingQRep2 == ""){
        addingQRep2 = "NULL";
        addingQVal2 = null;
    }

    if(addingQRep3 != "" && addingQVal3 == true){
        // addingQVal3 = 1;
        checkNbAnswers += 1;
        nbRep += 1;
    }else if(addingQRep3 != "" && addingQVal3 == false){
        // addingQVal3 = 0;
        nbRep += 1;
    }else if(addingQRep3 == ""){
        addingQRep3 = "NULL";
        addingQVal3 = null;
    }

    if(addingQRep4 != "" && addingQVal4 == true){
        // addingQVal4 = 1;
        checkNbAnswers += 1;
        nbRep += 1;
    }else if(addingQRep4 != "" && addingQVal4 == false){
        // addingQVal4 = 0;
        nbRep += 1;
    }else if(addingQRep4 == ""){
        addingQRep4 = "NULL";
        addingQVal4 = null;
    }

    if(addingQRep5 != "" && addingQVal5 == true){
        // addingQVal5 = 1;
        checkNbAnswers += 1;
        nbRep += 1;
    }else if(addingQRep5 != "" && addingQVal5 == false){
        // addingQVal5 = 0;
        nbRep += 1;
    }else if(addingQRep5 == ""){
        addingQRep5 = "NULL";
        addingQVal5 = null;
    }

    if(addingQRep6 != "" && addingQVal6 == true){
        // addingQVal6 = 1;
        checkNbAnswers += 1;
        nbRep += 1;
    }else if(addingQRep6 != "" && addingQVal6 == false){
        // addingQVal6 = 0;
        nbRep += 1;
    }else if(addingQRep6 == ""){
        addingQRep6 = "NULL";
        addingQVal6 = null;
    }

    if(addingQRep7 != "" && addingQVal7 == true){
        // addingQVal7 = 1;
        checkNbAnswers += 1;
        nbRep += 1;
    }else if(addingQRep7 != "" && addingQVal7 == false){
        // addingQVal7 = 0;
        nbRep += 1;
    }else if(addingQRep7 == ""){
        addingQRep7 = "NULL";
        addingQVal7 = null;
    }

    if(addingQRep8 != "" && addingQVal8 == true){
        // addingQVal8 = 1;
        checkNbAnswers += 1;
        nbRep += 1;
    }else if(addingQRep8 != "" && addingQVal8 == false){
        // addingQVal8 = 0;
        nbRep += 1;
    }else if(addingQRep8 == ""){
        addingQRep8 = "NULL";
        addingQVal8 = null;
    }

    if(addingQRep9 != "" && addingQVal9 == true){
        // addingQVal9 = 1;
        checkNbAnswers += 1;
        nbRep += 1;
    }else if(addingQRep9 != "" && addingQVal9 == false){
        // addingQVal9 = 0;
        nbRep += 1;
    }else if(addingQRep9 == ""){
        addingQRep9 = "NULL";
        addingQVal9 = null;
    }

    if(addingQRep10 != "" && addingQVal10 == true){
        // addingQVal10 = 1;
        checkNbAnswers += 1;
        nbRep += 1;
    }else if(addingQRep10 != "" && addingQVal10 == false){
        // addingQVal10 = 0;
        nbRep += 1;
    }else if(addingQRep10 == ""){
        addingQRep10 = "NULL";
        addingQVal10 = null;
    }

    if(addingQRep11 != "" && addingQVal11 == true){
        // addingQVal11 = 1;
        checkNbAnswers += 1;
        nbRep += 1;
    }else if(addingQRep11 != "" && addingQVal11 == false){
        // addingQVal11 = 0;
        nbRep += 1;
    }else if(addingQRep11 == ""){
        addingQRep11 = "NULL";
        addingQVal11 = null;
    }

    console.log(addingQType);
    console.log(addingQDesc);
    console.log(addingQNOA);
    console.log('rep 1 : ' + addingQRep1);
    console.log('rep 2 : ' + addingQRep2);
    console.log('rep 3 : ' + addingQRep3);
    console.log('rep 4 : ' + addingQRep4);
    console.log('rep 5 : ' + addingQRep5);
    console.log('rep 6 : ' + addingQRep6);
    console.log('rep 7 : ' + addingQRep7);
    console.log('rep 8 : ' + addingQRep8);
    console.log('rep 9 : ' + addingQRep9);
    console.log('rep 10 : ' + addingQRep10);
    console.log('rep 11 : ' + addingQRep11);
    console.log('val 1 : ' + addingQVal1);
    console.log('val 2 : ' + addingQVal2);
    console.log('val 3 : ' + addingQVal3);
    console.log('val 4 : ' + addingQVal4);
    console.log('val 5 : ' + addingQVal5);
    console.log('val 6 : ' + addingQVal6);
    console.log('val 7 : ' + addingQVal7);
    console.log('val 8 : ' + addingQVal8);
    console.log('val 9 : ' + addingQVal9);
    console.log('val 10 : ' + addingQVal10);
    console.log('val 11 : ' + addingQVal11);
    console.log('checkNbAnswers : ' + checkNbAnswers);

    if(addingQDesc == ""){
        alert("La description est vide, veuillez en insérer une...");
    }else if(checkNbAnswers != parseInt(addingQNOA)){
        alert("Nombre de réponses justes différent du nombre de réponses valides cochées, veuillez re-vérifier...");
    }else if(nbRep < 2){
        alert("Veuillez entrer plus qu'une réponse possible...");
    }else{
        const data = { 
//            ID: 2492, 
            type: addingQType, 
            description: addingQDesc, 
            nbAns: parseInt(addingQNOA), 
            Answer1: addingQRep1, 
            Answer2: addingQRep2, 
            Answer3: addingQRep3, 
            Answer4: addingQRep4, 
            Answer5: addingQRep5, 
            Answer6: addingQRep6, 
            Answer7: addingQRep7, 
            Answer8: addingQRep8, 
            Answer9: addingQRep9, 
            Answer10: addingQRep10, 
            Answer11: addingQRep11, 
            Valid1: addingQVal1, 
            Valid2: addingQVal2, 
            Valid3: addingQVal3, 
            Valid4: addingQVal4, 
            Valid5: addingQVal5, 
            Valid6: addingQVal6, 
            Valid7: addingQVal7, 
            Valid8: addingQVal8, 
            Valid9: addingQVal9, 
            Valid10: addingQVal10, 
            Valid11: addingQVal11
        };

fetch(URLQuestions, {
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
        alert("Question ajoutée...");
        var nbQ = sessionStorage.getItem("NbQuestionsTotal");
        nbQ = parseInt(nbQ) +1;
        sessionStorage.setItem("NbQuestionsTotal",nbQ);
    }

}

function modifyQuestionButton(){
    console.log("Modification de question... TODO");
    var modifQType = document.getElementById('modType').value;
    var modifQDesc = document.getElementById('modDesc').value;
    var modifQNOA = document.getElementById('modNOA').value;
    var modifQRep1 = document.getElementById('modQ1').value;
    var modifQRep2 = document.getElementById('modQ2').value;
    var modifQRep3 = document.getElementById('modQ3').value;
    var modifQRep4 = document.getElementById('modQ4').value;
    var modifQRep5 = document.getElementById('modQ5').value;
    var modifQRep6 = document.getElementById('modQ6').value;
    var modifQRep7 = document.getElementById('modQ7').value;
    var modifQRep8 = document.getElementById('modQ8').value;
    var modifQRep9 = document.getElementById('modQ9').value;
    var modifQRep10 = document.getElementById('modQ10').value;
    var modifQRep11 = document.getElementById('modQ11').value;
    var modifQVal1 = document.getElementById('modvalidQ1').checked;
    var modifQVal2 = document.getElementById('modvalidQ2').checked;
    var modifQVal3 = document.getElementById('modvalidQ3').checked;
    var modifQVal4 = document.getElementById('modvalidQ4').checked;
    var modifQVal5 = document.getElementById('modvalidQ5').checked;
    var modifQVal6 = document.getElementById('modvalidQ6').checked;
    var modifQVal7 = document.getElementById('modvalidQ7').checked;
    var modifQVal8 = document.getElementById('modvalidQ8').checked;
    var modifQVal9 = document.getElementById('modvalidQ9').checked;
    var modifQVal10 = document.getElementById('modvalidQ10').checked;
    var modifQVal11 = document.getElementById('modvalidQ11').checked;
    var checkNbAnswers = 0;
    var nbRep = 0;
    var id;

    console.log(modifQType);
    console.log(modifQDesc);
    console.log(modifQNOA);
    console.log('rep 1 : ' + modifQRep1);
    console.log('rep 2 : ' + modifQRep2);
    console.log('rep 3 : ' + modifQRep3);
    console.log('rep 4 : ' + modifQRep4);
    console.log('rep 5 : ' + modifQRep5);
    console.log('rep 6 : ' + modifQRep6);
    console.log('rep 7 : ' + modifQRep7);
    console.log('rep 8 : ' + modifQRep8);
    console.log('rep 9 : ' + modifQRep9);
    console.log('rep 10 : ' + modifQRep10);
    console.log('rep 11 : ' + modifQRep11);
    console.log('val 1 : ' + modifQVal1);
    console.log('val 2 : ' + modifQVal2);
    console.log('val 3 : ' + modifQVal3);
    console.log('val 4 : ' + modifQVal4);
    console.log('val 5 : ' + modifQVal5);
    console.log('val 6 : ' + modifQVal6);
    console.log('val 7 : ' + modifQVal7);
    console.log('val 8 : ' + modifQVal8);
    console.log('val 9 : ' + modifQVal9);
    console.log('val 10 : ' + modifQVal10);
    console.log('val 11 : ' + modifQVal11);

            if(modifQRep1 != "" && modifQVal1 == true){
                checkNbAnswers += 1;
                nbRep += 1;
            }else if(modifQRep1 != "" && modifQVal1 == false){
                nbRep += 1;
            }else if(modifQRep1 == ""){
                modifQRep1 = "NULL";
                modifQVal1 = null;
            }
        
            if(modifQRep2 != "" && modifQVal2 == true){
                checkNbAnswers += 1;
                nbRep += 1;
            }else if(modifQRep2 != "" && modifQVal2 == false){
                nbRep += 1;
            }else if(modifQRep2 == ""){
                modifQRep2 = "NULL";
                modifQVal2 = null;
            }
        
            if(modifQRep3 != "" && modifQVal3 == true){
                checkNbAnswers += 1;
                nbRep += 1;
            }else if(modifQRep3 != "" && modifQVal3 == false){
                nbRep += 1;
            }else if(modifQRep3 == ""){
                modifQRep3 = "NULL";
                modifQVal3 = null;
            }
        
            if(modifQRep4 != "" && modifQVal4 == true){
                checkNbAnswers += 1;
                nbRep += 1;
            }else if(modifQRep4 != "" && modifQVal4 == false){
                nbRep += 1;
            }else if(modifQRep4 == ""){
                modifQRep4 = "NULL";
                modifQVal4 = null;
            }
        
            if(modifQRep5 != "" && modifQVal5 == true){
                checkNbAnswers += 1;
                nbRep += 1;
            }else if(modifQRep5 != "" && modifQVal5 == false){
                nbRep += 1;
            }else if(modifQRep5 == ""){
                modifQRep5 = "NULL";
                modifQVal5 = null;
            }
        
            if(modifQRep6 != "" && modifQVal6 == true){
                checkNbAnswers += 1;
                nbRep += 1;
            }else if(modifQRep6 != "" && modifQVal6 == false){
                nbRep += 1;
            }else if(modifQRep6 == ""){
                modifQRep6 = "NULL";
                modifQVal6 = null;
            }
        
            if(modifQRep7 != "" && modifQVal7 == true){
                checkNbAnswers += 1;
                nbRep += 1;
            }else if(modifQRep7 != "" && modifQVal7 == false){
                nbRep += 1;
            }else if(modifQRep7 == ""){
                modifQRep7 = "NULL";
                modifQVal7 = null;
            }
        
            if(modifQRep8 != "" && modifQVal8 == true){
                checkNbAnswers += 1;
                nbRep += 1;
            }else if(modifQRep8 != "" && modifQVal8 == false){
                nbRep += 1;
            }else if(modifQRep8 == ""){
                modifQRep8 = "NULL";
                modifQVal8 = null;
            }
        
            if(modifQRep9 != "" && modifQVal9 == true){
                checkNbAnswers += 1;
                nbRep += 1;
            }else if(modifQRep9 != "" && modifQVal9 == false){
                nbRep += 1;
            }else if(modifQRep9 == ""){
                modifQRep9 = "NULL";
                modifQVal9 = null;
            }
        
            if(modifQRep10 != "" && modifQVal10 == true){
                checkNbAnswers += 1;
                nbRep += 1;
            }else if(modifQRep10 != "" && modifQVal10 == false){
                nbRep += 1;
            }else if(modifQRep10 == ""){
                modifQRep10 = "NULL";
                modifQVal10 = null;
            }
        
            if(modifQRep11 != "" && modifQVal11 == true){
                checkNbAnswers += 1;
                nbRep += 1;
            }else if(modifQRep11 != "" && modifQVal11 == false){
                nbRep += 1;
            }else if(modifQRep11 == ""){
                modifQRep11 = "NULL";
                modifQVal11 = null;
            }

            if(modifQDesc == ""){
                alert("La description est vide, veuillez en insérer une...");
            }else if(checkNbAnswers != parseInt(modifQNOA)){
                alert("Nombre de réponses justes différent du nombre de réponses valides cochées, veuillez re-vérifier...");
            }else if(nbRep < 2){
                alert("Veuillez entrer plus qu'une réponse possible...");
            }else{
                const data = { 
                    //ID: idQmodif,
                    type: modifQType, 
                    description: modifQDesc, 
                    nbAns: parseInt(modifQNOA), 
                    Answer1: modifQRep1, 
                    Answer2: modifQRep2, 
                    Answer3: modifQRep3, 
                    Answer4: modifQRep4, 
                    Answer5: modifQRep5, 
                    Answer6: modifQRep6, 
                    Answer7: modifQRep7, 
                    Answer8: modifQRep8, 
                    Answer9: modifQRep9, 
                    Answer10: modifQRep10, 
                    Answer11: modifQRep11, 
                    Valid1: modifQVal1, 
                    Valid2: modifQVal2, 
                    Valid3: modifQVal3, 
                    Valid4: modifQVal4, 
                    Valid5: modifQVal5, 
                    Valid6: modifQVal6, 
                    Valid7: modifQVal7, 
                    Valid8: modifQVal8, 
                    Valid9: modifQVal9, 
                    Valid10: modifQVal10, 
                    Valid11: modifQVal11
                };

                id = sessionStorage.getItem("IDQMODIF");
                console.log("idQmodif dans l'url : " + id);
                var URLID = URLQuestions + "/" + id;
                console.log(URLID);
                fetch(URLID, {
                    method: 'PATCH', // or 'PUT'
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      console.log('Success:', data);
                      alert("Question " + id + " modifiée avec succès !");
                      sessionStorage.setItem("IDQMODIF", 0);
                      location.reload();
                    })
                    .catch((error) => {
                      console.error('Error:', error);
                      alert("erreur lors de l'update");
                    });
            }
        
}

function delQuestionButton(){
    fetch(URLQuestions + '/' + idQDel, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))
//    console.log("Suppression de question... TODO");
idQDel = '';    
alert("Question " + idQDel + " supprimée avec succès !");
location.reload();
}

function addQuestionTypButton(){
    console.log("Ajout de type de question... TODO");
    var addingTyType = document.getElementById('typeName').value;
    var addingTyDesc = document.getElementById('typeDesc').value;
    console.log(addingTyType);
    console.log(addingTyDesc);
    const data = { 
                    name: addingTyType, 
                    description: addingTyDesc
                };
        if(addingTyType != "" && addingTyDesc != ""){
            fetch(URLQuestionTypes, {
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
              alert("Type de question ajouté avec succès !");
              fetch(URLQuestionTypes)
              .then(response => response.json())
              .then((data) =>{
          //        console.log(data.value);
                  var types = [];
                  var typesID = [];
                  var allData2;
                  allData2 = data.value;
                  console.log(allData2);
                  
          //    window.location.href= 'categorie2.html';
                  for (var i = 0; i < allData2.length; i++) {
                      var current;
                      current = allData2[i];
                      if (types.indexOf(current.name) >= 0){
                      }else{
                          types.push(current.name);
                          typesID.push(current.ID);
                      }
                  }
                  sessionStorage.setItem("categories", JSON.stringify(types));
              location.reload();
              })
        }else{
            document.getElementById('typeName').value = "";
            document.getElementById('typeDesc').value = "";
            alert("Erreur rencontrée lors de l'ajout, veuillez recommencer :/"); 
        }
}

function delQuestionTypButton(){
    //console.log("Suppression de type de question... TODO");
    var selector = document.getElementById('selectDelSelection');
    var valueSelector = selector.value;
    var textSelector = selector.options[selector.selectedIndex].text;
//    var selected = selector.selected.id;
    //console.log("type : " + selector.options[selector.selectedIndex].text);
    //console.log("id : " + selector.value);
    const dataDelete = { ID: valueSelector, name: textSelector };
    const dataCheckType = { name: textSelector };
    //var dataToDelete;
    //console.log(dataDelete);
    //setTimeout(3000);
    fetch(URLQuestionTypes)
              .then(response => response.json())
              .then((data) =>{
                  var allData3 = data.value;
                  dataToDelete = undefined;
                  for(let z=0; z < allData3.length; z++){
                    var current;
                    current = allData3[z];
                    //console.log("current : " + current.name);
                    if(current.name == textSelector){
                        dataToDelete = current.ID;
                        //console.log("TO DELETE : " + dataToDelete);
                    }
                  }
              })
    // fetch(URLQuestionTypes, {
    //     method: 'DELETE', // or 'PUT'
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    //setTimeout(() => { console.log("waiting for fetching"); }, 3000);
    console.log(textSelector);
    setTimeout(function () {
        delID(textSelector);
        }, 3000);
    // fetch(URLQuestionTypes + '/' + dataToDelete, {
    //     method: 'DELETE',
    //   })
    //   .then(res => res.text()) // or res.json()
    //   .then(res => console.log(res))
    //   idQDel = '';
    //   alert("Type de question " + textSelector + " supprimée avec succès !");

    //   fetch(URLQuestionTypes)
    //           .then(response => response.json())
    //           .then((data) =>{
    //       //        console.log(data.value);
    //               var types = [];
    //               var typesID = [];
    //               var allData2;
    //               allData2 = data.value;
    //               console.log(allData2);
                  
    //       //    window.location.href= 'categorie2.html';
    //               for (var i = 0; i < allData2.length; i++) {
    //                   var current;
    //                   current = allData2[i];
    //                   if (types.indexOf(current.name) >= 0){
    //                   }else{
    //                       types.push(current.name);
    //                       typesID.push(current.ID);
    //                   }
    //               }
    //               console.log("types : " + types);
    //               sessionStorage.setItem("categories", JSON.stringify(types));
    //               alert(dataToDelete);
    //               location.reload();
              
    //           })
}

function addCSVButton(){

    var fileSize = 0;
    //get file
    var theFile = document.getElementById("myFile");
    
     var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
     //check if file is CSV
     if (regex.test(theFile.value.toLowerCase())) {
     //check if browser support FileReader
        if (typeof (FileReader) != "undefined") {
       //get table element
        var table = document.getElementById("myTable");
        var headerLine = "";

        var lignesAjoutees;
        var countTotal;
        //create html5 file reader object
        var myReader = new FileReader();
        // call filereader. onload function
        myReader.onload = function(e) {
            var content = myReader.result;
            //split csv file using "\n" for new line ( each row)
            var lines = content.split("\r");
            //loop all rows
            for (var count = 0; count < lines.length; count++) {
                //create a tr element
                var row = document.createElement("tr");
                //split each row content
                var rowContent = lines[count].split(",");
                //loop throw all columns of a row
                for (var i = 0; i < rowContent.length; i++) {
                   //create td element 
                    var cellElement = document.createElement("td");
                    if (count == 0) {
                        cellElement = document.createElement("th");
                    } else {
                        cellElement = document.createElement("td");
                    }
                    //add a row element as a node for table
                    var cellContent = document.createTextNode(rowContent[i]);
                    
                    cellElement.appendChild(cellContent);
                    //append row child
                    row.appendChild(cellElement);
                    
                }
                //append table contents
                    myTable.appendChild(row);
                    console.log("zrzrzrzer" + rowContent[0]);
                    var rowElements = rowContent[0].split(';')
                    var countAdded = 0;
                    if( rowElements[1] != null && rowElements[2] != null && rowElements[3] != null && rowElements[4] != null && rowElements[5] != null &&
                        rowElements[6] != null && rowElements[7] != null && rowElements[8] != null && rowElements[9] != null && rowElements[10] != null &&
                        rowElements[11] != null && rowElements[12] != null && rowElements[13] != null && rowElements[14] != null && rowElements[15] != null &&
                        rowElements[16] != null && rowElements[17] != null && rowElements[18] != null && rowElements[19] != null && rowElements[20] != null &&
                        rowElements[21] != null && rowElements[22] != null && rowElements[23] != null && rowElements[24] != null && rowElements[25] !=  null)
                    {
                        countAdded += 1;
                        console.log("valid 1 : " + rowElements[15]);
                        if(rowElements[15] == "0"){
                            rowElements[15] = false;
                            //addingQVal1 == false;
                        }else if(rowElements[15] == "1"){
                            rowElements[15] = true;
                            //addingQVal1 =
                        }else{
                            rowElements[15] = null;
                        }
                        
                        if(rowElements[16] == "0"){
                            rowElements[16] = false;
                        }else if(rowElements[16] == "1"){
                            rowElements[16] = true;
                        }else{
                            rowElements[16] = null;
                        }
                        
                        if(rowElements[17] == "0"){
                            rowElements[17] = false;
                        }else if(rowElements[17] == "1"){
                            rowElements[17] = true;
                        }else{
                            rowElements[17] = null;
                        }
                        
                        if(rowElements[18] == "0"){
                            rowElements[18] = false;
                        }else if(rowElements[18] == "1"){
                            rowElements[18] = true;
                        }else{
                            rowElements[18] = null;
                        }
                        
                        if(rowElements[19] == "0"){
                            rowElements[19] = false;
                        }else if(rowElements[19] == "1"){
                            rowElements[19] = true;
                        }else{
                            rowElements[19] = null;
                        }
                        
                        if(rowElements[20] == "0"){
                            rowElements[20] = false;
                        }else if(rowElements[20] == "1"){
                            rowElements[20] = true;
                        }else{
                            rowElements[20] = null;
                        }
                        
                        if(rowElements[21] == "0"){
                            rowElements[21] = false;
                        }else if(rowElements[21] == "1"){
                            rowElements[21] = true;
                        }else{
                            rowElements[21] = null;
                        }
                        
                        if(rowElements[22] == "0"){
                            rowElements[22] = false;
                        }else if(rowElements[22] == "1"){
                            rowElements[22] = true;
                        }else{
                            rowElements[22] = null;
                        }
                        
                        if(rowElements[23] == "0"){
                            rowElements[23] = false;
                        }else if(rowElements[23] == "1"){
                            rowElements[23] = true;
                        }else{
                            rowElements[23] = null;
                        }
                        
                        if(rowElements[24] == "0"){
                            rowElements[24] = false;
                        }else if(rowElements[24] == "1"){
                            rowElements[24] = true;
                        }else{
                            rowElements[24] = null;
                        }
                        
                        if(rowElements[25] == "0"){
                            rowElements[25] = false;
                        }else if(rowElements[25] == "1"){
                            rowElements[25] = true;
                        }else{
                            rowElements[25] = null;
                        }
                        

                        const data = { 
                                        type: rowElements[1], 
                                        description: rowElements[2], 
                                        nbAns: parseInt(rowElements[3]), 
                                        Answer1: rowElements[4], 
                                        Answer2: rowElements[5], 
                                        Answer3: rowElements[6], 
                                        Answer4: rowElements[7], 
                                        Answer5: rowElements[8], 
                                        Answer6: rowElements[9], 
                                        Answer7: rowElements[10], 
                                        Answer8: rowElements[11], 
                                        Answer9: rowElements[12], 
                                        Answer10: rowElements[13], 
                                        Answer11: rowElements[14], 
                                        Valid1: rowElements[15], 
                                        Valid2: rowElements[16], 
                                        Valid3: rowElements[17], 
                                        Valid4: rowElements[18], 
                                        Valid5: rowElements[19], 
                                        Valid6: rowElements[20], 
                                        Valid7: rowElements[21], 
                                        Valid8: rowElements[22], 
                                        Valid9: rowElements[23], 
                                        Valid10: rowElements[24], 
                                        Valid11: rowElements[25]
                                    };
                        console.log(data);
                        
                        fetch(URLQuestions, {
                            method: 'POST', // or 'PUT'
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                          })
                            .then((response) => response.json())
                            .then((data) => {
                              console.log('Success:', data);
                              lignesAjoutees ++;
                            })
                            .catch((error) => {
                              console.error('Error:', error);
                            });
                    }
                    countTotal++;
                    
                    var nbQ = sessionStorage.getItem("NbQuestionsTotal");
                    nbQ = parseInt(nbQ) + countAdded;
                    sessionStorage.setItem("NbQuestionsTotal",nbQ);

            }
            
        }
        //setTimeout(alert(lignesAjoutees + "/" + (countTotal-1) + " Données ajoutées avec succès"), 3000);
         //call file reader onload
          myReader.readAsText(theFile.files[0]);
        }
        else 
        {
              alert("This browser does not support HTML5.");
        }
        
    }
    else {
                alert("Please upload a valid CSV file.");
    }
    
    return false;
}

function displayDivSupperssion(){
    idQDel = '';
    var nbQTTAL = sessionStorage.getItem("NbQuestionsTotal");
    //console.log("valeur sélectionnée : " + document.getElementById("supprID").value);
    if(document.getElementById("supprID").value != "" && document.getElementById("supprID").value > 0 && document.getElementById("supprID").value < parseInt(nbQTTAL)+1){
        alert("Patientez quelques instants, la question choisie charge...");
        document.getElementById("actionDelQuestion").style.display = "block";
        fetch(URLQuestions)
        .then(response => response.json())
        .then((data) =>{
            var allDataSup;
            allDataSup = data.value;            
            for(var i = 0; i < allDataSup.length; i++){
                if(parseInt(allDataSup[i].ID) == parseInt(document.getElementById("supprID").value)){
                    document.getElementById("selectedDelet").innerText = "Question Sélectionnée : " + allDataSup[i].ID + " - " + allDataSup[i].description;
                    idQDel = allDataSup[i].ID;
                }
            }
       })
       
    }else{
        alert("Données erronées");
        document.getElementById("actionDelQuestion").style.display = "none";
    }
}

function displayDivModification(){
    idQmodif = 0;
    var nbQTTAL = sessionStorage.getItem("NbQuestionsTotal");
    if(document.getElementById("modifID").value != "" && document.getElementById("modifID").value > 0 && document.getElementById("modifID").value < parseInt(nbQTTAL)+1){
        alert("Patientez quelques instants, la question choisie charge...");
        document.getElementById("modifyForm").style.display = "block";
        fetch(URLQuestions)
        .then(response => response.json())
        .then((data) =>{
            var allDataMod;
            allDataMod = data.value;            
            for(var i = 0; i < allDataMod.length; i++){
                if(parseInt(allDataMod[i].ID) == parseInt(document.getElementById("modifID").value)){
                    document.getElementById("modType").value = allDataMod[i].type;
                    document.getElementById("modDesc").value = allDataMod[i].description;
                    var nombreRep = allDataMod[i].nbAns.toString();
                    document.getElementById("modNOA").value = nombreRep;

                    if(allDataMod[i].Answer1 != 'NULL'){
                        document.getElementById("modQ1").value = allDataMod[i].Answer1;
                    }

                    if(allDataMod[i].Answer2 != 'NULL'){
                        document.getElementById("modQ2").value = allDataMod[i].Answer2;
                    }

                    if(allDataMod[i].Answer3 != 'NULL'){
                        document.getElementById("modQ3").value = allDataMod[i].Answer3;
                    }

                    if(allDataMod[i].Answer4 != 'NULL'){
                        document.getElementById("modQ4").value = allDataMod[i].Answer4;
                    }

                    if(allDataMod[i].Answer5 != 'NULL'){
                        document.getElementById("modQ5").value = allDataMod[i].Answer5;
                    }

                    if(allDataMod[i].Answer6 != 'NULL'){
                        document.getElementById("modQ6").value = allDataMod[i].Answer6;
                    }

                    if(allDataMod[i].Answer7 != 'NULL'){
                        document.getElementById("modQ7").value = allDataMod[i].Answer7;
                    }

                    if(allDataMod[i].Answer8 != 'NULL'){
                        document.getElementById("modQ8").value = allDataMod[i].Answer8;
                    }

                    if(allDataMod[i].Answer9 != 'NULL'){
                        document.getElementById("modQ9").value = allDataMod[i].Answer9;
                    }

                    if(allDataMod[i].Answer10 != 'NULL'){
                        document.getElementById("modQ10").value = allDataMod[i].Answer10;
                    }

                    if(allDataMod[i].Answer11 != 'NULL'){
                        document.getElementById("modQ11").value = allDataMod[i].Answer11;
                    }



                    if(allDataMod[i].Valid1 == 1 && allDataMod[i].Answer1 != "" && allDataMod[i].Answer1 != "NULL"){
                        document.getElementById("modvalidQ1").checked = true;
                    }else{
                        document.getElementById("modvalidQ1").checked = false;
                    }

                    if(allDataMod[i].Valid2 == 1 && allDataMod[i].Answer2 != "" && allDataMod[i].Answer2 != "NULL"){
                        document.getElementById("modvalidQ2").checked = true;
                    }else{
                        document.getElementById("modvalidQ2").checked = false;
                    }

                    if(allDataMod[i].Valid3 == 1 && allDataMod[i].Answer3 != "" && allDataMod[i].Answer3 != "NULL"){
                        document.getElementById("modvalidQ3").checked = true;
                    }else{
                        document.getElementById("modvalidQ3").checked = false;
                    }
                    
                    if(allDataMod[i].Valid4 == 1 && allDataMod[i].Answer4 != "" && allDataMod[i].Answer4 != "NULL"){
                        document.getElementById("modvalidQ4").checked = true;
                    }else{
                        document.getElementById("modvalidQ4").checked = false;
                    }

                    if(allDataMod[i].Valid5 == 1 && allDataMod[i].Answer5 != "" && allDataMod[i].Answer5 != "NULL"){
                        document.getElementById("modvalidQ5").checked = true;
                    }else{
                        document.getElementById("modvalidQ5").checked = false;
                    }

                    if(allDataMod[i].Valid6 == 1 && allDataMod[i].Answer6 != "" && allDataMod[i].Answer6 != "NULL"){
                        document.getElementById("modvalidQ6").checked = true;
                    }else{
                        document.getElementById("modvalidQ6").checked = false;
                    }

                    if(allDataMod[i].Valid7 == 1 && allDataMod[i].Answer7 != "" && allDataMod[i].Answer7 != "NULL"){
                        document.getElementById("modvalidQ7").checked = true;
                    }else{
                        document.getElementById("modvalidQ7").checked = false;
                    }

                    if(allDataMod[i].Valid8 == 1 && allDataMod[i].Answer8 != "" && allDataMod[i].Answer8 != "NULL"){
                        document.getElementById("modvalidQ8").checked = true;
                    }else{
                        document.getElementById("modvalidQ8").checked = false;
                    }

                    if(allDataMod[i].Valid9 == 1 && allDataMod[i].Answer9 != "" && allDataMod[i].Answer9 != "NULL"){
                        document.getElementById("modvalidQ9").checked = true;
                    }else{
                        document.getElementById("modvalidQ9").checked = false;
                    }

                    if(allDataMod[i].Valid10 == 1 && allDataMod[i].Answer10 != "" && allDataMod[i].Answer10 != "NULL"){
                        document.getElementById("modvalidQ10").checked = true;
                    }else{
                        document.getElementById("modvalidQ10").checked = false;
                    }

                    if(allDataMod[i].Valid11 == 1 && allDataMod[i].Answer11 != "" && allDataMod[i].Answer11 != "NULL"){
                        document.getElementById("modvalidQ11").checked = true;
                    }else{
                        document.getElementById("modvalidQ11").checked = false;
                    }

                    idQModif = allDataMod[i].ID;
                    console.log("IDQMODIF : " + idQModif);
                    sessionStorage.setItem("IDQMODIF", allDataMod[i].ID);
                    //var test = sessionStorage.getItem("IDQMODIF").
                    //console.log("session storage : " + test);
                }
            }
       })
       
    }else{
        alert("Données erronées");
        document.getElementById("modifyForm").style.display = "none";
    }

}

function fillHTML(){
        fetch(URLQuestions)
    .then(response => response.json())
    .then((data) =>{
        var allData;
        var biggestID = 0;
        allData = data.value;
        //console.log(allData);
        for(var i = 0; i < allData.length; i++){
            if(allData[i].ID > biggestID){
                //console.log(allData[i].ID);
                biggestID = allData[i].ID;
            }
            //console.log(biggestID);
        }
        sessionStorage.setItem("NbQuestionsTotal", biggestID);
   })

   fetch(URLQuestionTypes)
   .then(response => response.json())
   .then((data) =>{
       var allDataTypes;
       var types = [];
       allDataTypes = data.value;
       for(var j = 0; j < allDataTypes.length; j++){
            types.push(allDataTypes[j].name);
       }
       sessionStorage.setItem("categories", JSON.stringify(types));
  })

   var selectDel = document.getElementById('selectDelSelection');
   const categories = JSON.parse(sessionStorage.getItem('categories'));
   for(let i = 0; i <= categories.length - 1; i++){
       var option = document.createElement("option");
       option.setAttribute('value', i+1);
       option.text = categories[i];
       selectDel.appendChild(option);
   }
}

function delID(textSelector){
    fetch(URLQuestionTypes + '/' + dataToDelete, {
        method: 'DELETE',
      })
      .then(res => res.text()) // or res.json()
      .then(res => console.log(res))
      idQDel = '';
      alert("Type de question " + textSelector + " supprimée avec succès !");

      fetch(URLQuestionTypes)
              .then(response => response.json())
              .then((data) =>{
          //        console.log(data.value);
                  var types = [];
                  var typesID = [];
                  var allData2;
                  allData2 = data.value;
                  console.log(allData2);
                  
          //    window.location.href= 'categorie2.html';
                  for (var i = 0; i < allData2.length; i++) {
                      var current;
                      current = allData2[i];
                      if (types.indexOf(current.name) >= 0){
                      }else{
                          types.push(current.name);
                          typesID.push(current.ID);
                      }
                  }
                  console.log("types : " + types);
                  sessionStorage.setItem("categories", JSON.stringify(types));
                  //alert(dataToDelete);
                  location.reload();
              
              })
}