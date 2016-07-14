
function rollOfDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function player() {
  this.name = name,
  this.totalScore = 0,
  this.currentScore = 0,
  this.turn = true
}

// player.prototype.current = function() {
//   return this.currentScore += rollOfDice
// }
//
// player.prototype.total = function() {
//   this.totalScore += currentScore
// }

$(document).ready(function() {
  var playerInput1 = new player("Player 1", 0, 0, true);
  var playerInput2 = new player("Player 2", 0, 0, false);

  $("button#roll").click(function(event) {
    event.preventDefault();
    var score = rollOfDice(playerInput1, playerInput2);
    if (score === 1) {
      playerInput1.currentScore = 0;
      playerInput1.turn = false;
      playerInput2.turn = true;
      alert("Whoops, lost your turn");
    } else {
      playerInput1.currentScore += score;
      // playerInput2.currentScore += score;
    }
    console.log(playerInput1);
  });

  $("button#hold").click(function(event) {
    event.preventDefault();
    playerInput1.totalScore += playerInput1.currentScore;
    playerInput1.turn = false;
    console.log(playerInput1);
  });

});
