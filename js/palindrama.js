// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let word = prompt(`Enter a word`);

function isPalindrome (word){

    let j = word.length -1;
    let palindrome = true;
    for (let i=0; i < word.length / 2 && palindrome === true; i++){
        if (!(word[i] === word[j])){
            palindrome = false;
        }
        j--;
    }
    return palindrome;
}

