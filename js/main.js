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

var usermail = prompt("Inserire la proria mail")

// controllo se la mail e' salvata nell' array

for (var i = 0; i < myDatabase.length; i++) {
    if (usermail == myDatabase[i])
    alert("Email accettata");
    else 
    alert("Email non riconosciuta si prega di reggistrarsi");
}