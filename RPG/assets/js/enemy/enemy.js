// Enemy //
var enemy = {
  hp: 100,
  mana: 100,
  attack: 36,
  defense: 40,
  criticalDMG: 10,
  resistCriticalDMG: 5,
  level: 1
};

// Enemy stats //
var enemyStats = function() {
  $("#enemyLevel").html(enemy.level)
  $("#enemyAttack").html(enemy.attack)
  $("#enemyDef").html(enemy.defense)
  $("#enemyCrit").html(enemy.criticalDMG)
  $("#enemyCritResist").html(enemy.resistCriticalDMG)
}

// Enemy functions //
var enemyLevelUp = function() {
  enemy.level++;
  enemy.attack += 5;
  enemy.defense += 5;
  enemy.criticalDMG += 3;
  enemy.resistCriticalDMG += 2;
  enemyStats();
}

var resetStats = function() {
  enemy.level = 1;
  enemy.attack = 36;
  enemy.defense = 40;
  enemy.criticalDMG = 10;
  enemy.resistCriticalDMG = 5;
  enemyStats();
}

// Enemy Hp & Mana bar //
var enemyHp = function() {
  var hp = Number(enemy.hp / 100).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2
  });
  $(".enemy-hp").css("width", hp);
  $("#enemyShowHp").text(hp);
}

var enemyMana = function() {
  var mana = Number(enemy.mana / 100).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2
  });
  $(".enemy-mana").css("width", mana);
  $("#enemyShowMana").text(mana)
}