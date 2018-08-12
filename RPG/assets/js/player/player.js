// Player //
var player = {
  name: "",
  money: 0,
  characters: []
};

// Player Stats //

var playerStats = function() {
  $(".helm").html(items[0].icon);
  $(".amulet").html(items[1].icon);
  $(".shoulder").html(items[2].icon);
  $(".chest").html(items[3].icon);
  $(".back").html(items[4].icon);
  $(".wrist").html(items[5].icon);
  $(".gloves").html(items[6].icon);
  $(".waist").html(items[7].icon);
  $(".pants").html(items[8].icon);
  $(".boots").html(items[9].icon);
  $(".ring").html(items[10].icon);
  $(".weapon").html(items[11].icon);
  if (charSylvanas.select === 1) {
    $("#level").html(charSylvanas.level)
    $("#attack").html(charSylvanas.attack)
    $("#defense").html(charSylvanas.defense)
    $("#critDmg").html(charSylvanas.criticalDMG)
    $("#resistCritDmg").html(charSylvanas.resistCriticalDMG)
    $("#money").html(player.money)
    var xpRatePercentS = Number(charSylvanas.xp/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    $(".xp-bar").css("width", xpRatePercentS)
    var displaySylvanas = $("#displayChar");
    var displayInvSylvanas = $("#invCharDisplay");
    var htmlSylvanas = '<img src="assets/resources/images/characters/sylvanas.png" class="img-fluid w3-animate-opacity" alt="character" />'
    var htmlInvSylvanas = '<img src="assets/resources/images/characters/sylvanas.png" class="mt-3 img-fluid w3-animate-opacity" alt="character" />'
    displaySylvanas.html(htmlSylvanas)
    displayInvSylvanas.html(htmlInvSylvanas)
  } else if (charMaiev.select === 1) {
    $("#level").html(charMaiev.level)
    $("#attack").html(charMaiev.attack)
    $("#defense").html(charMaiev.defense)
    $("#critDmg").html(charMaiev.criticalDMG)
    $("#resistCritDmg").html(charMaiev.resistCriticalDMG)
    $("#money").html(player.money)
    var xpRatePercentM = Number(charMaiev.xp/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    $(".xp-bar").css("width", xpRatePercentM)
    var displayMaiev = $("#displayChar");
    var displayInvMaiev = $("#invCharDisplay");
    var htmlMaiev = '<img src="assets/resources/images/characters/maiev.png" class="img-fluid w3-animate-opacity" alt="character" />'
    var htmlInvMaiev = '<img src="assets/resources/images/characters/maiev.png" class="mt-3 img-fluid w3-animate-opacity" alt="character" />'
    displayMaiev.html(htmlMaiev)
    displayInvMaiev.html(htmlInvMaiev)
  } else if (charIllidan.select === 1) {
    $("#level").html(charIllidan.level)
    $("#attack").html(charIllidan.attack)
    $("#defense").html(charIllidan.defense)
    $("#critDmg").html(charIllidan.criticalDMG)
    $("#resistCritDmg").html(charIllidan.resistCriticalDMG)
    $("#money").html(player.money)
    var xpRatePercentI = Number(charIllidan.xp/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    $(".xp-bar").css("width", xpRatePercentI)
    var displayIllidan = $("#displayChar");
    var displayInvIllidan = $("#invCharDisplay");
    var htmlIllidan = '<img src="assets/resources/images/characters/illidan.png" class="img-fluid w3-animate-opacity" alt="character" />'
    var htmlInvIllidan = '<img src="assets/resources/images/characters/illidan.png" class="mt-3 img-fluid w3-animate-opacity" alt="character" />'
    displayIllidan.html(htmlIllidan)
    displayInvIllidan.html(htmlInvIllidan)
  } else {
    console.log("There's no character selected! Please select a character.")
  }
}

// Player HP bar update //

var playerHp = function() {
  if (charSylvanas.select === 1) {
    var hpS = Number(charSylvanas.hp / 100).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2
    });
    $(".char-hp").css("width", hpS)
    $("#charShowHp").text(hpS)
  } else if (charMaiev.select === 1) {
    var hpM = Number(charMaiev.hp / 100).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2
    });
    $(".char-hp").css("width", hpM)
    $("#charShowHp").text(hpM)
  } else if (charIllidan.select === 1) {
    var hpI = Number(charIllidan.hp / 100).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2
    });
    $(".char-hp").css("width", hpI)
    $("#charShowHp").text(hpI)
  }
}

var playerMana = function() {
  if (charSylvanas.select === 1) {
    var manaS = Number(charSylvanas.mana / 100).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2
    });
    $(".char-mana").css("width", manaS)
    $("#charShowMana").text(manaS)
  } else if (charMaiev.select === 1) {
    var manaM = Number(charMaiev.mana / 100).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2
    });
    $(".char-mana").css("width", manaM)
    $("#charShowMana").text(manaM)
  } else if (charIllidan.select === 1) {
    var manaI = Number(charIllidan.mana / 100).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2
    });
    $(".char-mana").css("width", manaI)
    $("#charShowMana").text(manaI)
  }
}