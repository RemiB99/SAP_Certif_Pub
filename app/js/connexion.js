// A changer - identifiant différent pour chaque devSpace
var URLUsers = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Users';

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
        console.log(data);
    for(let user in data.value){
        if (mail === data.value[user].mail && password === data.value[user].password) {

            alert("Vous allez être redirigé vers l'accueil de l'application...");

            window.location.href = "./html/choix_categories.html";
        } else {

            console.log("Connexion échoué");
        }
    }
    let p = document.getElementById('hidden_message_email');
    let q = document.getElementById('hidden_message_mdp');
    p.removeAttribute("hidden");
    q.removeAttribute("hidden");
})})