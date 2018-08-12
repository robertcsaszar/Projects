// Game Over function //
  var gameOver = function() {
    var btn = $("#slot1, #slot2, #slot3, #slot4, #slot5, #slot6, #slot7");
    if(charSylvanas.select === 1) {
      if (charSylvanas.hp <= 0 && enemy.hp <= 0) {
        $("#char-logs").prepend("<p>It's a draw! Too bad you still died! Game Over!</p>");
        stop();
        btn.hide();
        $("#reset").show();
      } else if (charSylvanas.hp <= 0) {
        charSylvanas.hp = 0
        playerStats();
        loseSound();
        enemyStats();
        $("#enemy-logs").prepend("<p>You Lose! Game Over!</p>");
        stop();
        btn.hide();
        $("#reset").show();
      } else if (enemy.hp <= 0) {
        enemy.hp = 0
        enemyStats();
        winSound();
        money();
        xp();
        levelUp();
        playerStats();
        $("#char-logs").prepend("<p>Congratulations! You Win!</p>");
        $("#enemy-logs").prepend("<p>Fasaki is dead!</p>");
        stop();
        btn.hide();
        $("#reset").show();
      }
    } else if(charMaiev.select === 1) {
      if (charMaiev.hp <= 0 && enemy.hp <= 0) {
        $("#char-logs").prepend("<p>It's a draw! Too bad you still died! Game Over!</p>");
        btn.hide();
        stop();
        $("#reset").show();
      } else if (charMaiev.hp <= 0) {
        playerStats();
        loseSound();
        enemyStats();
        $("#enemy-logs").prepend("<p>You Lose! Game Over!</p>");
        stop();
        btn.hide();
        $("#reset").show();
      } else if (enemy.hp <= 0) {
        enemy.hp = 0
        enemyStats();
        winSound();
        money();
        xp();
        levelUp();
        playerStats();
        $("#char-logs").prepend("<p>Congratulations! You Win!</p>");
        $("#enemy-logs").prepend("<p>Fasaki is dead!</p>");
        stop();
        btn.hide();
        $("#reset").show();
      }
    } else if(charIllidan.select === 1) {
      if (charIllidan.hp <= 0 && enemy.hp <= 0) {
        $("#char-logs").prepend("<p>It's a draw! Too bad you still died! Game Over!</p>");
        btn.hide();
        stop();
        $("#reset").show();
      } else if (charIllidan.hp <= 0) {
        playerStats();
        loseSound();
        enemyStats();
        $("#enemy-logs").prepend("<p>You Lose! Game Over!</p>");
        stop();
        btn.hide();
        $("#reset").show();
      } else if (enemy.hp <= 0) {
        enemy.hp = 0
        enemyStats();
        winSound();
        money();
        xp();
        levelUp();
        playerStats();
        $("#char-logs").prepend("<p>Congratulations! You Win!</p>");
        $("#enemy-logs").prepend("<p>Fasaki is dead!</p>");
        stop();
        btn.hide();
        $("#reset").show();
      }
    }
  }