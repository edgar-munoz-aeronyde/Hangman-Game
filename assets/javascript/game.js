// 1.    Pick a random word.

// 2.    Take the player’s guess.

// 3.    Quit the game if the player wants to.

// 4.    Check that the player’s guess is a valid letter.

// 5.    Else Show Hangman Image (1,2,3,4,5)

// 6.    Keep track of letters the player has guessed.

// 7.    Show the player their progress.

// 8.    Finish when the player has guessed the word.


// VARIABLES
// ==========================================================================

var winCount = document.getElementById("win_count");
var current = document.getElementById("current_word");
var guessesLeft = document.getElementById("guesses_left");
var lettersGuessed = document.getElementById("letters_guessed");


var aeronyde = {

    listOfWords: ["drone", "aeronyde", "unmanned", "autonomous", "limitless"],

    pickedWord: '',
    wins: 0,
    losses: 0,
    guessedLetters: [],
    guessRemaining: 0,
    placeHolder: '',
    dashes: "_",
    buffer: -2,

    gameStart: function () {
        writeDocument();
    },

    gameReset: function () {
        this.guessedLetters = [];
        this.pickedWord = this.listOfWords[Math.floor(Math.random() * this.listOfWords.length)];
        this.guessRemaining = this.pickedWord.length + this.buffer;
        this.placeHolder = this.dashes.repeat(this.pickedWord.length);
        console.log("current word: " + this.pickedWord);
    },

    userInput: function (letterGuessed) {

        if (this.guessedLetters.indexOf(letterGuessed) == -1) {
            if (this.pickedWord.includes(letterGuessed)) {

                var characterArray = this.placeHolder.split('');

                for (var i = 0; i < this.pickedWord.length; i++) {
                    if (this.pickedWord[i] === letterGuessed) {
                        characterArray[i] = letterGuessed;
                    }
                }
                this.placeHolder = characterArray.join('');

                if (this.pickedWord === this.placeHolder) {
                    this.wins++;
                    this.gameReset();
                }

            } else {
                this.guessedLetters.push(letterGuessed);
                this.guessRemaining--;

                if (this.guessRemaining == 0) {
                    alert("You lose!");
                    this.losses++;
                    this.gameReset();
                }
            }

            writeDocument();

        }

    }

};

aeronyde.gameReset();

aeronyde.gameStart();

function writeDocument() {
    winCount.textContent = aeronyde.wins;
    current.textContent = aeronyde.placeHolder.split('').join(" ");
    guesses_left.textContent = aeronyde.guessRemaining;
    lettersGuessed.textContent = aeronyde.guessedLetters.join(" ");
}


document.onkeyup = function (event) {

    var characterGuess = event.key;

    aeronyde.userInput(characterGuess);
}