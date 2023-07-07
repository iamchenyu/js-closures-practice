// Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. Every time you create a new game, it should select a new random number, and keep it secret from the player.

// Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.

// After a correct guess, the game ends.

function guessingGame() {
  const rand = Math.floor(Math.random() * 100);
  let count = 0;
  let isEnd = false;

  return function (guess) {
    if (!isEnd) {
      if (guess > rand) {
        count++;
        return `${guess} is too high!`;
      } else if (guess < rand) {
        count++;
        return `${guess} is too low!`;
      } else {
        count++;
        isEnd = true;
        return `You win! You found ${rand} in ${count} guesses.`;
      }
    } else {
      return "The game is over, you already won!";
    }
  };
}

module.exports = { guessingGame };
