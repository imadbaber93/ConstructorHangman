var inquirer = require("inquirer");
var words = ['doggy','kitty'];
var randomWord = words[Math.floor(Math.random()*words.length)];
var dogArray = 'doggy'.split('');
var catArray = 'kitty'.split('');
//console.log(randomWord);
var underscores = '_ _ _ _ _'
var underscoresArray = underscores.split(" ");
//console.log(underscoresArray);
var attempts = 5;
var counter = function(){
 	console.log("Incorrect. "+ attempts + " attempts remaining.");
 	playGame();
	}

var playGame = function(){
	if(randomWord == 'doggy'){
		var doggy = function(){	
	 		inquirer.prompt({
			name:"letter",
			message: "Guess a letter!: "	
		}).then(function(answer){			
			if (answer.letter == 'd'){			
				underscoresArray.shift();
				underscoresArray.unshift("d");					
			//x = true;
			//break;
				console.log(underscoresArray);
				doggy();
		}
			else if (answer.letter == 'o'){			
				underscoresArray.splice(1,1,'o');
				console.log(underscoresArray);
				//x = true;
				doggy();
			}
			else if (answer.letter == 'g'){			
				underscoresArray.splice(2,2,'g','g');
				console.log(underscoresArray);
				//x = true;
				doggy();			
			}
			else if (answer.letter == 'y'){			
				underscoresArray.splice(4,1,'y');
				console.log(underscoresArray);
				//x = true;
				doggy();
			}
			//if else (answer.letter == 'g')				
			else{
				attempts--;
				counter();
			};	
		if (attempts == 0){
			console.log("You lose!");	
			process.exit();
		}
		// if (underscoresArray == dogArray){
		// 	console.log('WINNER!');
		// 	process.exit();
		// }		
	});	
	doggy();
	}	
	}	
	else if(randomWord == 'kitty'){
	var kitty = function(){	
		 inquirer.prompt({
		name:"letter",
		message: "Guess a letter!: "	
	}).then(function(answer){			
			if (answer.letter == 'k'){			
				underscoresArray.shift();
				underscoresArray.unshift("k");					
				//x = true;
				//break;
				console.log(underscoresArray);
				kitty();
			}
			else if (answer.letter == 'i'){			
				underscoresArray.splice(1,1,'i');
				console.log(underscoresArray);
				//x = true;
				kitty();
			}
			else if (answer.letter == 't'){			
				underscoresArray.splice(2,2,'t','t');
				console.log(underscoresArray);
				//x = true;
				kitty();			
			}
			else if (answer.letter == 'y'){			
				underscoresArray.splice(4,1,'y');
				console.log(underscoresArray);
				//x = true;
				kitty();
			}
			//if else (answer.letter == 'g')				
			else{
				attempts--;
				counter();
			};	
			if (attempts == 0){
				console.log("You lose!");	
				process.exit();
			}
			// if (underscoresArray == catArray){
			// 	console.log('WINNER!');
			// 	process.exit();
			// }
		});
		}
		kitty();
	}		
	}
playGame();