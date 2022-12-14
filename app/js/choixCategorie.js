var URLQuestions = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Questions';

function fillHTML(){

    var admin = document.getElementById('admins');
    var isAdmin = JSON.parse(sessionStorage.getItem('Admin'));
    if(isAdmin == true){
        admin.style.display = "block";
    }

    const categories = JSON.parse(sessionStorage.getItem('categories'));
//    var stringify = JSON.stringify(categories);
    var select = document.getElementById('categorySelection');
    for(let i = 0; i <= categories.length - 1; i++){
        var option = document.createElement("option");
        option.setAttribute('id', i);
        option.text = categories[i];
        select.appendChild(option);
    }
}

function chooseCategory(){
    sessionStorage.removeItem('selectedCategory');
    var select = document.getElementById('categorySelection');
    var value = select.value;
    sessionStorage.setItem('selectedCategory', value);
    window.location.href= 'categorie.html';
}

function accessAdminFunc(){
    window.location.href = 'admin.html';
}

function userPage(){
    window.location.href = 'utilisateur.html';
}