const contain = document.getElementById("container");
const mail = ["esse@gmail.com" , "boh@gmail.com" , "mammamia@gmail.com"];
let ok = 0

let verification = parseInt(prompt("Inserisci qui la tua mail"));

if (verification == mail){
    contain.innerHTML = `la sua mail è corretta! Complimentoni!`
}