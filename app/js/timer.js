
var minute = sessionStorage.getItem("tempsTimer");
var second = sessionStorage.getItem("secondTimer");

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
    sessionStorage.setItem("tempsTimer", minute);
    sessionStorage.setItem("secondTimer", second);
}, 1000)

setInterval( function(){
    if(document.getElementById("counter").innerHTML == "00:00"){
        alert("Le temps imparti est terminé, vous allez être redirigé vers la page des résultats...");
        window.location.href= 'resultatsQuestionnaire.html';
    }
},(5000))
