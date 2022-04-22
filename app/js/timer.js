
var minute = sessionStorage.getItem("tempsTimer");
var second = 1;

setInterval( function(){
    if(minute == 0 && second == 1){
        document.getElementById("counter").innerHTML = "00:00";
    }else{
        second--;
        if(second == 0){
            minute--;
            second = 60;

            if(minute ==0){
                minute = minute;
            }
        }
        document.getElementById("counter").innerHTML = minute + ":" + second;
    }
}, 1000)

setInterval( function(){
    if(document.getElementById("counter").innerHTML == "00:00"){
        alert("Le temps imparti est terminé, vous allez être redirigé vers la page des résultats...");
        window.location.href= 'resultatsQuestionnaire.html';
    }
}, 1000)
