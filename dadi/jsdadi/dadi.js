const contain = document.getElementById("container");

const userDadi = [1 , 2 , 3 , 4 , 5 , 6];
const pcDadi = [1 , 2 , 3 , 4 , 5 , 6];
const randomElement = userDadi[Math.floor(Math.random() * userDadi.length)];
console.log(randomElement);
const randomElementPc = pcDadi[Math.floor(Math.random() * pcDadi.length)];
console.log(randomElementPc);

if(randomElementPc < randomElement){
    contain.innerHTML = "Bravo! Hai vinto"

}else if(randomElementPc > randomElement){
    contain.innerHTML = "Mi dispiace ma hai perso :("

}else{
    contain.innerHTML = "Wow! Un pareggio!"
}