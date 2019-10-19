
var answer = Math.floor(Math.random() * (6 - 1)) + 1;
//console.log(answer)

alert('Guess number between 1 to 5');
let guess = prompt('Please enter a number');

for (i = 1; i <= 5; i++) {
  if (parseInt(guess) === answer) {
    alert('Congratulation! you got it.')
    break;
  }
  else {
    if (answer < guess) {
      guess = prompt('You guessed high, try again!')
    }
    else {
      guess = prompt('You guessed low, try again!')
    }
  }
}



