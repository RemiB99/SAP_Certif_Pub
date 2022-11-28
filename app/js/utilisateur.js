const URLStatistiques = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Statistiques';

function profileDiv(){
    document.getElementById("profileDiv").style.display = "block";
    document.getElementById("statsDiv").style.display = "none";
    document.getElementById("histoDiv").style.display = "none";
}

function statsDiv(){
    document.getElementById("profileDiv").style.display = "none";
    document.getElementById("statsDiv").style.display = "block";
    document.getElementById("histoDiv").style.display = "none";
}

function histoDiv(){
    document.getElementById("profileDiv").style.display = "none";
    document.getElementById("statsDiv").style.display = "none";
    document.getElementById("histoDiv").style.display = "block";
}

function fillHTML(){
    var user = sessionStorage.getItem("utilisateur");
    console.log("utilsiateur courant : " + user);
    var table = document.getElementById("tableHisto");
    fetch(URLStatistiques)
//    fetch(URLQuestionTypes)
    .then(response => response.json())
    .then((data) =>{
        console.log(data);
        for(let element in data.value){
            if(user === data.value[element].user){
                const row = document.createElement("tr");
                
                // Récupération de la date
                const cellDate = document.createElement("td");  
                cellDate.setAttribute("class", "dataCell");   
                const cellDateText = document.createTextNode(data.value[element].date);
                cellDate.appendChild(cellDateText);
                row.appendChild(cellDate);

                // Récupération du type de questionnaire
                const cellType = document.createElement("td"); 
                cellType.setAttribute("class", "dataCell");   
                const cellTypeText = document.createTextNode(data.value[element].typeQuestionnaire);
                cellType.appendChild(cellTypeText);
                row.appendChild(cellType);

                // Récupération du résultat
                const cellRes = document.createElement("td"); 
                cellRes.setAttribute("class", "dataCell");  
                const cellResText = document.createTextNode(data.value[element].nbJuste + " / " + data.value[element].nbQ);
                cellRes.appendChild(cellResText);
                row.appendChild(cellRes);  

                // Récupération du pourcentage
                const cellPourcentage = document.createElement("td"); 
                cellPourcentage.setAttribute("class", "dataCell");  
                const cellPourcentageText = document.createTextNode(data.value[element].pourcentage + "%");
                cellPourcentage.appendChild(cellPourcentageText);
                row.appendChild(cellPourcentage);  

                // Récupération du mode apprentissage
                const cellLearning = document.createElement("td"); 
                cellLearning.setAttribute("class", "dataCell");  
                let cellLearningText;
                if(data.value[element].learningMode){
                    cellLearningText = document.createTextNode("OUI");
                }else{
                    cellLearningText = document.createTextNode("NON");
                }
                cellLearning.appendChild(cellLearningText);
                row.appendChild(cellLearning);  

                // Récupération du mode réponses aléatoires
                const cellRepAlea = document.createElement("td"); 
                cellRepAlea.setAttribute("class", "dataCell");  
                let cellRepAleaText;
                if(data.value[element].reponsesAlea){
                    cellRepAleaText = document.createTextNode("OUI");
                }else{
                    cellRepAleaText = document.createTextNode("NON");
                }
                cellRepAlea.appendChild(cellRepAleaText);
                row.appendChild(cellRepAlea);  

                // Récupération du mode questions aléatoires
                const cellQuAlea = document.createElement("td");
                cellQuAlea.setAttribute("class", "dataCell");  
                let cellQuAleaText;
                if(data.value[element].questionsAlea){
                    cellQuAleaText = document.createTextNode("OUI");
                }else{
                    cellQuAleaText = document.createTextNode("NON");
                }
                cellQuAlea.appendChild(cellQuAleaText);
                row.appendChild(cellQuAlea); 

                // Récupération de l'ID de base
                const cellID = document.createElement("td"); 
                cellID.setAttribute("class", "dataCell");   
                let cellIDText;
                if(data.value[element].baseID != null){
                    cellIDText = document.createTextNode(data.value[element].baseID);
                }else{
                    cellIDText = document.createTextNode("");
                }
                cellID.appendChild(cellIDText);
                row.appendChild(cellID); 

                // Ajout à la table
                table.appendChild(row);
            }
        }
    })
}