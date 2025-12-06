// Pari e Dispari


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userEvenOrOdd;
do{
    userEvenOrOdd = prompt (`Insert "even" or "odd"`);
}
while(userEvenOrOdd !== `even` && userEvenOrOdd !== `odd`);

let userNum;
do {
    userNum = parseInt(prompt (`Inserire un numero da 1 a 5`));
}
while(userNum < 1 || userNum > 5);

console.log(`userEvenOrOdd: ${userEvenOrOdd}, userNum: ${userNum}`);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRandomIntInclusive(min, max) { 
  const minCeiled = Math.ceil(min); 
  const maxFloored = Math.floor(max); 
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const computerNum = getRandomIntInclusive(1, 5);
console.log(`computerNum: ${computerNum}`);


// Sommiamo i due numeri
const sum = userNum + computerNum;
console.log(`sum: ${sum}`);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function EvenOrOdd (num) {
    return num % 2 === 0 ? `even` : `odd`
}

console.log(`The sum is: ${EvenOrOdd(sum)}`);


// Dichiariamo chi ha vinto.
if (userEvenOrOdd === EvenOrOdd(sum)){
    console.log(`Well Done!!! You win !!!!!!!!`)
}
else {
    console.log(`You Lost!`)
}
