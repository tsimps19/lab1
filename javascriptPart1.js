

var game = prompt("Do you want to play the game?")


if (game.toLowerCase() === "yes") {
  var username = prompt ("name");

  var userHealth = 40;
  var GrantHealth = 10;
  var wins = 0

  while (wins < 3 && userHealth >= 0) {
    userHealth -= Math.floor(Math.random() * 2) + 1;
    GrantHealth -= Math.floor(Math.random() * 2) + 1;
    console.log(username + ' has ' + userHealth + ' health left');
    // `${username} has ${userHealth} health left`
    console.log('Grants remaining Health', GrantHealth);
    if (GrantHealth <= 0) {
      wins++;
      GrantHealth = 10;
    }
  }

  if (wins === 3) {
    console.log(username + ' is the winner');
  } else {
    console.log('Grant wins and you suck');
  }
}
