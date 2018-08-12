// Attack Functions //

var enemyAttack = function() {
  var skillRate = Math.floor(Math.random() * 40);
  var criticalRate = Math.floor(Math.random() * 40);
  var healRate = Math.floor(Math.random() * 40);
  var heal = 25;
  if (charSylvanas.select === 1) {
    var criticalDamageS = enemy.attack - charSylvanas.defense - charSylvanas.resistCriticalDMG + (enemy.criticalDMG * 3);
    var dmgS = enemy.attack + enemy.criticalDMG - charSylvanas.defense - charSylvanas.resistCriticalDMG;
    // Critical Rate & Critical Damage //
    if (criticalRate >= 30) {
      charSylvanas.hp -= criticalDamageS;
      playerHp();
      $("#enemy-logs").prepend("<span class='enemyAttackCritical-logs'>Fasaki deals " + criticalDamageS + " CRITICAL damage!</span><br>");
    } else {
      if (dmgS <= 0) {
        dmgS += 10
        enemyStats();
        charSylvanas.hp -= dmgS;
        $("#enemy-logs").prepend("<span class='enemyAttack-logs'>Fasaki deals " + dmgS + " damage!</span><br>");
        playerHp();
      } else {
        enemyStats();
        charSylvanas.hp -= dmgS;
        $("#enemy-logs").prepend("<span class='enemyAttack-logs'>Fasaki deals " + dmgS + " damage!</span><br>");
        playerHp();
      }
    }
    // Heal Rate & Heal //
    if (healRate >= 30 && enemy.hp < 100) {
      if (enemy.hp > 100) {
        enemy.hp = 100
        enemyStats();
      } else {
        enemyStats();
        playerHp();
        enemy.hp += heal;
        $("#enemy-logs").prepend("<span class='enemyHeal-logs'>Fasaki heals with " + heal + " !</span><br>");
      }
    }
    // Skills  & Buff //
    if (skillRate > 30) {
      var skillDmgS = enemy.attack + enemySpells[1].attack - charSylvanas.defense;
      enemy.mana -= enemySpells[1].mana;
      enemyMana();
      charSylvanas.hp -= skillDmgS;
      $("#enemy-logs").prepend("<span class='enemyHeal-logs'>Fasaki deals " + skillDmgS + " damage with " + enemySpells[1].name + " !</span><br>");
    }
    if (enemy.hp <= 50 && skillRate > 30) {
      if (enemy.hp <= 0) {
        enemy.hp = 0
      } else {
        enemy.hp -= enemySpells[0].hp;
        enemy.mana -= enemySpells[0].mana;
        enemy.attack += enemySpells[0].attack;
        enemy.defense += enemySpells[0].defense;
        enemyStats();
        $("#enemy-logs").prepend("<span class='enemyHeal-logs'>Fasaki casted " + enemySpells[0].name + " ! Enemy HP decreased with " + enemySpells[0].hp + "! <br> Attack increased with " + enemySpells[0].attack + " !<br> Defense increased with " + enemySpells[0].defense + " !</span><br>");
        $(".enemy-buff").prepend("<span class='m-1' id='berserk-cd'>" + enemySpells[0].icon + "</span>");
      }

    }
  } else if (charMaiev.select === 1) {
    var criticalDamageM = enemy.attack - charMaiev.defense - charMaiev.resistCriticalDMG + (enemy.criticalDMG * 2);
    var dmgM = enemy.attack + enemy.criticalDMG - charMaiev.defense - charMaiev.resistCriticalDMG;
    // Critical Rate & Critical Damage //
    if (criticalRate >= 30) {
      charMaiev.hp -= criticalDamageM;
      $("#enemy-logs").prepend("<span class='enemyAttackCritical-logs'>Fasaki deals " + criticalDamageM + " CRITICAL damage!</span><br>");
      playerHp();
    } else {
      if (dmgM <= 0) {
        dmgM += 10
        enemyStats();
      } else {
        charMaiev.hp -= dmgM;
        $("#enemy-logs").prepend("<span class='enemyAttack-logs'>Fasaki deals " + dmgM + " damage!</span><br>");
        playerHp();
      }
    }
    // Heal Rate & Heal //
    if (healRate >= 30 && enemy.hp < 100) {
      enemy.hp += heal;
      enemyHp();
      $("#enemy-logs").prepend("<span class='enemyHeal-logs'>Fasaki heals with " + heal + " !</span><br>");
    }
    // Skills  & Buff //
    if (skillRate > 30) {
      var skillDmgM = enemy.attack + enemySpells[1].attack - charMaiev.defense;
      enemy.mana -= enemySpells[1].mana;
      enemyMana();
      charMaiev.hp -= skillDmgM;
      $("#enemy-logs").prepend("<span class='enemyHeal-logs'>Fasaki deals " + skillDmgM + " damage with " + enemySpells[1].name + " !</span><br>");
    }
    if (enemy.hp < 50 && skillRate > 30) {
      if (enemy.hp <= 0) {
        enemy.hp = 0
      } else {
        enemy.hp -= enemySpells[0].hp;
        enemy.mana -= enemySpells[0].mana;
        enemy.attack += enemySpells[0].attack;
        enemy.defense += enemySpells[0].defense;
        enemyStats();
        $("#enemy-logs").prepend("<span class='enemyHeal-logs'>Fasaki casted " + enemySpells[0].name + " ! Enemy HP decreased with " + enemySpells[0].hp + "! <br> Attack increased with " + enemySpells[0].attack + " !<br> Defense increased with " + enemySpells[0].defense + " !</span><br>");
        $(".enemy-buff").prepend("<span class='m-1' id='berserk-cd'>" + enemySpells[0].icon + "</span>");
      }
    }
  } else if (charIllidan.select === 1) {
    var criticalDamageI = enemy.attack - charIllidan.defense - charIllidan.resistCriticalDMG + (enemy.criticalDMG * 2);
    var dmgI = enemy.attack + enemy.criticalDMG - charIllidan.defense - charIllidan.resistCriticalDMG;
    // Critical Rate & Critical Damage //
    if (criticalRate >= 30) {
      charIllidan.hp -= criticalDamageI;
      $("#enemy-logs").prepend("<span class='enemyAttackCritical-logs'>Fasaki deals " + criticalDamageI + " CRITICAL damage!</span><br>");
    } else {
      if (dmgI <= 0) {
        dmgI += 10
        enemyStats();
      } else {
        charIllidan.hp -= dmgI;
        $("#enemy-logs").prepend("<span class='enemyAttack-logs'>Fasaki deals " + dmgI + " damage!</span><br>");
        playerHp();
      }
    }
    // Heal Rate & Heal //
    if (healRate >= 30 && enemy.hp < 100) {
      enemy.hp += heal;
      enemyHp();
      $("#enemy-logs").prepend("<span class='enemyHeal-logs'>Fasaki heals with " + heal + " !</span><br>");
    }
    // Skills  & Buff //
    if (skillRate > 30) {
      var skillDmgI = enemy.attack + enemySpells[1].attack - charIllidan.defense;
      enemy.mana -= enemySpells[1].mana;
      enemyMana();
      charIllidan.hp -= skillDmgI;
      $("#enemy-logs").prepend("<span class='enemyHeal-logs'>Fasaki deals " + skillDmgI + " damage with " + enemySpells[1].name + " !</span><br>");
    }
    if (enemy.hp < 50 && skillRate > 30) {
      if (enemy.hp <= 0) {
        enemy.hp = 0
      } else {
        enemy.hp -= enemySpells[0].hp;
        enemy.mana -= enemySpells[0].mana;
        enemy.attack += enemySpells[0].attack;
        enemy.defense += enemySpells[0].defense;
        enemyStats();
        $("#enemy-logs").prepend("<span class='enemyHeal-logs'>Fasaki casted " + enemySpells[0].name + " ! Enemy HP decreased with " + enemySpells[0].hp + "! <br> Attack increased with " + enemySpells[0].attack + " !<br> Defense increased with " + enemySpells[0].defense + " !</span><br>");
        $(".enemy-buff").prepend("<span class='m-1' id='berserk-cd'>" + enemySpells[0].icon + "</span>");
      }
    }
  }
  gameOver();
}


