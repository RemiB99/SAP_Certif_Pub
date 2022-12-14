// A changer - identifiant différent pour chaque devSpace
var URLUsers = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Users';
var URLQuestions = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Questions';
var URLQuestionTypes = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/QuestionTypes';

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const mail = loginForm.mail.value;
    const password = loginForm.password.value;
    fetch(URLUsers)
    .then(response => response.json())
    .then((data) =>{
    for(let user in data.value){
        if (mail === data.value[user].mail && password === data.value[user].password) {
            sessionStorage.setItem('Admin', data.value[user].role);
            sessionStorage.setItem('FirstName', data.value[user].firstName);
            sessionStorage.setItem('LastName', data.value[user].lastName);
            sessionStorage.setItem('UserName', data.value[user].username);
            sessionStorage.setItem('Job', data.value[user].job);
            let p = document.getElementById('hidden_message_email');
            let q = document.getElementById('hidden_message_mdp');
            p.hidden = true;
            q.hidden = true;
            fetch(URLQuestionTypes)
            .then(response => response.json())
            .then((data) =>{
                var types = [];
                var typesID = [];
                var allData;
                allData = data.value;
                
                for (var i = 0; i < allData.length; i++) {
                    var current;
                    current = allData[i];
                    if (types.indexOf(current.name) >= 0){
                    }else{
                        types.push(current.name);
                        typesID.push(current.ID);
                    }
                }
                sessionStorage.setItem("categories", JSON.stringify(types));
                sessionStorage.setItem("utilisateur", mail);
           })

            alert("You will be redirected to the application's main page. This might take a few seconds after you clicked 'ok', data loading, please wait.");
            window.location.href = "./html/choixCategorie.html";
        } else {

            let p = document.getElementById('hidden_message_email');
            let q = document.getElementById('hidden_message_mdp');
            p.removeAttribute("hidden");
            q.removeAttribute("hidden");
        }
    }
})})