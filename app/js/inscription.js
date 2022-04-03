// A changer - identifiant différent pour chaque devSpace
var URLUsers = 'https://port4004-workspaces-ws-vl9jn.us10.trial.applicationstudio.cloud.sap/sap/Users';

var fs = require('fs');
var stringify = require('csv-stringify');

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
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