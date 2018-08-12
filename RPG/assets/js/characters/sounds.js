var sounds = [
  `<audio autoplay><source src="assets/resources/sound/spells/BasicAttack.mp3" type="audio/mpeg"></audio>`,
  `<audio autoplay><source src="assets/resources/sound/spells/Knives.mp3" type="audio/mpeg"></audio>`,
  `<audio autoplay><source src="assets/resources/sound/spells/Rupture.mp3" type="audio/mpeg"></audio>`,
  `<audio autoplay><source src="assets/resources/sound/spells/LowHp.mp3" type="audio/mpeg"></audio>`,
  `<audio autoplay><source src="assets/resources/sound/spells/LowMana.mp3" type="audio/mpeg"></audio>`,
  `<audio autoplay><source src="assets/resources/sound/spells/Win.mp3" type="audio/mpeg"></audio>`,
  `<audio autoplay><source src="assets/resources/sound/spells/Lose.mp3" type="audio/mpeg"></audio>`,
  `<audio autoplay><source src="assets/resources/sound/spells/Enrage.mp3" type="audio/mpeg"></audio>`,
  `<audio autoplay><source src="assets/resources/sound/spells/Avatar.mp3" type="audio/mpeg"></audio>`
]

var basicAttackSound = function() {
  var playerSelectSound = $('.playSound');
  var selectSound = playerSelectSound;
  for (var i = 0; i < playerSelectSound.length; i++) {
    selectSound.html(sounds[0]);
  }
}

var knivesSound = function() {
  if (charSylvanas.select === 1) {
    if (charSylvanas.mana > spells[2].mana) {
      var playerSelectSoundS = $('.playSound');
      var selectSoundS = playerSelectSoundS;
      for (var i = 0; i < playerSelectSoundS.length; i++) {
        selectSoundS.html(sounds[1]);
      }
    } else {
      var playerSelectSoundS2 = $('.playSound');
      var selectSoundS2 = playerSelectSoundS2;
      for (var j = 0; j < playerSelectSoundS2.length; j++) {
        selectSoundS2.html(sounds[4]);
      }
    }
  } else if (charMaiev.select === 1) {
    if (charMaiev.mana > spells[2].mana) {
      var playerSelectSoundM = $('.playSound');
      var selectSoundM = playerSelectSoundM;
      for (var k = 0; k < playerSelectSoundM.length; k++) {
        selectSoundM.html(sounds[1]);
      }
    } else {
      var playerSelectSoundM2 = $('.playSound');
      var selectSoundM2 = playerSelectSoundM2;
      for (var l = 0; l < playerSelectSoundM2.length; l++) {
        selectSoundM2.html(sounds[4]);
      }
    }
  } else if (charIllidan.select === 1) {
    if (charIllidan.mana > spells[2].mana) {
      var playerSelectSoundI = $('.playSound');
      var selectSoundI = playerSelectSoundI;
      for (var m = 0; m < playerSelectSoundI.length; m++) {
        selectSoundI.html(sounds[1]);
      }
    } else {
      var playerSelectSoundI2 = $('.playSound');
      var selectSoundI2 = playerSelectSoundI2;
      for (var n = 0; n < playerSelectSoundI2.length; n++) {
        selectSoundI2.html(sounds[4]);
      }
    }
  }
}

var ruptureSound = function() {
  if (charSylvanas.select === 1) {
    if (charSylvanas.mana > spells[1].mana) {
      var playerSelectSoundS = $('.playSound');
      var selectSoundS = playerSelectSoundS;
      for (var i = 0; i < playerSelectSoundS.length; i++) {
        selectSoundS.html(sounds[2]);
      }
    } else {
      var playerSelectSoundS2 = $('.playSound');
      var selectSoundS2 = playerSelectSoundS2;
      for (var j = 0; j < playerSelectSoundS2.length; j++) {
        selectSoundS2.html(sounds[4]);
      }
    }
  } else if (charMaiev.select === 1) {
    if (charMaiev.mana > spells[1].mana) {
      var playerSelectSoundM = $('.playSound');
      var selectSoundM = playerSelectSoundM;
      for (var k = 0; k < playerSelectSoundM.length; k++) {
        selectSoundM.html(sounds[2]);
      }
    } else {
      var playerSelectSoundM2 = $('.playSound');
      var selectSoundM2 = playerSelectSoundM2;
      for (var l = 0; l < playerSelectSoundM2.length; l++) {
        selectSoundM2.html(sounds[4]);
      }
    }
  } else if (charIllidan.select === 1) {
    if (charIllidan.mana > spells[1].mana) {
      var playerSelectSoundI = $('.playSound');
      var selectSoundI = playerSelectSoundI;
      for (var m = 0; m < playerSelectSoundI.length; m++) {
        selectSoundI.html(sounds[2]);
      }
    } else {
      var playerSelectSoundI2 = $('.playSound');
      var selectSoundI2 = playerSelectSoundI2;
      for (var n = 0; n < playerSelectSoundI2.length; n++) {
        selectSoundI2.html(sounds[4]);
      }
    }
  }
}

