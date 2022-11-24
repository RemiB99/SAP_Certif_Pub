function profileDiv(){
    document.getElementById("profileDiv").style.display = "block";
    document.getElementById("statsDiv").style.display = "none";
    document.getElementById("histoDiv").style.display = "none";
}

function statsDiv(){
    document.getElementById("profileDiv").style.display = "none";
    document.getElementById("statsDiv").style.display = "block";
    document.getElementById("histoDiv").style.display = "none";
}

function histoDiv(){
    document.getElementById("profileDiv").style.display = "none";
    document.getElementById("statsDiv").style.display = "none";
    document.getElementById("histoDiv").style.display = "block";
}