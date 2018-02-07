class Computer{
  constructor(name, health){
  this.name = name;
  this.health = health;

}
  generateAttackDamage(){
    return getRamdomInt(1,3);

  }
}

class Character extends Computer {
  constructor(name, health, healsRemaining, wins) {
    super(name, health);
    this.healsRemaining = healsRemaining;
    this.wins = 0;

  }

  generateAttackDamage() {
    return getRamdomInt(1,3);
  }

  heal() {
    this.heath += getRamdomInt(1, 10);
    this.healsRemaining--;
  }

}
function startGame () {
   var game = prompt("Do you want to play the game?");
  if (game.toLowerCase() === "yes") {
    var user = prompt ('Whats your username');
    startCombat (user);
} else {
  console.log('You decided not to play');
}
}
startGame();
function startCombat (username) {
  var grant = new Computer ('Grant', 10);
  var user = new Character(username, 40, 2);
  while (user.wins < 5 && user.health > 0) {
     var response = prompt("Do you want to 'attack' or 'quit' or 'heal'?");
   if (response.toLowerCase() === "quit"){
console.log('YOU QUIT');
return;
}

if(response.toLowerCase() === 'attack') {
  user.health -= grant.generateAttackDamage();
  grant.health -= user.generateAttackDamage();
  console.log(`${user.name} is at ${user.health} health count`);
  console.log(`${grant.name} is at ${grant.health} health count`);

} else if  (response.toLowerCase () === 'heal' && user.healsRemaining) {
  user.heal();
  console.log(`${user.name} healed at ${user.health} health count`);
} else if (response.toLowerCase () === 'heal' && user.healsRemaininag){
console.log(`${user.name} has user.healsRemaining`);
} else {
  console.log('you must choose between \'attack\', \'heal\', or \'quit\'');
  continue;
}

if (grant.health <= 0) {
      user.wins++;
      grant.health = 10;
      console.log(`${user.name} wins the game`);
  }
}
  if (user.wins === 5) {
    console.log(user.name + ' is the winner');
  } else {
    console.log('enemy wins and you suck');
  }
}
function getRamdomInt (min, max) {
  return Math.floor(Math.random() * max) + min;
