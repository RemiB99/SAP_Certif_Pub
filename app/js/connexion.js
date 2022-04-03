// A changer - identifiant différent pour chaque devSpace
var URLUsers = 'https://port4004-workspaces-ws-vl9jn.us10.trial.applicationstudio.cloud.sap/sap/Users';

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
            alert("You have successfully logged in.");
            console.log("Connexion réussi");
            window.location.href = "./html/choix_categories.html";
        } else {
            loginErrorMsg.style.opacity = 1;
            console.log("Connexion échoué");
        }
    }
})})