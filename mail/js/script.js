const contain = document.getElementById("container");
const mail = ["esse@gmail.com" , "boh@gmail.com" , "mammamia@gmail.com"];

let verification = prompt("Inserisci qui la tua mail");
let trovato = false;

for (i = 0; i < mail.length; i++) {
    if (verification == mail[i]) {
        trovato = true;
    }
}

if (trovato == true) {
    // stiampiano trovato
    contain.innerHTML = "mail corretta, bravo!"
} else {
    // stampiano non trovato
    contain.innerHTML = "ops, non sei invitato :("
}