document.getElementById ("retourMenu").addEventListener ("click", returnMenu);

var txtNbrTotalRep = document.querySelector('#nbrTotalRep');
const bnRep="Bonne réponse";
var xImg1 = document.getElementById("image1");
var xImg2 = document.getElementById("image2");
var xImg3 = document.getElementById("image3");

var vImg1 = xImg1.getAttribute("src");
var vImg2 = xImg2.getAttribute("src");
var vImg3 = xImg3.getAttribute("src");

var session1= sessionStorage.getItem("resultat1");
var session2= sessionStorage.getItem("resultat2");
var session3= sessionStorage.getItem("resultat3");
var nbRep1=0;
var nbRep2=0;
var nbRep3=0;
var nbRepTotal=0;

if(session1 == bnRep){
vImg1 = "../images/valider.png";
}else
vImg1 = "../images/echec.png";
xImg1.setAttribute("src", vImg1);

if(session2 == bnRep){
vImg2 = "../images/valider.png";
}else
vImg2 = "../images/echec.png";
xImg2.setAttribute("src", vImg2);

if(session3 == bnRep){
vImg3 = "../images/valider.png";
}else
vImg3 = "../images/echec.png";
xImg3.setAttribute("src", vImg3);
session1 == bnRep ? nbRep1=1: nbRep1=0;

session2 == bnRep ? nbRep2=1: nbRep2=0;

session3 == bnRep ? nbRep3=1: nbRep3=0;

nbRepTotal=nbRep1 + nbRep2 +nbRep3;
console.log(nbRepTotal)
txtNbrTotalRep.textContent= "Nombre de réponses correctes : " + nbRepTotal + "/3";


function returnMenu() {
    window.location.href= 'choix_categories.html';
}