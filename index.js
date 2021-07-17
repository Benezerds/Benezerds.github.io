
//The section of the "First" dice image change
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number generator
var firstDiceImage = 'images/dice' + randomNumber1 + '.png'; //example output -> dice1-6.png
document.querySelectorAll ("img")[0].setAttribute("src", firstDiceImage); //src change to according to the variable "firstDiceImage"

//The section of the "Second" dice image change
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var secondDiceImage = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll ("img")[1].setAttribute("src", secondDiceImage);


//Logic for winner 
if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "TIE";
}

else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 WINNER";
}
if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 WINNER";
}

