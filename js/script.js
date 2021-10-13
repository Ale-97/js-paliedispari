var word = prompt("inserisci una parola");

function palindromo(a){
    var wordReverse = a.split('').reverse().join('');
    return wordReverse;
}

var wordReverse = palindromo(word);

if(word === wordReverse){
    console.log("palindromo");
}else{
    console.log("non è un palindromo");
}

var condition = prompt('Inserisci "pari" o "dispari"');
var playerOne = parseInt(prompt(' ora inserisci un numero che vada da 1 a 5Inserisci"'));

var playerTwo = Math.floor(Math.random() * 5) + 1;
console.log('player two : ' + playerTwo);

if ((playerOne+playerTwo)%2 === 0){
    var result = "pari";
}else{
    var result = "dispari";
}

if(condition === result){
    console.log('hai vinto');
}else{
    console.log('hai perso');
}

