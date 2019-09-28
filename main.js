let randomNumber = Math.floor(Math.random() * 100)
let count = 0;


function difference(a, b) {
    return Math.abs(a - b);
  }

function resetOption(){
    count= 0;
    randomNumber = Math.floor(Math.random() * 100)
    document.getElementById("numberofGuess").innerHTML= `<p>Guess #: ${count}</p>`;
    

}

function guessOption(){
count = count +1;
document.getElementById("numberofGuess").innerHTML= `<p>Guess #: ${count}</p>`;

    let userNumber = document.getElementById('numberGuess').value; 

    if( userNumber > 100 || userNumber < 1) {
        document.getElementById("typeofGuess").innerHTML ="Not Valid";
    } 
    
    else if( difference(randomNumber,userNumber) > 50) {
        document.getElementById("typeofGuess").innerHTML ="Freezing!";
    } 
    else if( difference(randomNumber,userNumber) >20 && difference(randomNumber,userNumber) <49) {
        document.getElementById("typeofGuess").innerHTML ="Cold!";
    } 
    else if( difference(randomNumber,userNumber) >10 && difference(randomNumber,userNumber) <19) {
        document.getElementById("typeofGuess").innerHTML ="Warm!";
    } 
    else if( difference(randomNumber,userNumber) >5 && difference(randomNumber,userNumber) <9) {
        document.getElementById("typeofGuess").innerHTML ="Hot!";
    } 
    else if( difference(randomNumber,userNumber) <4 && difference(randomNumber,userNumber) > 1 ) {
        document.getElementById("typeofGuess").innerHTML ="Boiling!";
    } 
    
    
}

