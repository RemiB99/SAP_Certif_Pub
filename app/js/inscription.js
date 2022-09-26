// A changer - identifiant différent pour chaque devSpace
var URLUsers = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Users';

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    const fs = require('fs');
    const stringify = require('csv-stringify');
    e.preventDefault();
    const username = loginForm.username.value;
    const mail = loginForm.mail.value;
    const password = loginForm.password.value;
    const password2 = loginForm.password2.value;
    fetch(URLUsers)
    .then(response => response.json())
    .then((data) =>{
        console.log(data);
    for(let user in data.value){
        if (mail === data.value[user].mail || password === data.value[user].password || username=== data.value[user].username ) {
            console.log("erreur, existe déjà");
        } 
        else{
            location.reload();
        }
    }
    if(password == password2){
            console.log("Inscription réussi");
            var newData = [
                {
                    "ID": '1',
                    "username": username,
                    "mail": mail,
                    "password": password
                }
            ]
            stringify(newData, {
                header: true
            }, function (err, output) {
                fs.writeFile('../../db/csv/my.application-Users.csv', output);
            })
        }
    else{
            loginErrorMsg.style.opacity = 1;
            console.log("Erreur, mots de passes différents");
        }
    }
)})

// TO FINISH !!!
// function redirect(){
//     console.log("AH !");
//     if (confirm("Voulez-vous vraiment créer un compte avec ces données ?")){
//         console.log("AH 1 !");
//         window.location.href= './html/connexion.html';
//         //window.location.href= 'mdp.html';
//         console.log("AH 2 !");
//     }
// }