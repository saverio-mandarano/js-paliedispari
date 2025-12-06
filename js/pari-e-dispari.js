// Pari e Dispari


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userEvenOrOdd = prompt (`Inserire "pari" o "dispari"`);
const userNum = prompt (`Inserire un numero da 1 a 5`);
console.log(userEvenOrOdd, userNum);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRandomIntInclusive(min, max) { 
  const minCeiled = Math.ceil(min); 
  const maxFloored = Math.floor(max); 
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const computerNum = getRandomIntInclusive(1, 5);


// Sommiamo i due numeri
const sum = userNum + computerNum;


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// // Dichiariamo chi ha vinto.