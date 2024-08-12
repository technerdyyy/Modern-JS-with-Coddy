/*  We're building a team of 5 players. Let's assume you can remove, add and shift a player to a different position if their performance excels.

Create an array named team containing the names of 5 players.

The last player on the list is underperforming and needs to be removed, Remove the last player.

You have to expand the team by adding two new players in the list. Add two new players in the list.

The first player on the list is performing exceptionally well, you need to move(shift) the player from the list to confirm. shift first player to qualified players list.

Finally, determine the current team size in need of retraining. (Log the team size)
*/

// Create an array containing the names of 5 players
let team = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Remove the last player from the list
team.pop(); // Removes 'Eve'

// Add two new players to the team
team.push("Frank", "Grace");

// Move the first player to the qualified players list
let qualifiedPlayers = [];
qualifiedPlayers.push(team.shift()); // Removes 'Alice' and adds to qualifiedPlayers

// Step 5: Determine the current team size and log it
console.log("Current team size in need of retraining:", team.length);
console.log("Qualified players:", qualifiedPlayers);
console.log("Updated team:", team);