var startBattle;
var counter = 6;
var battleCountdown;

function start() {
  $("#enemy-button").hide();
  $("#reset-button").hide();
  battleCountdown = setInterval(function() {
    counter--
    if (counter === 5) {
      $("#char-logs").prepend(`<audio autoplay><source src="assets/resources/sound/countdown/5.mp3" type="audio/mpeg"></audio>`)
    } else if (counter === 4) {
      $("#char-logs").prepend(`<audio autoplay><source src="assets/resources/sound/countdown/4.mp3" type="audio/mpeg"></audio>`)
    } else if (counter === 3) {
      $("#char-logs").prepend(`<audio autoplay><source src="assets/resources/sound/countdown/3.mp3" type="audio/mpeg"></audio>`)
    } else if (counter === 2) {
      $("#char-logs").prepend(`<audio autoplay><source src="assets/resources/sound/countdown/2.mp3" type="audio/mpeg"></audio>`)
    } else if (counter === 1) {
      $("#char-logs").prepend(`<audio autoplay><source src="assets/resources/sound/countdown/1.mp3" type="audio/mpeg"></audio>`)
    }
    $("#char-logs").prepend("<p style='color:red'>The battle starts in " + counter + " seconds!</p>");
    if (counter === 0) {
      $("#char-logs").prepend(`<audio autoplay><source src="assets/resources/sound/countdown/BattleStart.mp3" type="audio/mpeg"></audio>`)
      var btn = $("#slot1, #slot2, #slot3, #slot4, #slot5, #slot6, #slot7");
      btn.show();
      startBattle = setInterval(enemyAttack, 2000);
      $("#char-logs").prepend("<p>Fight!</p>");
      clearInterval(battleCountdown);
    }
  }, 1000)

}

function stop() {
  clearInterval(startBattle);
}