Behavior:
If the player rolls a 1, they score nothing and it becomes the next player's turn.
input example: 1
output example: score += 0

If the player rolls any other number, it is added to their turn total and the player's turn continues.
input example: 2
output example: score += 2

If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
input example: 2, 3, hold
output example: score += 5

The first player to score 100 or more points wins.
input example = score = 100
output example = "Player Wins!"
