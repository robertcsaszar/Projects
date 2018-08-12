// Upgrade Costs //
var common = 1000;
var rare = 2000;
var epic = 4000;
var legendary = 10000;

var helm = items[0];
var amulet = items[1];
var shoulder = items[2];
var chest = items[3];
var back = items[4];
var wrist = items[5];
var gloves = items[6];
var waist = items[7];
var pants = items[8];
var boots = items[9];
var ring = items[10];
var weapon = items[11];

var upgradeInfo = function() {

  $("#helmName").html(helm.name);
  $("#helmQuality").html(helm.quality);
  $("#helmUpgrade").html(helm.upgrade);

  $("#amuletName").html(amulet.name);
  $("#amuletQuality").html(amulet.quality);
  $("#amuletUpgrade").html(amulet.upgrade);

  $("#shoulderName").html(shoulder.name);
  $("#shoulderQuality").html(shoulder.quality);
  $("#shoulderUpgrade").html(shoulder.upgrade);

  $("#chestName").html(chest.name);
  $("#chestQuality").html(chest.quality);
  $("#chestUpgrade").html(chest.upgrade);

  $("#backName").html(back.name);
  $("#backQuality").html(back.quality);
  $("#backUpgrade").html(back.upgrade);

  $("#wristName").html(wrist.name);
  $("#wristQuality").html(wrist.quality);
  $("#wristUpgrade").html(wrist.upgrade);

  $("#glovesName").html(gloves.name);
  $("#glovesQuality").html(gloves.quality);
  $("#glovesUpgrade").html(gloves.upgrade);

  $("#waistName").html(waist.name);
  $("#waistQuality").html(waist.quality);
  $("#waistUpgrade").html(waist.upgrade);

  $("#pantsName").html(pants.name);
  $("#pantsQuality").html(pants.quality);
  $("#pantsUpgrade").html(pants.upgrade);

  $("#bootsName").html(boots.name);
  $("#bootsQuality").html(boots.quality);
  $("#bootsUpgrade").html(boots.upgrade);

  $("#ringName").html(ring.name);
  $("#ringQuality").html(ring.quality);
  $("#ringUpgrade").html(ring.upgrade);

  $("#weaponName").html(weapon.name);
  $("#weaponQuality").html(weapon.quality);
  $("#weaponUpgrade").html(weapon.upgrade);
}



