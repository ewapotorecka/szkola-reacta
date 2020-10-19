const readline = require( 'readline' );

function randomNumberGuessing() {
	const number = Math.ceil( Math.random() * 10 );
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	  });

	  rl.question( 'Guess a number between 1 and 10', ( answer ) => {
		  if ( answer == number ) {
			  console.log( 'Great job! You guessed the number!' );
		  } else {
			  console.log( 'That was not the number. Try again.' );
		  }
		  rl.close();
	  } );
}

randomNumberGuessing();
