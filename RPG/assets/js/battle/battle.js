// Battle System //
var battle = function() {
  equiptItems();
  upgradeInfo();
  playerStats();
  enemyStats();

  var btn = $("#slot1, #slot2, #slot3, #slot4, #slot5, #slot6, #slot7");
  btn.hide();
  
  //Player Attack //
  $("#skill1").click(function() {
    basicAttackSound();
    basicAttack();
    enemyHp();
    enemyMana();
    playerHp();
    lowHpSound();
    lowManaSound();
    playerStats();
    gameOver();
  });

  $("#skill2").click(function() {
    ruptureSound();
    rupture();
    enemyHp();
    enemyMana();
    playerHp();
    playerMana();
    lowHpSound();
    lowManaSound();
    playerStats();
    gameOver();
  });

  $("#skill3").click(function() {
    knivesSound();
    knives();
    enemyHp();
    enemyMana();
    playerHp();
    playerMana();
    lowHpSound();
    lowManaSound();
    playerStats();
    gameOver();
  });

  $("#skill4").click(function() {
    avatarSound();
    avatar();
    spells[3].cooldown();
    playerHp();
    playerMana();
    lowManaSound();
    playerStats();
  });

  $("#skill5").click(function() {
    enrageSound();
    enrage();
    spells[4].cooldown();
    playerHp();
    playerMana();
    lowManaSound();
    playerStats();
  });

  $("#skill6").click(function() {
    hp();
    playerHp();
    playerStats();
  });

  $("#skill7").click(function() {
    mana();
    playerMana();
    playerStats();
  });

  // Restart Battle //
  $("#reset").click(function() {
    window.location.reload();
  });
}