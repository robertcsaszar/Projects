// Character Spells //
var spells = [{
    name: "Basic Attack",
    damage: 10,
    trigger: function() {
      if (charSylvanas.select === 1) {
        var dmgSylv = spells[0].damage + charSylvanas.attack
        enemy.hp -= dmgSylv;
        $("#char-logs").prepend(charSylvanas.name + " deals " + dmgSylv + " damage with " + spells[0].name + " !<br>");
      } else if (charMaiev.select === 1) {
        var dmgMaiev = spells[0].damage + charMaiev.attack
        enemy.hp -= dmgMaiev;
        $("#char-logs").prepend(charMaiev.name + " deals " + dmgMaiev + " damage with " + spells[0].name + " !<br>");
      } else if (charIllidan.select === 1) {
        var dmgIllidan = spells[0].damage + charIllidan.attack
        enemy.hp -= dmgIllidan;
        $("#char-logs").prepend(charIllidan.name + " deals " + dmgIllidan + " damage with " + spells[0].name + " !<br>");
      } else {
        $("#char-logs").prepend("There is no character selected! Please select a character.");
      }
    }
  },

  {
    name: "Rupture",
    damage: 15,
    mana: 10,
    trigger: function() {
      if (charSylvanas.select === 1) {
        if (charSylvanas.mana > spells[1].mana) {
          var dmgSyl = spells[1].damage + charSylvanas.attack
          enemy.hp -= spells[1].damage;
          charSylvanas.mana -= spells[1].mana;
          $("#char-logs").prepend("<span class='skill-logs'>" + charSylvanas.name + " deals " + dmgSyl + " damage with " + spells[1].name + " !</span><br>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      } else if (charMaiev.select === 1) {
        if (charMaiev.mana > spells[1].mana) {
          var dmgMaiev = spells[1].damage + charMaiev.attack
          enemy.hp -= spells[1].damage;
          charMaiev.mana -= spells[1].mana;
          $("#char-logs").prepend("<span class='skill-logs'>" + charMaiev.name + " deals " + dmgMaiev + " damage with " + spells[1].name + " !</span><br>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      } else if (charIllidan.select === 1) {
        if (charIllidan.mana > spells[1].mana) {
          var dmgIllidan = spells[1].damage + charIllidan.attack
          enemy.hp -= spells[1].damage;
          charIllidan.mana -= spells[1].mana;
          $("#char-logs").prepend("<span class='skill-logs'>" + charIllidan.name + " deals " + dmgIllidan + " damage with " + spells[1].name + " !</span><br>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      } else {
        $("#char-logs").prepend("There is no character selected! Please select a character.");
      }
    }
  },

  {
    name: "Knives",
    damage: 20,
    mana: 15,
    trigger: function() {
      if (charSylvanas.select === 1) {
        if (charSylvanas.mana > spells[2].mana) {
          var dmgSyl = spells[2].damage + charSylvanas.attack
          enemy.hp -= spells[2].damage;
          charSylvanas.mana -= spells[2].mana;
          $("#char-logs").prepend("<span class='skill-logs'>" + charSylvanas.name + " deals " + dmgSyl + " damage with " + spells[2].name + " !</span><br>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      } else if (charMaiev.select === 1) {
        if (charMaiev.mana > spells[2].mana) {
          var dmgMaiev = spells[2].damage + charMaiev.attack
          enemy.hp -= spells[2].damage;
          charMaiev.mana -= spells[2].mana;
          $("#char-logs").prepend("<span class='skill-logs'>" + charMaiev.name + " deals " + dmgMaiev + " damage with " + spells[2].name + " !</span><br>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      } else if (charIllidan.select === 1) {
        if (charIllidan.mana > spells[2].mana) {
          var dmgIllidan = spells[2].damage + charIllidan.attack
          enemy.hp -= spells[2].damage;
          charIllidan.mana -= spells[2].mana;
          $("#char-logs").prepend("<span class='skill-logs'>" + charIllidan.name + " deals " + dmgIllidan + " damage with " + spells[2].name + " !</span><br>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      } else {
        $("#char-logs").prepend("There is no character selected! Please select a character.");
      }
    }
  },

  {
    name: "Avatar",
    defense: 10,
    mana: 10,
    icon: "<img src='http://wow.zamimg.com/images/wow/icons/large/ability_warrior_improveddisciplines.jpg' >",
    trigger: function() {
      if(charSylvanas.select === 1) {
        if (charSylvanas.mana > spells[3].mana) {
          charSylvanas.defense += spells[3].defense;
          charSylvanas.mana -= spells[3].mana;
          $("#char-logs").prepend("<span class='buff-logs'>" + charSylvanas.name + " casted " + spells[3].name + " ! Defense increased with " + spells[3].defense + " defense!</span><br>");
          $(".buff").prepend("<span class='m-1' id='avatar-cd'>" + spells[3].icon + "</span>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      } else if(charMaiev.select === 1) {
        if (charMaiev.mana > spells[3].mana) {
          charMaiev.defense += spells[3].defense;
          charMaiev.mana -= spells[3].mana;
          $("#char-logs").prepend("<span class='buff-logs'>" + charMaiev.name + " casted " + spells[3].name + " ! Defense increased with " + spells[3].defense + " defense!</span><br>");
          $(".buff").prepend("<span class='m-1' id='avatar-cd'>" + spells[3].icon + "</span>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      } else if(charIllidan.select === 1) {
        if (charIllidan.mana > spells[3].mana) {
          charIllidan.defense += spells[3].defense;
          charIllidan.mana -= spells[3].mana;
          $("#char-logs").prepend("<span class='buff-logs'>" + charIllidan.name + " casted " + spells[3].name + " ! Defense increased with " + spells[3].defense + " defense!</span><br>");
          $(".buff").prepend("<span class='m-1' id='avatar-cd'>" + spells[3].icon + "</span>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      }
    },
    cooldown: function() {
      var btn = $(this);
      $("#avatar-cd").show();
      setTimeout(function() {
        $("#avatar-cd").hide();
        if(charSylvanas.select === 1) {
          charSylvanas.defense -= spells[3].defense;
          playerStats();
        } else if(charMaiev.select === 1) {
          charMaiev.defense -= spells[3].defense;
          playerStats();
        } else if(charIllidan.select === 1) {
          charIllidan.defense -= spells[3].defense;
          playerStats();
        }
      }, 7000);
    }
  },

  {
    name: "Enrage",
    attack: 10,
    mana: 10,
    icon: "<img src='http://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowworddominate.jpg' >",
    trigger: function() {
      if(charSylvanas.select === 1) {
        if (charSylvanas.mana > spells[4].mana) {
          charSylvanas.attack += spells[4].attack;
          charSylvanas.mana -= spells[4].mana;
          $("#char-logs").prepend("<span class='buff-logs'>" + charSylvanas.name + " casted " + spells[4].name + " ! Attack increased with " + spells[4].attack + " attack!</span><br>");
          $(".buff").prepend("<span class='m-1' id='enrage-cd'>" + spells[4].icon + "</span>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      } else if(charMaiev.select === 1) {
        if (charMaiev.mana > spells[4].mana) {
          charMaiev.attack += spells[4].attack;
          charMaiev.mana -= spells[4].mana;
          $("#char-logs").prepend("<span class='buff-logs'>" + charMaiev.name + " casted " + spells[4].name + " ! Attack increased with " + spells[4].attack + " attack!</span><br>");
          $(".buff").prepend("<span class='m-1' id='enrage-cd'>" + spells[4].icon + "</span>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      } else if(charIllidan.select === 1) {
        if (charIllidan.mana > spells[4].mana) {
          charIllidan.attack += spells[4].attack;
          charIllidan.mana -= spells[4].mana;
          $("#char-logs").prepend("<span class='buff-logs'>" + charIllidan.name + " casted " + spells[4].name + " ! Attack increased with " + spells[4].attack + " attack!</span><br>");
          $(".buff").prepend("<span class='m-1' id='enrage-cd'>" + spells[4].icon + "</span>");
        } else {
          lowManaSound();
          $("#char-logs").prepend("Not enough mana!</br>");
        }
      }
    },
    cooldown: function() {
      var btn = $(this);
      $("#enrage-cd").show();
      setTimeout(function() {
        $("#enrage-cd").hide();
        if(charSylvanas.select === 1) {
          charSylvanas.attack -= spells[4].attack;
          playerStats()
        } else if(charMaiev.select === 1) {
          charMaiev.attack -= spells[4].attack;
          playerStats()
        } else if(charIllidan.select === 1) {
          charIllidan.attack -= spells[4].attack;
          playerStats()
        }
      }, 7000);
    }
  },

  {
    name: "HP Potion",
    hp: 50,
    trigger: function() {
      if(charSylvanas.select === 1) {
        if (charSylvanas.hp < 25) {
          charSylvanas.hp += spells[5].hp;
          $("#char-logs").prepend("<span class='potion-logs'>" + charSylvanas.name + " used HP Potion " + spells[5].hp + " HP!</span><br>");
        } else {
          $("#char-logs").prepend("Your HP is above 25%!<br>");
        }
      } else if(charMaiev.select === 1) {
        if (charMaiev.hp < 25) {
          charMaiev.hp += spells[5].hp;
          $("#char-logs").prepend("<span class='potion-logs'>" + charMaiev.name + " used HP Potion " + spells[5].hp + " HP!</span><br>");
        } else {
          $("#char-logs").prepend("Your HP is above 25%!<br>");
        }
      } else if(charIllidan.select === 1) {
        if (charIllidan.hp < 25) {
          charIllidan.hp += spells[5].hp;
          $("#char-logs").prepend("<span class='potion-logs'>" + charIllidan.name + " used HP Potion " + spells[5].hp + " HP!</span><br>");
        } else {
          $("#char-logs").prepend("Your HP is above 25%!<br>");
        }
      }
    }
  },

  {
    name: "Mana Potion",
    mana: 25,
    trigger: function() {
      if(charSylvanas.select === 1) {
        if (charSylvanas.mana < 20) {
          charSylvanas.mana += spells[6].mana;
          $("#char-logs").prepend("<span class='potion-logs'>" + charSylvanas.name + " used Mana Potion " + spells[6].mana + " mana!</span><br>");
        } else {
          $("#char-logs").prepend("Your Mana is above 20%!<br>");
        }
      } else if(charMaiev.select === 1) {
        if (charMaiev.mana < 20) {
          charMaiev.mana += spells[6].mana;
          $("#char-logs").prepend("<span class='potion-logs'>" + charMaiev.name + " used Mana Potion " + spells[6].mana + " mana!</span><br>");
        } else {
          $("#char-logs").prepend("Your Mana is above 20%!<br>");
        }
      } else if(charIllidan.select === 1) {
        if (charIllidan.mana < 20) {
          charIllidan.mana += spells[6].mana;
          $("#char-logs").prepend("<span class='potion-logs'>" + charIllidan.name + " used Mana Potion " + spells[6].mana + " mana!</span><br>");
        } else {
          $("#char-logs").prepend("Your Mana is above 20%!<br>");
        }
      }
    }
  }

]

// Enemy Spells //
var enemySpells = [{
    name: "Berserk",
    attack: 10,
    defense: 10,
    hp: 10,
    mana: 30,
    icon: "<img src='http://wow.zamimg.com/images/wow/icons/large/ability_warrior_endlessrage.jpg' >",
    cooldown: function() {
      var btn = $(this);
      $("#berserk-cd").show();
      setTimeout(function() {
        $("#berserk-cd").hide();
        enemy.attack -= enemySpells[0].attack;
        enemy.defense -= enemySpells[0].defense;
      }, 7000);
      enemyStats();
    }
  },
  {
    name: "Fury of Frostmourne",
    attack: 20,
    mana: 10,
    icon: "<img src='http://wow.zamimg.com/images/wow/icons/large/inv_sword_122.jpg' >"
  }
]

var basicAttack = spells[0].trigger;
var rupture = spells[1].trigger;
var knives = spells[2].trigger;
var avatar = spells[3].trigger;
var enrage = spells[4].trigger;
var hp = spells[5].trigger;
var mana = spells[6].trigger;