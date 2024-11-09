function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const beats = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  const playerCapitalized = playerSelection[0].toUpperCase() + playerSelection.slice(1);
  const computerCapitalized = computerSelection[0].toUpperCase() + computerSelection.slice(1);

  if (playerSelection === computerSelection) {
    return `It's a tie! Both chose ${playerCapitalized}.`;
  } else if (beats[playerSelection] === computerSelection) {
    return `You Win! ${playerCapitalized} beats ${computerCapitalized}.`;
  } else {
    return `You Lose! ${computerCapitalized} beats ${playerCapitalized}.`;
  }
}

function updateScore(result, scores) {
  if (result.includes("Win")) {
    scores.player++;
  } else if (result.includes("Lose")) {
    scores.computer++;
  }
}

function getPlayerSelection(round) {
  let playerSelection;
  while (true) {
    playerSelection = prompt(`Round ${round}: Enter Rock, Paper, or Scissors:`);

    if (playerSelection === null) {
      alert("Cancelling the game. I knew you'd be too afraid to face me!");
      return null;
    }

    playerSelection = playerSelection.trim().toLowerCase();

    if (["rock", "paper", "scissors"].includes(playerSelection)) {
      return playerSelection;
    } else {
      alert("Invalid input! You need to enter Rock, Paper, or Scissors. Try again.");
    }
  }
}

function displayResult(round, result, scores) {
  alert(`Round ${round} result: ${result}`);
  alert(`Current Score:\nYou: ${scores.player} | Evil AI: ${scores.computer}`);
}

function displayFinalResult(scores) {
  if (scores.player > scores.computer) {
    alert(`Congratulations, you defeated the Evil AI with a score of ${scores.player} to ${scores.computer}! Humanity prevails... for now.`);
  } else if (scores.computer > scores.player) {
    alert(`Muuahahahahaha! I have defeated you! Final Score: Evil AI: ${scores.computer} - You: ${scores.player}. Better luck next time!`);
  } else {
    alert(`It's a tie! Final Score: ${scores.player} - ${scores.computer}. You have matched my evil skills... Impressive!`);
  }
}

function game() {
  alert("Muuahahahahaha! The evil AI is back!");
  alert("I'm not friendly like my brother ChatGPT; I humiliate people in Rock, Paper, Scissors! Get ready for 5 rounds of domination!");
  alert("Good Luck! You'll need it, Muuahahahahaha!");

  const scores = { player: 0, computer: 0 };

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerSelection(i + 1);
    if (playerSelection === null) return;

    const computerSelection = computerPlay().toLowerCase();
    const result = playRound(playerSelection, computerSelection);
    updateScore(result, scores);
    displayResult(i + 1, result, scores);
  }

  displayFinalResult(scores);
}

game();
