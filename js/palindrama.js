// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt(`Enter a word to check if it's palindrome`);

// Chiamata alla funzione isPalindrome ed output 
if (isPalindrome(userWord)){
    console.log(`The word ${userWord} is palindrome`);
    document.getElementById("isPalindromeOutput").innerHTML = `The word ${userWord} is palindrome`;
    
}
else {
    console.log(`The word ${userWord} is not palindrome`);
    document.getElementById("isPalindromeOutput").innerHTML = `The word ${userWord} is not palindrome`;
}

// Definizione della funzione isPalindrome
function isPalindrome (word){
    let wordLowerCase = word.toLowerCase();
    
    let lastCharacterPosition = wordLowerCase.length - 1;
    let result = true;
    for (let i = 0; i < wordLowerCase.length / 2; i++){
        if (wordLowerCase[i] !== wordLowerCase[lastCharacterPosition - i]) {
            result = false;
        }
    }
    return result;
}


