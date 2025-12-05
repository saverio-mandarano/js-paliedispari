// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let word = prompt(`Enter a word`);

// Chiamata alla funzione isPalindrome ed output 
if (isPalindrome(word)){
    console.log(`The word ${word} is palindrome`);
    document.getElementById("isPalindromeOutput").innerHTML = `The word ${word} is palindrome`;
    
}
else {
    console.log(`The word ${word} is not palindrome`);
    document.getElementById("isPalindromeOutput").innerHTML = `The word ${word} is not palindrome`;
}

// Definizione della funzione isPalindrome
function isPalindrome (x){

    let j = x.length -1;
    let palindrome = true;
    for (let i=0; i < x.length / 2 && palindrome === true; i++){
        if (!(x[i] === x[j])){
            palindrome = false;
        }
        j--;
    }
    return palindrome;
}


