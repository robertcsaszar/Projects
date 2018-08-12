var xp = function() {
  var xpRate = Math.floor(Math.random() * 25);
  if(charSylvanas.select === 1) {
    charSylvanas.xp += xpRate;
    var xpRatePercentS = Number(charSylvanas.xp/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    $(".xp-bar").css("width", xpRatePercentS)
    $("#char-logs").prepend("Character received " + xpRate +" xp! <br>")
  } else if(charMaiev.select === 1) {
    charMaiev.xp += xpRate;
    var xpRatePercentM = Number(charMaiev.xp/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    $(".xp-bar").css("width", xpRatePercentM)
    $("#char-logs").prepend("Character received " + xpRate +" xp! <br>")
  } else if(charIllidan.select === 1) {
    charIllidan.xp += xpRate;
    var xpRatePercentI = Number(charIllidan.xp/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    $(".xp-bar").css("width", xpRatePercentI)
    $("#char-logs").prepend("Character received " + xpRate +" xp! <br>")
  }
}

var levelUp = function() {
  if(charSylvanas.select === 1) {
    if(charSylvanas.xp >= 100) {
      charSylvanas.level++
      charSylvanas.xp = 0
      charSylvanas.attack += 5
      charSylvanas.defense += 2
      $("#char-logs").prepend("Player Level Up!<br>")
      playerStats();
    }
  } else if(charMaiev.select === 1) {
    if(charMaiev.xp >= 100) {
      charMaiev.level++
      charMaiev.xp = 0
      charMaiev.attack += 5
      charMaiev.defense += 2
      $("#char-logs").prepend("Player Level Up!<br>")
      playerStats();
    }
  } else if(charIllidan.select === 1) {
    if(charIllidan.xp >= 100) {
      charIllidan.level++
      charIllidan.xp = 0
      charIllidan.attack += 5
      charIllidan.defense += 2
      $("#char-logs").prepend("Player Level Up!<br>")
      playerStats();
    }
  }
}