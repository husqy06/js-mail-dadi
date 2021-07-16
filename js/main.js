// creazione array

var myDatabase = 
[
    "giovannino@ttp.com",
    "franci03@gmail.com",
    "francesco@biz.com",
    "ciaofrate@tsm.com",
    "carlobatti@vegetale.com"
];

console.log(myDatabase);

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
}
else {
    alert("Registrarsi prima di procedere");
}