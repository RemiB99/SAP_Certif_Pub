function addQuestionDiv(){
    document.getElementById("ajoutQuestion").style.display = "block";
    document.getElementById("modifQuestion").style.display = "none";
    document.getElementById("supprQuestion").style.display = "none";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "none";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "none";
    document.getElementById("ajoutFichiercsv").style.display = "none"; 
}

function modifyQuestionDiv(){
    document.getElementById("ajoutQuestion").style.display = "none";
    document.getElementById("modifQuestion").style.display = "block";
    document.getElementById("supprQuestion").style.display = "none";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "none";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "none";    
    document.getElementById("ajoutFichiercsv").style.display = "none"; 
}

function delQuestionDiv(){
    document.getElementById("ajoutQuestion").style.display = "none";
    document.getElementById("modifQuestion").style.display = "none";
    document.getElementById("supprQuestion").style.display = "block";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "none";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "none";  
    document.getElementById("ajoutFichiercsv").style.display = "none";   
}

function addQuestionTypDiv(){
    document.getElementById("ajoutQuestion").style.display = "none";
    document.getElementById("modifQuestion").style.display = "none";
    document.getElementById("supprQuestion").style.display = "none";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "block";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "none";   
    document.getElementById("ajoutFichiercsv").style.display = "none";  
}

function delQuestionTypDiv(){
    document.getElementById("ajoutQuestion").style.display = "none";
    document.getElementById("modifQuestion").style.display = "none";
    document.getElementById("supprQuestion").style.display = "none";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "none";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "block";    
    document.getElementById("ajoutFichiercsv").style.display = "none"; 

    var selectDel = document.getElementById('selectDelSelection');
    const categories = JSON.parse(sessionStorage.getItem('categories'));
    for(let i = 0; i <= categories.length - 1; i++){
        var option = document.createElement("option");
        option.setAttribute('id', i);
        option.text = categories[i];
        selectDel.appendChild(option);
    }
}

function addCSVDiv(){
    document.getElementById("ajoutQuestion").style.display = "none";
    document.getElementById("modifQuestion").style.display = "none";
    document.getElementById("supprQuestion").style.display = "none";
    document.getElementById("ajoutTypeQuestionnaire").style.display = "none";
    document.getElementById("supperssionTypeQuestionnaire").style.display = "none";    
    document.getElementById("ajoutFichiercsv").style.display = "block";   
}

function addQuestionButton(){
    console.log("Ajout de question... TODO");
}

function modifyQuestionButton(){
    console.log("Modification de question... TODO");
}

function delQuestionButton(){
    console.log("Suppression de question... TODO");
}

function addQuestionTypButton(){
    console.log("Ajout de type de question... TODO");
}

function delQuestionTypButton(){
    console.log("Suppression de type de question... TODO");
}

function addCSVButton(){
    console.log("Ajout de questions par CSV... TODO");
}