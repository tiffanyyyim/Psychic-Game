//Creates an array that lists out all of the options (alphabet)
	var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	//Creating variables to hold the number of wins, losses, guesses left, your guesses so far. Wins and losses start at 0, guesses left start at 10 and restart, and your guesses so far display what user enters
	var wins = 0; 
	var losses = 0; 
	var guessesLeft = 10; 
	var guessesSoFar = ""; 

	//This funciton is run whenver the user presses a key
	document.onkeyup = function(event) {

	
		//Determines which key was pressed
		var userGuess = event.key;

		//randomly chooses a choice from the options array. this is the computer's guess
		var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

		//This log determines if the user guess is the same as the computer's guess and increments the appropriate number
		
			//if what the user enters equals what the computer's guess is
			if (userGuess == computerGuess){
				//user wins 1 round
				wins++;

				//guesses left resets
				guessesLeft = 10;

				//guesses so far resets
				guessesSoFar = "";

			//if what the user enters does not equal what the computer's guess is
			}else{
					//user loses the game
				if ( guessesLeft == 1){
						
					//lost count increases by 1
					losses++;

					//guesses left resets
					guessesLeft = 10;

					//guesses so far resets
					guessesSoFar = "";

				}else{
					//number of guesses left decreases by 1
					guessesLeft--;
					
					//add user's guess to the list of guesses so far
					guessesSoFar = userGuess + " " + guessesSoFar + " " ;

				}
			}

			console.log(userGuess)
			console.log(computerGuess) 
	//creating a varible to hold our new html. our html now keeps track of the win/lossess/guesses left and guesses so far 
	var html = 
	"<h1>The Psychic Game</h1>" +
	"<p>Enter a letter guess</p>" +
	"<p>Guess what letter I'm thinking of </p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses left: " + guessesLeft + "</p>" +
	"<p>Guesses so far: " + guessesSoFar + "</p>";

	document.querySelector("#game").innerHTML = html;
};