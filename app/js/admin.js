var URLQuestions = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Questions';
var URLQuestionTypes = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/QuestionTypes';
var idQDel;

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
    console.log("Suppression de type de question... TODO");
    var selector = document.getElementById('selectDelSelection');
    var valueSelector = selector.value;
    var textSelector = selector.options[selector.selectedIndex].text;
//    var selected = selector.selected.id;
    console.log("type : " + selector.options[selector.selectedIndex].text);
    console.log("id : " + selector.value);
    const data = { ID: valueSelector, name: textSelector }
    console.log(data);
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
    fetch(URLQuestionTypes + '/' + parseInt(valueSelector), {
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
                  location.reload();
              
              })
}

function addCSVButton(){
    console.log("Ajout de questions par CSV... TODO");
}

function displayDivSupperssion(){
    idQDel = '';
    var nbQTTAL = sessionStorage.getItem("NbQuestionsTotal");
    //console.log("valeur sélectionnée : " + document.getElementById("supprID").value);
    if(document.getElementById("supprID").value != "" && document.getElementById("supprID").value > 0 && document.getElementById("supprID").value < nbQTTAL+1){
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