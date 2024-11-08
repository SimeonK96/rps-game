function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    const beats = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock",
    };
  
    if (playerSelection === computerSelection) {
      return `It's a tie! Both chose ${capitalize(playerSelection)}.`;
    } else if (beats[playerSelection] === computerSelection) {
      return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    } else {
      return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    }
  }


  function game() {
    alert("Muuahahahahaha! The evil AI is back!");
    alert("I'm not friendly like my brother ChatGPT; I humiliate people in Rock, Paper, Scissors! Get ready for 5 rounds of domination!");
    alert("Good Luck! You'll need it, Muuahahahahaha!");
  
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt(`Round ${i + 1}: Enter Rock, Paper, or Scissors:`);
      const computerSelection = computerPlay();
  
      if (!["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
        alert("Invalid input! You need to enter Rock, Paper, or Scissors. Try again.");
        i--;
        continue;
      }
  
      const result = playRound(playerSelection, computerSelection);
      alert(`Round ${i + 1} result: ${result}`);
  
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
  
      alert(`Current Score:\nYou: ${playerScore} | Evil AI: ${computerScore}`);
    }
  
    if (playerScore > computerScore) {
      alert(`Congratulations, you defeated the Evil AI with a score of ${playerScore} to ${computerScore}! Humanity prevails... for now.`);
    } else if (computerScore > playerScore) {
      alert(`Muuahahahahaha! I have defeated you! Final Score: Evil AI: ${computerScore} - You: ${playerScore}. Better luck next time!`);
    } else {
      alert(`It's a tie! Final Score: ${playerScore} - ${computerScore}. You have matched my evil skills... Impressive!`);
    }
  }
  
  game();
  