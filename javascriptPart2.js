
startGame();

function startGame () {
   var game = prompt("Do you want to play the game?");
  if (game.toLowerCase() === "yes") {
    var user = prompt ('Whats your username');
    startCombat (user);
}
}

function startCombat (username) {

  var userHealth = 40;
  var GrantHealth = 10;
  var wins = 0;

  while (wins < 3 && userHealth >= 0) {
userHealth -= getDamage();
GrantHealth -= getDamage();
console.log(username + ' has ' + userHealth + ' health left');
     `${username} has ${userHealth} health left`
    console.log('Grants remaining Health', GrantHealth);
     if (GrantHealth <= 0) {
      wins++;
      GrantHealth = 10;
    }
    var decide = prompt("Do you want to 'attack' or 'quit'?");
   if (decide.toLowerCase() !== "attack") {
     console.log('YOU QUIT');
     return;
   }

  }
  if (wins === 3) {
    console.log(username + ' is the winner');
  } else {
    console.log('Grant wins and you suck');

  }

}
function getDamage () {
  return Math.floor(Math.random() * 5) + 1;

}
