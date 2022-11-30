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
    console.log("utilisateur courant : " + user);

    ///////////////////
    // HISTORIC PAGE //
    ///////////////////

    var table = document.getElementById("tableHisto");
    fetch(URLStatistiques)
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
    //////////////////
    // PROFILE PAGE //
    //////////////////

    // Name
    var firstName = sessionStorage.getItem('FirstName');
    var lastName = sessionStorage.getItem('LastName');
    var nameText = document.getElementById("textElementName");
    if(firstName != "" && lastName != ""){
        nameText.innerHTML = ("<b>Name : </b>" + firstName + " " + lastName);
    }

    // Username
    var username = sessionStorage.getItem('UserName');
    var usernameText = document.getElementById("textElementUsername");
    if(username != ""){
        usernameText.innerHTML = ("<b>Username : </b>" + username);
    }

    // Email
    var emailText = document.getElementById("textElementEmail");
    if(user != ""){
        emailText.innerHTML = ("<b>Email : </b>" + user);
    }

    // Job
    var job = sessionStorage.getItem('Job');
    var jobText = document.getElementById("textElementJob");
    if(job != ""){
        jobText.innerHTML = ("<b>Job : </b>" + job);
    }

    // Rôle
    var isAdmin = JSON.parse(sessionStorage.getItem('Admin'));
    var roleText = document.getElementById("textElementRole");
    if(isAdmin == true){
        roleText.innerHTML = ("<b>Rôle : </b>Administrateur");
    }else if(isAdmin == false){
        roleText.innerHTML = ("<b>Rôle : </b>Aucun");
    }

    ////////////////
    // STATS PAGE //
    ////////////////

    const categories = JSON.parse(sessionStorage.getItem('categories'));
        var select = document.getElementById('categorySelection');
        console.log(categories);
        for(let i = 0; i <= categories.length - 1; i++){
            var option = document.createElement("option");
            option.setAttribute('id', i);
            option.text = categories[i];
            select.appendChild(option);
        }
}

function chooseCategory(){
    var select = document.getElementById('categorySelection');
    var typeQ = select.value;
    var user = sessionStorage.getItem("utilisateur");
    var username = sessionStorage.getItem("UserName");

    var pireResultat, meilleurResultat, modePrefere, valeurPrefere;
    var ttalQuestions = 0;
    var ttalJuste = 0;
    var ttalFausse = 0;
    var ttalTests = 0;

    var arrPref = { "3" : 0, "40" : 0, "80": 0 };
    document.getElementById("statsContentDiv").style.display = "block";

    fetch(URLStatistiques)
    //    fetch(URLQuestionTypes)
        .then(response => response.json())
        .then((data) =>{
            for(let element in data.value){
                if(user === data.value[element].user && typeQ === data.value[element].typeQuestionnaire){
                    ttalQuestions += data.value[element].nbQ;
                    ttalTests = ttalTests + 1;
                    ttalJuste = ttalJuste + data.value[element].nbJuste;
                    ttalFausse = ttalFausse + (data.value[element].nbQ - data.value[element].nbJuste);

                    if(pireResultat == null){
                        pireResultat = data.value[element].pourcentage;
                    }else if(pireResultat > data.value[element].pourcentage){
                        pireResultat = data.value[element].pourcentage;
                    }

                    if(meilleurResultat == null){
                        meilleurResultat = data.value[element].pourcentage;
                    }else if(meilleurResultat < data.value[element].pourcentage){
                        meilleurResultat = data.value[element].pourcentage;
                    }

                    if(data.value[element].nbQ == 3){
                        arrPref["3"] += 1;
                    }else if(data.value[element].nbQ == 40){
                        arrPref["40"] += 1;
                    }else if(data.value[element].nbQ == 80){
                        arrPref["80"] += 1;
                    }

                }
            }
            // text global
            var textGlobal = document.getElementById("textGlobal");
            textGlobal.innerHTML = ("<b>Statistiques globales de " + username + " sur le thème de " + typeQ + " :</b>");

            // texte nb tests
            var textNbTests = document.getElementById("textNbTest");
            textNbTests.innerHTML = ("<b>Nombre total de tests : </b>" + ttalTests);

            // texte nb questions
            var textNbQuestions = document.getElementById("textNbQuestions");
            textNbQuestions.innerHTML = ("<b>Nombre total de questions : </b>" + ttalQuestions);

            // texte nb questions justes
            var textNbJuste = document.getElementById("textNbQuestionsJustes");
            textNbJuste.innerHTML = ("<b>Nombre total de questions justes : </b>" + ttalJuste);

            // texte nb questions fausses
            var textNbFausse = document.getElementById("textNbQuestionsFausses");
            textNbFausse.innerHTML = ("<b>Nombre total de questions fausses : </b>" + ttalFausse);

            // texte pourcentage moyen
            var textPourcentage = document.getElementById("textPourcentageMoyen");
            var calculPourcentage = ttalJuste * 100 / ttalQuestions;
            calculPourcentage = Math.round(calculPourcentage * 10) / 10;
            if(ttalTests != 0){
                textPourcentage.innerHTML = ("<b>Pourcentage moyen : </b>" + calculPourcentage + "%");
            }else{
                textPourcentage.innerHTML = ("<b>Pourcentage moyen : </b> Aucun test réalisé dans cette catégorie");
            }

            // texte meilleur résultat
            var textMeilleurResultat = document.getElementById("textMeilleurRésultat");
            if(ttalTests != 0){
                textMeilleurResultat.innerHTML = ("<b>Meilleur résultat : </b>" + meilleurResultat + "%");
            }else{
                textMeilleurResultat.innerHTML = ("<b>Meilleur résultat : </b> Aucun meilleur résultat");
            }

            // texte pire résultat
            var textPireResultat = document.getElementById("textPireRésultat");
            if(ttalTests != 0){
                textPireResultat.innerHTML = ("<b>Pire résultat : </b>" + pireResultat + "%");
            }else{
                textPireResultat.innerHTML = ("<b>Pire résultat : </b> Aucun pire résultat");
            }

            // texte mode préféré
            var textModePrefere = document.getElementById("textModePrefere");
            console.log(arrPref["3"]);
            console.log(arrPref["40"]);
            console.log(arrPref["80"]);
            modePrefere = 0;
            valeurPrefere = 0;
            console.log("AVANT arrPref de 3 : " + arrPref["3"] + ", modePrefere = " + modePrefere + ", valeurPrefere = " + valeurPrefere);
            if(arrPref["3"] >= valeurPrefere){
                modePrefere = "3";
                valeurPrefere = arrPref["3"];
            }
            console.log("AVANT arrPref de 40 : " + arrPref["40"] + ", modePrefere = " + modePrefere + ", valeurPrefere = " + valeurPrefere);
            if(arrPref["40"] >= valeurPrefere){
                modePrefere = "40";
                valeurPrefere = arrPref["40"]
            }
            console.log("AVANT arrPref de 80 : " + arrPref["80"] + ", modePrefere = " + modePrefere + ", valeurPrefere = " + valeurPrefere);
            if(arrPref["80"] >= valeurPrefere){
                modePrefere = "80";
                valeurPrefere = arrPref["80"]
            }
            console.log("APRES arrPref de 80 : " + arrPref["80"] + ", modePrefere = " + modePrefere + ", valeurPrefere = " + valeurPrefere);
            if(ttalTests != 0){
                textModePrefere.innerHTML = ("<b>Mode préféré : </b>" + modePrefere + " questions");
            }else{
                textModePrefere.innerHTML = ("<b>Mode préféré : </b> Aucun");
            }
        })
}