var helmUpgrade = function() {
  if (player.money >= common) {
    upgradeHelm();
  } else if (player.money >= rare) {
    upgradeHelm();
  } else if (player.money >= epic) {
    upgradeHelm();
  } else if (player.money >= legendary) {
    upgradeHelm();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

var amuletUpgrade = function() {
  if (player.money >= common) {
    upgradeAmulet();
  } else if (player.money >= rare) {
    upgradeAmulet();
  } else if (player.money >= epic) {
    upgradeAmulet();
  } else if (player.money >= legendary) {
    upgradeAmulet();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

var shoulderUpgrade = function() {
  if (player.money >= common) {
    upgradeShoulder();
  } else if (player.money >= rare) {
    upgradeShoulder();
  } else if (player.money >= epic) {
    upgradeShoulder();
  } else if (player.money >= legendary) {
    upgradeShoulder();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

var chestUpgrade = function() {
  if (player.money >= common) {
    upgradeChest();
  } else if (player.money >= rare) {
    upgradeChest();
  } else if (player.money >= epic) {
    upgradeChest();
  } else if (player.money >= legendary) {
    upgradeChest();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

var backUpgrade = function() {
  if (player.money >= common) {
    upgradeBack();
  } else if (player.money >= rare) {
    upgradeBack();
  } else if (player.money >= epic) {
    upgradeBack();
  } else if (player.money >= legendary) {
    upgradeBack();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

var wristUpgrade = function() {
  if (player.money >= common) {
    upgradeWrist();
  } else if (player.money >= rare) {
    upgradeWrist();
  } else if (player.money >= epic) {
    upgradeWrist();
  } else if (player.money >= legendary) {
    upgradeWrist();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

var glovesUpgrade = function() {
  if (player.money >= common) {
    upgradeGloves();
  } else if (player.money >= rare) {
    upgradeGloves();
  } else if (player.money >= epic) {
    upgradeGloves();
  } else if (player.money >= legendary) {
    upgradeGloves();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

var waistUpgrade = function() {
  if (player.money >= common) {
    upgradeWaist();
  } else if (player.money >= rare) {
    upgradeWaist();
  } else if (player.money >= epic) {
    upgradeWaist();
  } else if (player.money >= legendary) {
    upgradeWaist();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

var pantsUpgrade = function() {
  if (player.money >= common) {
    upgradePants();
  } else if (player.money >= rare) {
    upgradePants();
  } else if (player.money >= epic) {
    upgradePants();
  } else if (player.money >= legendary) {
    upgradePants();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

var bootsUpgrade = function() {
  if (player.money >= common) {
    upgradeBoots();
  } else if (player.money >= rare) {
    upgradeBoots();
  } else if (player.money >= epic) {
    upgradeBoots();
  } else if (player.money >= legendary) {
    upgradeBoots();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

var ringUpgrade = function() {
  if (player.money >= common) {
    upgradeRing();
  } else if (player.money >= rare) {
    upgradeRing();
  } else if (player.money >= epic) {
    upgradeRing();
  } else if (player.money >= legendary) {
    upgradeRing();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

var weaponUpgrade = function() {
  if (player.money >= common) {
    upgradeWeapon();
  } else if (player.money >= rare) {
    upgradeWeapon();
  } else if (player.money >= epic) {
    upgradeWeapon();
  } else if (player.money >= legendary) {
    upgradeWeapon();
  } else {
    $("#upgrade-logs").prepend("<span style='color:red'>Not enough gold!</span><br>");
  }
}

function upgradeHelm() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var helm = charSylvanas.items[0];
    if (helm.upgrade < 5) {
      if (upgradeRate < 100) {
        helm.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (helm.upgrade < 10) {
      if (upgradeRate < 75) {
        helm.quality = "Rare"
        upgradeInfo();
        helm.upgrade++;
        charSylvanas.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".helm").css("border", "1px solid #0066ff");
        $("#helmBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (helm.upgrade < 15) {
      if (upgradeRate < 50) {
        helm.quality = "Epic"
        upgradeInfo();
        helm.upgrade++;
        charSylvanas.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".helm").css("border", "1px solid #6600ff");
        $("#helmBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (helm.upgrade < 20) {
      if (upgradeRate < 25) {
        helm.quality = "Legendary"
        helm.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".helm").css("border", "1px solid #ff6600");
        $("#helmBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var helmM = charMaiev.items[0];
    if (helmM.upgrade < 5) {
      if (upgradeRate < 100) {
        helmM.upgrade++;
        charMaiev.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (helmM.upgrade < 10) {
      if (upgradeRate < 75) {
        helmM.quality = "Rare"
        upgradeInfo();
        helmM.upgrade++;
        charMaiev.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".helm").css("border", "1px solid #0066ff");
        $("#helmBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (helmM.upgrade < 15) {
      if (upgradeRate < 50) {
        helmM.quality = "Epic"
        upgradeInfo();
        helmM.upgrade++;
        charMaiev.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".helm").css("border", "1px solid #6600ff");
        $("#helmBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (helmM.upgrade < 20) {
      if (upgradeRate < 25) {
        helmM.quality = "Legendary"
        upgradeInfo();
        helmM.upgrade++;
        charMaiev.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".helm").css("border", "1px solid #ff6600");
        $("#helmBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var helmI = charIllidan.items[0];
    if (helmI.upgrade < 5) {
      if (upgradeRate < 100) {
        helmI.upgrade++;
        charIllidan.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (helmI.upgrade < 10) {
      if (upgradeRate < 75) {
        helmI.quality = "Rare"
        upgradeInfo();
        helmI.upgrade++;
        charIllidan.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".helm").css("border", "1px solid #0066ff");
        $("#helmBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (helmI.upgrade < 15) {
      if (upgradeRate < 50) {
        helmI.quality = "Epic"
        upgradeInfo();
        helmI.upgrade++;
        charIllidan.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".helm").css("border", "1px solid #6600ff");
        $("#helmBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (helmI.upgrade < 20) {
      if (upgradeRate < 25) {
        helmI.quality = "Legendary"
        upgradeInfo();
        helmI.upgrade++;
        charIllidan.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".helm").css("border", "1px solid #ff6600");
        $("#helmBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}

function upgradeAmulet() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var amulet = charSylvanas.items[1];
    if (amulet.upgrade < 5) {
      if (upgradeRate < 100) {
        amulet.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (amulet.upgrade < 10) {
      if (upgradeRate < 75) {
        amulet.quality = "Rare"
        upgradeInfo();
        amulet.upgrade++;
        charSylvanas.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".amulet").css("border", "1px solid #0066ff");
        $("#amuletBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (amulet.upgrade < 15) {
      if (upgradeRate < 50) {
        amulet.quality = "Epic"
        upgradeInfo();
        amulet.upgrade++;
        charSylvanas.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".amulet").css("border", "1px solid #6600ff");
        $("#amuletBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (amulet.upgrade < 20) {
      if (upgradeRate < 25) {
        amulet.quality = "Legendary"
        amulet.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".amulet").css("border", "1px solid #ff6600");
        $("#amuletBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var amuletM = charMaiev.items[1];
    if (amuletM.upgrade < 5) {
      if (upgradeRate < 100) {
        amuletM.upgrade++;
        charMaiev.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (amuletM.upgrade < 10) {
      if (upgradeRate < 75) {
        amuletM.quality = "Rare"
        upgradeInfo();
        amuletM.upgrade++;
        charMaiev.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".amulet").css("border", "1px solid #0066ff");
        $("#amuletBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (amuletM.upgrade < 15) {
      if (upgradeRate < 50) {
        amuletM.quality = "Epic"
        upgradeInfo();
        amuletM.upgrade++;
        charMaiev.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".amulet").css("border", "1px solid #6600ff");
        $("#amuletBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (amuletM.upgrade < 20) {
      if (upgradeRate < 25) {
        amuletM.quality = "Legendary"
        upgradeInfo();
        amuletM.upgrade++;
        charMaiev.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".amulet").css("border", "1px solid #ff6600");
        $("#amuletBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var amuletI = charIllidan.items[1];
    if (amuletI.upgrade < 5) {
      if (upgradeRate < 100) {
        amuletI.upgrade++;
        charIllidan.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (amuletI.upgrade < 10) {
      if (upgradeRate < 75) {
        amuletI.quality = "Rare"
        upgradeInfo();
        amuletI.upgrade++;
        charIllidan.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".amulet").css("border", "1px solid #0066ff");
        $("#amuletBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (amuletI.upgrade < 15) {
      if (upgradeRate < 50) {
        amuletI.quality = "Epic"
        upgradeInfo();
        amuletI.upgrade++;
        charIllidan.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".amulet").css("border", "1px solid #6600ff");
        $("#amuletBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (amuletI.upgrade < 20) {
      if (upgradeRate < 25) {
        amuletI.quality = "Legendary"
        upgradeInfo();
        amuletI.upgrade++;
        charIllidan.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".amulet").css("border", "1px solid #ff6600");
        $("#amuletBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}

function upgradeShoulder() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var shoulder = charSylvanas.items[2];
    if (shoulder.upgrade < 5) {
      if (upgradeRate < 100) {
        shoulder.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (shoulder.upgrade < 10) {
      if (upgradeRate < 75) {
        shoulder.quality = "Rare"
        upgradeInfo();
        shoulder.upgrade++;
        charSylvanas.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".shoulder").css("border", "1px solid #0066ff");
        $("#shoulderBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (shoulder.upgrade < 15) {
      if (upgradeRate < 50) {
        shoulder.quality = "Epic"
        upgradeInfo();
        shoulder.upgrade++;
        charSylvanas.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".shoulder").css("border", "1px solid #6600ff");
        $("#shoulderBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (shoulder.upgrade < 20) {
      if (upgradeRate < 25) {
        shoulder.quality = "Legendary"
        shoulder.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".shoulder").css("border", "1px solid #ff6600");
        $("#shoulderBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var shoulderM = charMaiev.items[2];
    if (shoulderM.upgrade < 5) {
      if (upgradeRate < 100) {
        shoulderM.upgrade++;
        charMaiev.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (shoulderM.upgrade < 10) {
      if (upgradeRate < 75) {
        shoulderM.quality = "Rare"
        upgradeInfo();
        shoulderM.upgrade++;
        charMaiev.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".shoulder").css("border", "1px solid #0066ff");
        $("#shoulderBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (shoulderM.upgrade < 15) {
      if (upgradeRate < 50) {
        shoulderM.quality = "Epic"
        upgradeInfo();
        shoulderM.upgrade++;
        charMaiev.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".shoulder").css("border", "1px solid #6600ff");
        $("#shoulderBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (shoulderM.upgrade < 20) {
      if (upgradeRate < 25) {
        shoulderM.quality = "Legendary"
        upgradeInfo();
        shoulderM.upgrade++;
        charMaiev.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".shoulder").css("border", "1px solid #ff6600");
        $("#shoulderBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var shoulderI = charIllidan.items[2];
    if (shoulderI.upgrade < 5) {
      if (upgradeRate < 100) {
        shoulderI.upgrade++;
        charIllidan.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (shoulderI.upgrade < 10) {
      if (upgradeRate < 75) {
        shoulderI.quality = "Rare"
        upgradeInfo();
        shoulderI.upgrade++;
        charIllidan.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".shoulder").css("border", "1px solid #0066ff");
        $("#shoulderBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (shoulderI.upgrade < 15) {
      if (upgradeRate < 50) {
        shoulderI.quality = "Epic"
        upgradeInfo();
        shoulderI.upgrade++;
        charIllidan.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".shoulder").css("border", "1px solid #6600ff");
        $("#shoulderBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (shoulderI.upgrade < 20) {
      if (upgradeRate < 25) {
        shoulderI.quality = "Legendary"
        upgradeInfo();
        shoulderI.upgrade++;
        charIllidan.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".shoulder").css("border", "1px solid #ff6600");
        $("#shoulderBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}

function upgradeChest() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var chest = charSylvanas.items[3];
    if (chest.upgrade < 5) {
      if (upgradeRate < 100) {
        chest.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (chest.upgrade < 10) {
      if (upgradeRate < 75) {
        chest.quality = "Rare"
        upgradeInfo();
        chest.upgrade++;
        charSylvanas.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".chest").css("border", "1px solid #0066ff");
        $("#chestBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (chest.upgrade < 15) {
      if (upgradeRate < 50) {
        chest.quality = "Epic"
        upgradeInfo();
        chest.upgrade++;
        charSylvanas.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".chest").css("border", "1px solid #6600ff");
        $("#chestBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (chest.upgrade < 20) {
      if (upgradeRate < 25) {
        chest.quality = "Legendary"
        chest.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".chest").css("border", "1px solid #ff6600");
        $("#chestBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var chestM = charMaiev.items[3];
    if (chestM.upgrade < 5) {
      if (upgradeRate < 100) {
        chestM.upgrade++;
        charMaiev.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (chestM.upgrade < 10) {
      if (upgradeRate < 75) {
        chestM.quality = "Rare"
        upgradeInfo();
        chestM.upgrade++;
        charMaiev.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".chest").css("border", "1px solid #0066ff");
        $("#chestBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (chestM.upgrade < 15) {
      if (upgradeRate < 50) {
        chestM.quality = "Epic"
        upgradeInfo();
        chestM.upgrade++;
        charMaiev.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".chest").css("border", "1px solid #6600ff");
        $("#chestBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (chestM.upgrade < 20) {
      if (upgradeRate < 25) {
        chestM.quality = "Legendary"
        upgradeInfo();
        chestM.upgrade++;
        charMaiev.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".chest").css("border", "1px solid #ff6600");
        $("#chestBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var chestI = charIllidan.items[3];
    if (chestI.upgrade < 5) {
      if (upgradeRate < 100) {
        chestI.upgrade++;
        charIllidan.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (chestI.upgrade < 10) {
      if (upgradeRate < 75) {
        chestI.quality = "Rare"
        upgradeInfo();
        chestI.upgrade++;
        charIllidan.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".chest").css("border", "1px solid #0066ff");
        $("#chestBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (chestI.upgrade < 15) {
      if (upgradeRate < 50) {
        chestI.quality = "Epic"
        upgradeInfo();
        chestI.upgrade++;
        charIllidan.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".chest").css("border", "1px solid #6600ff");
        $("#chestBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (chestI.upgrade < 20) {
      if (upgradeRate < 25) {
        chestI.quality = "Legendary"
        upgradeInfo();
        chestI.upgrade++;
        charIllidan.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".chest").css("border", "1px solid #ff6600");
        $("#chestBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}

function upgradeBack() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var back = charSylvanas.items[4];
    if (back.upgrade < 5) {
      if (upgradeRate < 100) {
        back.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (back.upgrade < 10) {
      if (upgradeRate < 75) {
        back.quality = "Rare"
        upgradeInfo();
        back.upgrade++;
        charSylvanas.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".back").css("border", "1px solid #0066ff");
        $("#backBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (back.upgrade < 15) {
      if (upgradeRate < 50) {
        back.quality = "Epic"
        upgradeInfo();
        back.upgrade++;
        charSylvanas.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".back").css("border", "1px solid #6600ff");
        $("#backBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (back.upgrade < 20) {
      if (upgradeRate < 25) {
        back.quality = "Legendary"
        back.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".back").css("border", "1px solid #ff6600");
        $("#backBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var backM = charMaiev.items[4];
    if (backM.upgrade < 5) {
      if (upgradeRate < 100) {
        backM.upgrade++;
        charMaiev.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (backM.upgrade < 10) {
      if (upgradeRate < 75) {
        backM.quality = "Rare"
        upgradeInfo();
        backM.upgrade++;
        charMaiev.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".back").css("border", "1px solid #0066ff");
        $("#backBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (backM.upgrade < 15) {
      if (upgradeRate < 50) {
        backM.quality = "Epic"
        upgradeInfo();
        backM.upgrade++;
        charMaiev.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".back").css("border", "1px solid #6600ff");
        $("#backBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (backM.upgrade < 20) {
      if (upgradeRate < 25) {
        backM.quality = "Legendary"
        upgradeInfo();
        backM.upgrade++;
        charMaiev.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".back").css("border", "1px solid #ff6600");
        $("#backBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var backI = charIllidan.items[4];
    if (backI.upgrade < 5) {
      if (upgradeRate < 100) {
        backI.upgrade++;
        charIllidan.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (backI.upgrade < 10) {
      if (upgradeRate < 75) {
        backI.quality = "Rare"
        upgradeInfo();
        backI.upgrade++;
        charIllidan.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".back").css("border", "1px solid #0066ff");
        $("#backBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (backI.upgrade < 15) {
      if (upgradeRate < 50) {
        backI.quality = "Epic"
        upgradeInfo();
        backI.upgrade++;
        charIllidan.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".back").css("border", "1px solid #6600ff");
        $("#backBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (backI.upgrade < 20) {
      if (upgradeRate < 25) {
        backI.quality = "Legendary"
        upgradeInfo();
        backI.upgrade++;
        charIllidan.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".back").css("border", "1px solid #ff6600");
        $("#backBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}

function upgradeWrist() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var wrist = charSylvanas.items[5];
    if (wrist.upgrade < 5) {
      if (upgradeRate < 100) {
        wrist.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (wrist.upgrade < 10) {
      if (upgradeRate < 75) {
        wrist.quality = "Rare"
        upgradeInfo();
        wrist.upgrade++;
        charSylvanas.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".wrist").css("border", "1px solid #0066ff");
        $("#wristBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (wrist.upgrade < 15) {
      if (upgradeRate < 50) {
        wrist.quality = "Epic"
        upgradeInfo();
        wrist.upgrade++;
        charSylvanas.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".wrist").css("border", "1px solid #6600ff");
        $("#wristBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (wrist.upgrade < 20) {
      if (upgradeRate < 25) {
        wrist.quality = "Legendary"
        wrist.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".wrist").css("border", "1px solid #ff6600");
        $("#wristBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var wristM = charMaiev.items[5];
    if (wristM.upgrade < 5) {
      if (upgradeRate < 100) {
        wristM.upgrade++;
        charMaiev.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (wristM.upgrade < 10) {
      if (upgradeRate < 75) {
        wristM.quality = "Rare"
        upgradeInfo();
        wristM.upgrade++;
        charMaiev.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".wrist").css("border", "1px solid #0066ff");
        $("#wristBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (wristM.upgrade < 15) {
      if (upgradeRate < 50) {
        wristM.quality = "Epic"
        upgradeInfo();
        wristM.upgrade++;
        charMaiev.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".wrist").css("border", "1px solid #6600ff");
        $("#wristBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (wristM.upgrade < 20) {
      if (upgradeRate < 25) {
        wristM.quality = "Legendary"
        upgradeInfo();
        wristM.upgrade++;
        charMaiev.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".wrist").css("border", "1px solid #ff6600");
        $("#wristBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var wristI = charIllidan.items[5];
    if (wristI.upgrade < 5) {
      if (upgradeRate < 100) {
        wristI.upgrade++;
        charIllidan.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (wristI.upgrade < 10) {
      if (upgradeRate < 75) {
        wristI.quality = "Rare"
        upgradeInfo();
        wristI.upgrade++;
        charIllidan.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".wrist").css("border", "1px solid #0066ff");
        $("#wristBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (wristI.upgrade < 15) {
      if (upgradeRate < 50) {
        wristI.quality = "Epic"
        upgradeInfo();
        wristI.upgrade++;
        charIllidan.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".wrist").css("border", "1px solid #6600ff");
        $("#wristBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (wristI.upgrade < 20) {
      if (upgradeRate < 25) {
        wristI.quality = "Legendary"
        upgradeInfo();
        wristI.upgrade++;
        charIllidan.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".wrist").css("border", "1px solid #ff6600");
        $("#wristBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}

function upgradeGloves() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var gloves = charSylvanas.items[6];
    if (gloves.upgrade < 5) {
      if (upgradeRate < 100) {
        gloves.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (gloves.upgrade < 10) {
      if (upgradeRate < 75) {
        gloves.quality = "Rare"
        upgradeInfo();
        gloves.upgrade++;
        charSylvanas.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".gloves").css("border", "1px solid #0066ff");
        $("#glovesBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (gloves.upgrade < 15) {
      if (upgradeRate < 50) {
        gloves.quality = "Epic"
        upgradeInfo();
        gloves.upgrade++;
        charSylvanas.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".gloves").css("border", "1px solid #6600ff");
        $("#glovesBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (gloves.upgrade < 20) {
      if (upgradeRate < 25) {
        gloves.quality = "Legendary"
        gloves.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".gloves").css("border", "1px solid #ff6600");
        $("#glovesBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var glovesM = charMaiev.items[6];
    if (glovesM.upgrade < 5) {
      if (upgradeRate < 100) {
        glovesM.upgrade++;
        charMaiev.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (glovesM.upgrade < 10) {
      if (upgradeRate < 75) {
        glovesM.quality = "Rare"
        upgradeInfo();
        glovesM.upgrade++;
        charMaiev.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".gloves").css("border", "1px solid #0066ff");
        $("#glovesBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (glovesM.upgrade < 15) {
      if (upgradeRate < 50) {
        glovesM.quality = "Epic"
        upgradeInfo();
        glovesM.upgrade++;
        charMaiev.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".gloves").css("border", "1px solid #6600ff");
        $("#glovesBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (glovesM.upgrade < 20) {
      if (upgradeRate < 25) {
        glovesM.quality = "Legendary"
        upgradeInfo();
        glovesM.upgrade++;
        charMaiev.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".gloves").css("border", "1px solid #ff6600");
        $("#glovesBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var glovesI = charIllidan.items[6];
    if (glovesI.upgrade < 5) {
      if (upgradeRate < 100) {
        glovesI.upgrade++;
        charIllidan.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (glovesI.upgrade < 10) {
      if (upgradeRate < 75) {
        glovesI.quality = "Rare"
        upgradeInfo();
        glovesI.upgrade++;
        charIllidan.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".gloves").css("border", "1px solid #0066ff");
        $("#glovesBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (glovesI.upgrade < 15) {
      if (upgradeRate < 50) {
        glovesI.quality = "Epic"
        upgradeInfo();
        glovesI.upgrade++;
        charIllidan.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".gloves").css("border", "1px solid #6600ff");
        $("#glovesBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (glovesI.upgrade < 20) {
      if (upgradeRate < 25) {
        glovesI.quality = "Legendary"
        upgradeInfo();
        glovesI.upgrade++;
        charIllidan.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".gloves").css("border", "1px solid #ff6600");
        $("#glovesBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}

function upgradeWaist() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var waist = charSylvanas.items[7];
    if (waist.upgrade < 5) {
      if (upgradeRate < 100) {
        waist.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (waist.upgrade < 10) {
      if (upgradeRate < 75) {
        waist.quality = "Rare"
        upgradeInfo();
        waist.upgrade++;
        charSylvanas.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".waist").css("border", "1px solid #0066ff");
        $("#waistBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (waist.upgrade < 15) {
      if (upgradeRate < 50) {
        waist.quality = "Epic"
        upgradeInfo();
        waist.upgrade++;
        charSylvanas.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".waist").css("border", "1px solid #6600ff");
        $("#waistBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (waist.upgrade < 20) {
      if (upgradeRate < 25) {
        waist.quality = "Legendary"
        waist.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".waist").css("border", "1px solid #ff6600");
        $("#waistBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var waistM = charMaiev.items[7];
    if (waistM.upgrade < 5) {
      if (upgradeRate < 100) {
        waistM.upgrade++;
        charMaiev.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (waistM.upgrade < 10) {
      if (upgradeRate < 75) {
        waistM.quality = "Rare"
        upgradeInfo();
        waistM.upgrade++;
        charMaiev.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".waist").css("border", "1px solid #0066ff");
        $("#waistBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (waistM.upgrade < 15) {
      if (upgradeRate < 50) {
        waistM.quality = "Epic"
        upgradeInfo();
        waistM.upgrade++;
        charMaiev.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".waist").css("border", "1px solid #6600ff");
        $("#waistBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (waistM.upgrade < 20) {
      if (upgradeRate < 25) {
        waistM.quality = "Legendary"
        upgradeInfo();
        waistM.upgrade++;
        charMaiev.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".waist").css("border", "1px solid #ff6600");
        $("#waistBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var waistI = charIllidan.items[7];
    if (waistI.upgrade < 5) {
      if (upgradeRate < 100) {
        waistI.upgrade++;
        charIllidan.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (waistI.upgrade < 10) {
      if (upgradeRate < 75) {
        waistI.quality = "Rare"
        upgradeInfo();
        waistI.upgrade++;
        charIllidan.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".waist").css("border", "1px solid #0066ff");
        $("#waistBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (waistI.upgrade < 15) {
      if (upgradeRate < 50) {
        waistI.quality = "Epic"
        upgradeInfo();
        waistI.upgrade++;
        charIllidan.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".waist").css("border", "1px solid #6600ff");
        $("#waistBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (waistI.upgrade < 20) {
      if (upgradeRate < 25) {
        waistI.quality = "Legendary"
        upgradeInfo();
        waistI.upgrade++;
        charIllidan.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".waist").css("border", "1px solid #ff6600");
        $("#waistBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}

function upgradePants() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var pants = charSylvanas.items[8];
    if (pants.upgrade < 5) {
      if (upgradeRate < 100) {
        pants.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (pants.upgrade < 10) {
      if (upgradeRate < 75) {
        pants.quality = "Rare"
        upgradeInfo();
        pants.upgrade++;
        charSylvanas.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".pants").css("border", "1px solid #0066ff");
        $("#pantsBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (pants.upgrade < 15) {
      if (upgradeRate < 50) {
        pants.quality = "Epic"
        upgradeInfo();
        pants.upgrade++;
        charSylvanas.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".pants").css("border", "1px solid #6600ff");
        $("#pantsBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (pants.upgrade < 20) {
      if (upgradeRate < 25) {
        pants.quality = "Legendary"
        pants.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".pants").css("border", "1px solid #ff6600");
        $("#pantsBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var pantsM = charMaiev.items[8];
    if (pantsM.upgrade < 5) {
      if (upgradeRate < 100) {
        pantsM.upgrade++;
        charMaiev.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (pantsM.upgrade < 10) {
      if (upgradeRate < 75) {
        pantsM.quality = "Rare"
        upgradeInfo();
        pantsM.upgrade++;
        charMaiev.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".pants").css("border", "1px solid #0066ff");
        $("#pantsBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (pantsM.upgrade < 15) {
      if (upgradeRate < 50) {
        pantsM.quality = "Epic"
        upgradeInfo();
        pantsM.upgrade++;
        charMaiev.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".pants").css("border", "1px solid #6600ff");
        $("#pantsBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (pantsM.upgrade < 20) {
      if (upgradeRate < 25) {
        pantsM.quality = "Legendary"
        upgradeInfo();
        pantsM.upgrade++;
        charMaiev.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".pants").css("border", "1px solid #ff6600");
        $("#pantsBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var pantsI = charIllidan.items[8];
    if (pantsI.upgrade < 5) {
      if (upgradeRate < 100) {
        pantsI.upgrade++;
        charIllidan.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (pantsI.upgrade < 10) {
      if (upgradeRate < 75) {
        pantsI.quality = "Rare"
        upgradeInfo();
        pantsI.upgrade++;
        charIllidan.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".pants").css("border", "1px solid #0066ff");
        $("#pantsBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (pantsI.upgrade < 15) {
      if (upgradeRate < 50) {
        pantsI.quality = "Epic"
        upgradeInfo();
        pantsI.upgrade++;
        charIllidan.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".pants").css("border", "1px solid #6600ff");
        $("#pantsBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (pantsI.upgrade < 20) {
      if (upgradeRate < 25) {
        pantsI.quality = "Legendary"
        upgradeInfo();
        pantsI.upgrade++;
        charIllidan.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".pants").css("border", "1px solid #ff6600");
        $("#pantsBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}

function upgradeBoots() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var boots = charSylvanas.items[9];
    if (boots.upgrade < 5) {
      if (upgradeRate < 100) {
        boots.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (boots.upgrade < 10) {
      if (upgradeRate < 75) {
        boots.quality = "Rare"
        upgradeInfo();
        boots.upgrade++;
        charSylvanas.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".boots").css("border", "1px solid #0066ff");
        $("#bootsBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (boots.upgrade < 15) {
      if (upgradeRate < 50) {
        boots.quality = "Epic"
        upgradeInfo();
        boots.upgrade++;
        charSylvanas.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".boots").css("border", "1px solid #6600ff");
        $("#bootsBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (boots.upgrade < 20) {
      if (upgradeRate < 25) {
        boots.quality = "Legendary"
        boots.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".boots").css("border", "1px solid #ff6600");
        $("#bootsBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var bootsM = charMaiev.items[9];
    if (bootsM.upgrade < 5) {
      if (upgradeRate < 100) {
        bootsM.upgrade++;
        charMaiev.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (bootsM.upgrade < 10) {
      if (upgradeRate < 75) {
        bootsM.quality = "Rare"
        upgradeInfo();
        bootsM.upgrade++;
        charMaiev.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".boots").css("border", "1px solid #0066ff");
        $("#bootsBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (bootsM.upgrade < 15) {
      if (upgradeRate < 50) {
        bootsM.quality = "Epic"
        upgradeInfo();
        bootsM.upgrade++;
        charMaiev.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".boots").css("border", "1px solid #6600ff");
        $("#bootsBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (bootsM.upgrade < 20) {
      if (upgradeRate < 25) {
        bootsM.quality = "Legendary"
        upgradeInfo();
        bootsM.upgrade++;
        charMaiev.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".boots").css("border", "1px solid #ff6600");
        $("#bootsBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var bootsI = charIllidan.items[9];
    if (bootsI.upgrade < 5) {
      if (upgradeRate < 100) {
        bootsI.upgrade++;
        charIllidan.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (bootsI.upgrade < 10) {
      if (upgradeRate < 75) {
        bootsI.quality = "Rare"
        upgradeInfo();
        bootsI.upgrade++;
        charIllidan.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".boots").css("border", "1px solid #0066ff");
        $("#bootsBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (bootsI.upgrade < 15) {
      if (upgradeRate < 50) {
        bootsI.quality = "Epic"
        upgradeInfo();
        bootsI.upgrade++;
        charIllidan.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".boots").css("border", "1px solid #6600ff");
        $("#bootsBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (bootsI.upgrade < 20) {
      if (upgradeRate < 25) {
        bootsI.quality = "Legendary"
        upgradeInfo();
        bootsI.upgrade++;
        charIllidan.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".boots").css("border", "1px solid #ff6600");
        $("#bootsBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}

function upgradeRing() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var ring = charSylvanas.items[10];
    if (ring.upgrade < 5) {
      if (upgradeRate < 100) {
        ring.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (ring.upgrade < 10) {
      if (upgradeRate < 75) {
        ring.quality = "Rare"
        upgradeInfo();
        ring.upgrade++;
        charSylvanas.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".ring").css("border", "1px solid #0066ff");
        $("#ringBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (ring.upgrade < 15) {
      if (upgradeRate < 50) {
        ring.quality = "Epic"
        upgradeInfo();
        ring.upgrade++;
        charSylvanas.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".ring").css("border", "1px solid #6600ff");
        $("#ringBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (ring.upgrade < 20) {
      if (upgradeRate < 25) {
        ring.quality = "Legendary"
        ring.upgrade++;
        upgradeInfo();
        charSylvanas.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".ring").css("border", "1px solid #ff6600");
        $("#ringBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var ringM = charMaiev.items[10];
    if (ringM.upgrade < 5) {
      if (upgradeRate < 100) {
        ringM.upgrade++;
        charMaiev.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (ringM.upgrade < 10) {
      if (upgradeRate < 75) {
        ringM.quality = "Rare"
        upgradeInfo();
        ringM.upgrade++;
        charMaiev.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".ring").css("border", "1px solid #0066ff");
        $("#ringBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (ringM.upgrade < 15) {
      if (upgradeRate < 50) {
        ringM.quality = "Epic"
        upgradeInfo();
        ringM.upgrade++;
        charMaiev.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".ring").css("border", "1px solid #6600ff");
        $("#ringBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (ringM.upgrade < 20) {
      if (upgradeRate < 25) {
        ringM.quality = "Legendary"
        upgradeInfo();
        ringM.upgrade++;
        charMaiev.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".ring").css("border", "1px solid #ff6600");
        $("#ringBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var ringI = charIllidan.items[10];
    if (ringI.upgrade < 5) {
      if (upgradeRate < 100) {
        ringI.upgrade++;
        charIllidan.defense += 2;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (ringI.upgrade < 10) {
      if (upgradeRate < 75) {
        ringI.quality = "Rare"
        upgradeInfo();
        ringI.upgrade++;
        charIllidan.defense += 4;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".ring").css("border", "1px solid #0066ff");
        $("#ringBonus").html("4");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (ringI.upgrade < 15) {
      if (upgradeRate < 50) {
        ringI.quality = "Epic"
        upgradeInfo();
        ringI.upgrade++;
        charIllidan.defense += 6;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".ring").css("border", "1px solid #6600ff");
        $("#ringBonus").html("6");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (ringI.upgrade < 20) {
      if (upgradeRate < 25) {
        ringI.quality = "Legendary"
        upgradeInfo();
        ringI.upgrade++;
        charIllidan.defense += 10;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".ring").css("border", "1px solid #ff6600");
        $("#ringBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}

function upgradeWeapon() {
  var upgradeRate = Math.floor(Math.random() * 100);
  if (charSylvanas.select === 1) {
    var weapon = charSylvanas.items[11];
    if (weapon.upgrade < 5) {
      if (upgradeRate < 100) {
        weapon.upgrade++;
        upgradeInfo();
        charSylvanas.attack += 5;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (weapon.upgrade < 10) {
      if (upgradeRate < 75) {
        weapon.quality = "Rare"
        upgradeInfo();
        weapon.upgrade++;
        charSylvanas.attack += 10;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".weapon").css("border", "1px solid #0066ff");
        $("#weaponBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (weapon.upgrade < 15) {
      if (upgradeRate < 50) {
        weapon.quality = "Epic"
        upgradeInfo();
        weapon.upgrade++;
        charSylvanas.attack += 15;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".weapon").css("border", "1px solid #6600ff");
        $("#weaponBonus").html("15");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (weapon.upgrade < 20) {
      if (upgradeRate < 25) {
        weapon.quality = "Legendary"
        weapon.upgrade++;
        upgradeInfo();
        charSylvanas.attack += 20;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".weapon").css("border", "1px solid #ff6600");
        $("#weaponBonus").html("20");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charMaiev.select === 1) {
    var weaponM = charMaiev.items[11];
    if (weaponM.upgrade < 5) {
      if (upgradeRate < 100) {
        weaponM.upgrade++;
        charMaiev.attack += 5;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (weaponM.upgrade < 10) {
      if (upgradeRate < 75) {
        weaponM.quality = "Rare"
        upgradeInfo();
        weaponM.upgrade++;
        charMaiev.attack += 10;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".weapon").css("border", "1px solid #0066ff");
        $("#weaponBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (weaponM.upgrade < 15) {
      if (upgradeRate < 50) {
        weaponM.quality = "Epic"
        upgradeInfo();
        weaponM.upgrade++;
        charMaiev.attack += 15;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".weapon").css("border", "1px solid #6600ff");
        $("#weaponBonus").html("15");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (weaponM.upgrade < 20) {
      if (upgradeRate < 25) {
        weaponM.quality = "Legendary"
        upgradeInfo();
        weaponM.upgrade++;
        charMaiev.attack += 20;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".weapon").css("border", "1px solid #ff6600");
        $("#weaponBonus").html("20");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
  if (charIllidan.select === 1) {
    var weaponI = charIllidan.items[11];
    if (weaponI.upgrade < 5) {
      if (upgradeRate < 100) {
        weaponI.upgrade++;
        charIllidan.attack += 5;
        player.money -= common;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (weaponI.upgrade < 10) {
      if (upgradeRate < 75) {
        weaponI.quality = "Rare"
        upgradeInfo();
        weaponI.upgrade++;
        charIllidan.attack += 10;
        player.money -= rare;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".weapon").css("border", "1px solid #0066ff");
        $("#weaponBonus").html("10");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (weaponI.upgrade < 15) {
      if (upgradeRate < 50) {
        weaponI.quality = "Epic"
        upgradeInfo();
        weaponI.upgrade++;
        charIllidan.attack += 15;
        player.money -= epic;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".weapon").css("border", "1px solid #6600ff");
        $("#weaponBonus").html("15");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else if (weaponI.upgrade < 20) {
      if (upgradeRate < 25) {
        weaponI.quality = "Legendary"
        upgradeInfo();
        weaponI.upgrade++;
        charIllidan.attack += 20;
        player.money -= legendary;
        playerStats();
        $("#upgrade-logs").prepend("<span style='color:green'>Upgrade success!</span><br>");
        $(".weapon").css("border", "1px solid #ff6600");
        $("#weaponBonus").html("20");
      } else {
        $("#upgrade-logs").prepend("<span style='color:red'>Upgrade fail!</span><br>");
      }
    } else {
      $("#upgrade-logs").prepend("<span style='color:green'>Your items is fully upgraded!</span><br>");
    }
  }
}