var enrageSound = function() {
  if (charSylvanas.select === 1) {
    if (charSylvanas.mana > spells[3].mana) {
      var playerSelectSoundS = $('.playSound');
      var selectSoundS = playerSelectSoundS;
      for (var i = 0; i < playerSelectSoundS.length; i++) {
        selectSoundS.html(sounds[7]);
      }
    } else {
      var playerSelectSoundS2 = $('.playSound');
      var selectSoundS2 = playerSelectSoundS2;
      for (var j = 0; j < playerSelectSoundS2.length; j++) {
        selectSoundS2.html(sounds[4]);
      }
    }
  } else if (charMaiev.select === 1) {
    if (charMaiev.mana > spells[3].mana) {
      var playerSelectSoundM = $('.playSound');
      var selectSoundM = playerSelectSoundM;
      for (var k = 0; k < playerSelectSoundM.length; k++) {
        selectSoundM.html(sounds[7]);
      }
    } else {
      var playerSelectSoundM2 = $('.playSound');
      var selectSoundM2 = playerSelectSoundM2;
      for (var l = 0; l < playerSelectSoundM2.length; l++) {
        selectSoundM2.html(sounds[4]);
      }
    }
  } else if (charIllidan.select === 1) {
    if (charIllidan.mana > spells[3].mana) {
      var playerSelectSoundI = $('.playSound');
      var selectSoundI = playerSelectSoundI;
      for (var m = 0; m < playerSelectSoundI.length; m++) {
        selectSoundI.html(sounds[7]);
      }
    } else {
      var playerSelectSoundI2 = $('.playSound');
      var selectSoundI2 = playerSelectSoundI2;
      for (var n = 0; n < playerSelectSoundI2.length; n++) {
        selectSoundI2.html(sounds[4]);
      }
    }
  }
}

var avatarSound = function() {
  if (charSylvanas.select === 1) {
    if (charSylvanas.mana > spells[4].mana) {
      var playerSelectSoundS = $('.playSound');
      var selectSoundS = playerSelectSoundS;
      for (var i = 0; i < playerSelectSoundS.length; i++) {
        selectSoundS.html(sounds[8]);
      }
    } else {
      var playerSelectSoundS2 = $('.playSound');
      var selectSoundS2 = playerSelectSoundS2;
      for (var j = 0; j < playerSelectSoundS2.length; j++) {
        selectSoundS2.html(sounds[4]);
      }
    }
  } else if (charMaiev.select === 1) {
    if (charMaiev.mana > spells[4].mana) {
      var playerSelectSoundM = $('.playSound');
      var selectSoundM = playerSelectSoundM;
      for (var k = 0; k < playerSelectSoundM.length; k++) {
        selectSoundM.html(sounds[8]);
      }
    } else {
      var playerSelectSoundM2 = $('.playSound');
      var selectSoundM2 = playerSelectSoundM2;
      for (var l = 0; l < playerSelectSoundM2.length; l++) {
        selectSoundM2.html(sounds[4]);
      }
    }
  } else if (charIllidan.select === 1) {
    if (charIllidan.mana > spells[4].mana) {
      var playerSelectSoundI = $('.playSound');
      var selectSoundI = playerSelectSoundI;
      for (var m = 0; m < playerSelectSoundI.length; m++) {
        selectSoundI.html(sounds[8]);
      }
    } else {
      var playerSelectSoundI2 = $('.playSound');
      var selectSoundI2 = playerSelectSoundI2;
      for (var n = 0; n < playerSelectSoundI2.length; n++) {
        selectSoundI2.html(sounds[4]);
      }
    }
  }
}

var lowHpSound = function() {
  if (charSylvanas.select === 1) {
    if (charSylvanas.hp < 25) {
      var playerSelectSoundS = $('.playSound');
      var selectSoundS = playerSelectSoundS;
      for (var i = 0; i < playerSelectSoundS.length; i++) {
        selectSoundS.html(sounds[3]);
      }
    }
  } else if (charMaiev === 1) {
    if (charMaiev.hp < 25) {
      var playerSelectSoundM = $('.playSound');
      var selectSoundM = playerSelectSoundM;
      for (var j = 0; j < playerSelectSoundM.length; j++) {
        selectSoundM.html(sounds[3]);
      }
    }
  } else if (charIllidan.select === 1) {
    if (charIllidan.hp < 25) {
      var playerSelectSoundI = $('.playSound');
      var selectSoundI = playerSelectSoundI;
      for (var k = 0; k < playerSelectSoundI.length; k++) {
        selectSoundI.html(sounds[3]);
      }
    }
  }
}

var lowManaSound = function() {
  if (charSylvanas.select === 1) {
    if (charSylvanas.mana < 10) {
      var playerSelectSoundS = $('.playSound');
      var selectSoundS = playerSelectSoundS;
      for (var i = 0; i < playerSelectSoundS.length; i++) {
        selectSoundS.html(sounds[4]);
      }
    }
  } else if (charMaiev === 1) {
    if (charMaiev.mana < 10) {
      var playerSelectSoundM = $('.playSound');
      var selectSoundM = playerSelectSoundM;
      for (var j = 0; j < playerSelectSoundM.length; j++) {
        selectSoundM.html(sounds[4]);
      }
    }
  } else if (charIllidan.select === 1) {
    if (charIllidan.mana < 10) {
      var playerSelectSoundI = $('.playSound');
      var selectSoundI = playerSelectSoundI;
      for (var k = 0; k < playerSelectSoundI.length; k++) {
        selectSoundI.html(sounds[4]);
      }
    }
  }
}

var winSound = function() {
  var playerSelectSound = $('.playSound');
  var selectSound = playerSelectSound;
  for (var i = 0; i < playerSelectSound.length; i++) {
    selectSound.html(sounds[5]);
  }
}

var loseSound = function() {
  var playerSelectSound = $('.playSound');
  var selectSound = playerSelectSound;
  for (var i = 0; i < playerSelectSound.length; i++) {
    selectSound.html(sounds[6]);
  }
}