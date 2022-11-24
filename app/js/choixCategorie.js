var URLQuestions = 'https://port4004-workspaces-ws-gd2dm.us10.trial.applicationstudio.cloud.sap/sap/Questions';

function fillHTML(){
//     fetch(URLQuestions)
//     .then(response => response.json())
//     .then((data) =>{
// //        console.log(data.value);
//         var types = [];
//         var allData;
//         allData = data.value;
//         console.log(allData);
        
// //    window.location.href= 'categorie2.html';
//         for (var i = 0; i < allData.length; i++) {
//             var current;
//             current = allData[i];
//             if (types.indexOf(current.type) >= 0){
//             }else{
//                 types.push(current.type);
//             }
//         }
//         sessionStorage.setItem("categories", JSON.stringify(types));
//         //location.reload();
//    })
    var admin = document.getElementById('admins');
    var isAdmin = JSON.parse(sessionStorage.getItem('Admin'));
    console.log("IS ADMIN : " + isAdmin);
    if(isAdmin == true){
        admin.style.display = "block";
    }

    console.log('Admin : ' + JSON.parse(sessionStorage.getItem('Admin')));
    const categories = JSON.parse(sessionStorage.getItem('categories'));
//    var stringify = JSON.stringify(categories);
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
    sessionStorage.removeItem('selectedCategory');
    var select = document.getElementById('categorySelection');
    var value = select.value;
    console.log(value);
    sessionStorage.setItem('selectedCategory', value);
    window.location.href= 'categorie.html';
}

function accessAdminFunc(){
    window.location.href = 'admin.html';
}

function userPage(){
    window.location.href = 'utilisateur.html';
}