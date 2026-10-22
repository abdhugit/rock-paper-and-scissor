let yourScore = 0;
let opponentScore = 0;

let choices = ["rock", "paper", "scissors"];

function playGame(you) {

    document.getElementById("your-choice").src = you + ".png";

    let opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    // Check winner
    if (you === opponent) {
        document.getElementById("result").innerText = "It's a Draw! 🤝";
    }
    else if (
        (you === "rock" && opponent === "scissors") ||
        (you === "paper" && opponent === "rock") ||
        (you === "scissors" && opponent === "paper")
    ) {
        yourScore++;
        document.getElementById("result").innerText = "You Win! 🎉";
    }
    else {
        opponentScore++;
        document.getElementById("result").innerText = "Computer Wins!";
    }

    // Update scores
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}
