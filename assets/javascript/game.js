    //Possible words to get
    var possibleWords = ["Drone", "Aeronyde", "Unmanned", "Autonomous", "Limitless"];

  // create alphabet ul
 var word = possibleWords [Math.floor (Math.random() * possibleWords.length)];

 var answerArray = [];
 for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
 }

 var remainingLetters = word.length;

 while (remainingLetters > 0) {
     var el = document.getElementById ("demo");
     el.innerHTML = answerArray.join(" ");

var guess = prompt ("Press any key to get started!");
if (guess === null){
    break;
} else {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess){
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}
 }

console.log (possibleWords);