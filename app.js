/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
 */

    
 //Set GAME values here
 const random = Math.floor(Math.random() * 10) + 1;
 let guessCount = 4;

// Set UI elements here as variable here
const inputGuess = document.getElementById('guess-input');
const submit = document.getElementById('guess-value');
const messagePrev = document.querySelector('.message-prev');
const messageWright = document.querySelector('.message-wright');
const messageRandom = document.querySelector('.message-random');

// Assign UI min and max here
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');

// Listen for guess
submit.addEventListener('click', ()=> {
  let guess = Number(inputGuess.value);
  let min = Number(minNum.innerText);
  let max = Number(maxNum.innerText);

  if (guessCount => 0){
    messagePrev.innerHTML = "Remaining Guess: " + guessCount;
  }

  /*- Validate
    - Check if won
      1. Disable input 
      2. Change the border color
      3. Clear the input
      4. call a function name setMessage() here
    - Check else if not won
      1. Wrong Number
      2. Check if guesses is 0
        * Game over -  lost
        * Set the value of button to "Play Again"
      3. Game continues - answer wrong
  */
  if (guess === random){
    inputGuess.disabled = true;
    submit.value = "Play Again";  
    setMessage();
    submit.addEventListener('click', reset);
  }else if (guessCount === 0){
    messageWright.innerHTML = "Game Over!!";
    inputGuess.disabled = true;
    submit.value = "Play Again";
    messageRandom.innerHTML = "The winning number is " + random;
    submit.addEventListener('click', reset);
  }else{
    messageWright.innerHTML = "You are Wrong! ";
    messageWright.style.background = "red";
    messageWright.style.color = "white"; 
  }

  if (guess < min || guess > max){
    messageWright.innerHTML = "Not in the range";
    guessCount++;
  }

  guessCount--;
  inputGuess.focus();
  inputGuess.value = "";
});

function reset() {
  inputGuess.disabled = false;
  submit.value = "Submit";
  messageWright.innerHTML = "";
  messagePrev.innerHTML = "";
  // messageRandom.innerHTML = "";
}

// Set the function setMessage here
  function setMessage() {
    messageWright.innerHTML = "You got it right! ";
    messageWright.style.background = "green";
    messageWright.style.color = "white";
  }