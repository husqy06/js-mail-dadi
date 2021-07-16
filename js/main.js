alert("Per accedere al gioco bisogna essere registrati");
alert("Email di prova per accedere: prova.email@ciao.com");
// creazione array

var myDatabase = 
[
    "giovannino@ttp.com",
    "franci03@gmail.com",
    "francesco@biz.com",
    "ciaofrate@tsm.com",
    "carlobatti@vegetale.com",
    "prova.email@ciao.com"
];
// chiedo mail all'utente
var boolean = 0;

var usermail = prompt("Inserire la proria email");

// controllo se la mail e' salvata nell' array

for (var i = 0; i < myDatabase.length; i++) {
    if (usermail == myDatabase[i]) {
        boolean ++;
    }
}

if (boolean == 1) {
    alert("Email accettata");

    function game() {
        var dadoUtente = Math.round(Math.random()* 5 + 1);
        var dadoPc = Math.round(Math.random()* 5 + 1);

        resultuser.innerHTML = dadoUtente;
        resultpc.innerHTML = dadoPc;

        if (dadoUtente == 1) {
            document.getElementById("pallinou1").style.display="none";
            document.getElementById("pallinou2").style.display="none";
            document.getElementById("pallinou3").style.display="block";
            document.getElementById("pallinou4").style.display="none";
            document.getElementById("pallinou5").style.display="none";
            document.getElementById("pallinou6").style.display="none";
        }
        else if (dadoUtente == 2){
            document.getElementById("pallinou1").style.display="block";
            document.getElementById("pallinou2").style.display="none";
            document.getElementById("pallinou3").style.display="none";
            document.getElementById("pallinou4").style.display="none";
            document.getElementById("pallinou5").style.display="none";
            document.getElementById("pallinou6").style.display="block";
        }
        else if (dadoUtente == 3){
            document.getElementById("pallinou1").style.display="block";
            document.getElementById("pallinou2").style.display="none";
            document.getElementById("pallinou3").style.display="block";
            document.getElementById("pallinou4").style.display="none";
            document.getElementById("pallinou5").style.display="block";
            document.getElementById("pallinou6").style.display="none";
        }
        else if (dadoUtente == 4){
            document.getElementById("pallinou1").style.display="block";
            document.getElementById("pallinou2").style.display="block";
            document.getElementById("pallinou3").style.display="none";
            document.getElementById("pallinou4").style.display="none";
            document.getElementById("pallinou5").style.display="block";
            document.getElementById("pallinou6").style.display="block";
        }
        else if (dadoUtente == 5){
            document.getElementById("pallinou1").style.display="block";
            document.getElementById("pallinou2").style.display="block";
            document.getElementById("pallinou3").style.display="block";
            document.getElementById("pallinou4").style.display="none";
            document.getElementById("pallinou5").style.display="block";
            document.getElementById("pallinou6").style.display="block";
        }
        else {
            document.getElementById("pallinou1").style.display="block";
            document.getElementById("pallinou2").style.display="block";
            document.getElementById("pallinou3").style.display="block";
            document.getElementById("pallinou4").style.display="block";
            document.getElementById("pallinou5").style.display="block";
            document.getElementById("pallinou6").style.display="block";
        }

        if (dadoPc == 1) {
            document.getElementById("pallinop1").style.display="none";
            document.getElementById("pallinop2").style.display="none";
            document.getElementById("pallinop3").style.display="block";
            document.getElementById("pallinop4").style.display="none";
            document.getElementById("pallinop5").style.display="none";
            document.getElementById("pallinop6").style.display="none";
        }
        else if (dadoPc == 2){
            document.getElementById("pallinop1").style.display="block";
            document.getElementById("pallinop2").style.display="none";
            document.getElementById("pallinop3").style.display="none";
            document.getElementById("pallinop4").style.display="none";
            document.getElementById("pallinop5").style.display="none";
            document.getElementById("pallinop6").style.display="block";
        }
        else if (dadoPc == 3){
            document.getElementById("pallinop1").style.display="block";
            document.getElementById("pallinop2").style.display="none";
            document.getElementById("pallinop3").style.display="block";
            document.getElementById("pallinop4").style.display="none";
            document.getElementById("pallinop5").style.display="block";
            document.getElementById("pallinop6").style.display="none";
        }
        else if (dadoPc == 4){
            document.getElementById("pallinop1").style.display="block";
            document.getElementById("pallinop2").style.display="block";
            document.getElementById("pallinop3").style.display="none";
            document.getElementById("pallinop4").style.display="none";
            document.getElementById("pallinop5").style.display="block";
            document.getElementById("pallinop6").style.display="block";
        }
        else if (dadoPc == 5){
            document.getElementById("pallinop1").style.display="block";
            document.getElementById("pallinop2").style.display="block";
            document.getElementById("pallinop3").style.display="block";
            document.getElementById("pallinop4").style.display="none";
            document.getElementById("pallinop5").style.display="block";
            document.getElementById("pallinop6").style.display="block";
        }
        else {
            document.getElementById("pallinop1").style.display="block";
            document.getElementById("pallinop2").style.display="block";
            document.getElementById("pallinop3").style.display="block";
            document.getElementById("pallinop4").style.display="block";
            document.getElementById("pallinop5").style.display="block";
            document.getElementById("pallinop6").style.display="block";
        }

        if (dadoUtente > dadoPc){
            result.innerHTML = "HAI VINTO!";
        }
        else if (dadoUtente == dadoPc) {
            result.innerHTML = "PAREGGIO!";
        }
        else {
            result.innerHTML = "HAI PERSO!";
        }
    }
}
else {
    alert("Email non trovata");
}

