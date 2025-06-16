let start = document.querySelector(".start");
let gbtn = document.querySelectorAll(".game_sign");
let again = document.querySelector(".again");

let count = 0;
let player1 = [];
let player2 = [];

// Game Start Button
start.addEventListener("click", (event) => {
  start.innerText = "STARTED";

  // Player Score & Table Button
  gbtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      // How Many Sign Aleredy Active
      count++;
      // Player 1
      if (count % 2 == 1) {
        btn.innerText = "X";
        btn.style.color = "#00C2C9";
        // Strore Data For Player1
        player1.push(btn.id);
        player1.sort();
        console.log(player1);
      }
      // Player 2
      else {
        btn.innerText = "O";
        btn.style.color = "#F98528";
        // Strore Data For Player2
        player2.push(btn.id);
        player2.sort();
        console.log(player2);
      }

      // Winning Number Comparison With Player Data
      let winningCombinations = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"],
      ];

      for (const set of winningCombinations) {
        let no1 = 0;
        let no2 = 0;
        // Compare with winning
        for (let i = 0; i < 3; i++) {
          if (player1.includes(set[i])) {
            no1++;
          } else if (player2.includes(set[i])) {
            no2++;
          }
        }

        // Winner
        if (no1 == 3) {
          start.innerText = "P-'X' WIN";
          restart();
        } else if (no2 == 3) {
          start.innerText = "P-'O' WIN";
          restart();
        }
      }
    });
  });
});

// Restart Function
function restart() {
  again.addEventListener("click", (event) => {
    location.reload();
  });
}
