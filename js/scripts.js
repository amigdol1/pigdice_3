
function rollOfDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function Player(name) {
  this.name = name,
  this.totalScore = 0,
  this.currentScore = 0,
  this.turn = false
}

Player.prototype.roll = function() {
 var score = rollOfDice();
  if (this.totalScore >= 100) {
    alert("You win!");
  } else if (score === 1) {
    this.currentScore = 0;
    this.turn = false;
    alert("Whoops, lost your turn");
    return false;
  } else {
    this.currentScore += score;
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.currentScore;
  this.turn = false;
  this.currentScore = 0;
}

$(document).ready(function() {
  var playerInput1 = new Player("Player 1");
  var playerInput2 = new Player("Player 2");
  playerInput1.turn = true;

  $("button#roll").click(function() {
    if (playerInput1.turn === true) {
      if (playerInput1.roll() === false) {
        playerInput2.turn = true;
      } else {
        playerInput1.turn = true;
      }
    } else {
      if (playerInput2.roll() === false) {
        playerInput1.turn = true;
      } else {
        playerInput2.turn = true;
      }
    }
    console.log(playerInput1);
    console.log(playerInput2);
  });

  $("button#hold").click(function() {
    if (playerInput1.turn === true) {
      playerInput1.hold();
      playerInput2.turn = true;
    } else {
      playerInput2.hold();
      playerInput1.turn = true;
    }

    console.log(playerInput1);
    console.log(playerInput2);
  });

//   if (playerInput1.turn = false) {
//     $("button#hold").click(function() {
//       return playerInput2;
//   });
// }

});
