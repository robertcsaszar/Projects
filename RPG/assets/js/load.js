function loadSelection() {
  var characterName = player.name = localStorage.getItem("Char");
  character = $("#playerName");
  character.html(characterName);
  if (localStorage.getItem("sylvanas.select", "maiev.select", "illidan.select") === null) {
    $('#myModal').modal('show');
  }
  if (localStorage.getItem("sylvanas.select") !== null) {
    charSylvanas.select = parseFloat(localStorage["sylvanas.select"]);
    $("#char-logs").prepend("Game has been successfully loaded!<br>");
  }
  if (localStorage.getItem("maiev.select") !== null) {
    charMaiev.select = parseFloat(localStorage["maiev.select"]);
    $("#char-logs").prepend("Game has been successfully loaded!<br>");
  }
  if (localStorage.getItem("illidan.select") !== null) {
    charIllidan.select = parseFloat(localStorage["illidan.select"]);
    $("#char-logs").prepend("Game has been successfully loaded!<br>");
  }
}


function loadCharacters() {
  if (localStorage.getItem("sylvanas.char") !== null) {
    charSylvanas.name = "Sylvanas";
    charSylvanas.attack = parseFloat(localStorage["sylvanas.attack"]);
    charSylvanas.defense = parseFloat(localStorage["sylvanas.defense"]);
    charSylvanas.criticalDMG = parseFloat(localStorage["sylvanas.criticalDMG"]);
    charSylvanas.resistCriticalDMG = parseFloat(localStorage["sylvanas.resistCriticalDMG"]);
    charSylvanas.level = parseFloat(localStorage["sylvanas.level"]);
    charSylvanas.xp = parseFloat(localStorage["sylvanas.xp"]);
  }

  if (localStorage.getItem("maiev.char") !== null) {
    charMaiev.name = "Maiev";
    charMaiev.attack = parseFloat(localStorage["maiev.attack"]);
    charMaiev.defense = parseFloat(localStorage["maiev.defense"]);
    charMaiev.criticalDMG = parseFloat(localStorage["maiev.criticalDMG"]);
    charMaiev.resistCriticalDMG = parseFloat(localStorage["maiev.resistCriticalDMG"]);
    charMaiev.level = parseFloat(localStorage["maiev.level"]);
    charMaiev.xp = parseFloat(localStorage["maiev.xp"]);
  }

  if (localStorage.getItem("illidan.char") !== null) {
    charIllidan.name = "Illidan Stormrage";
    charIllidan.attack = parseFloat(localStorage["illidan.attack"]);
    charIllidan.defense = parseFloat(localStorage["illidan.defense"]);
    charIllidan.criticalDMG = parseFloat(localStorage["illidan.criticalDMG"]);
    charIllidan.resistCriticalDMG = parseFloat(localStorage["illidan.resistCriticalDMG"]);
    charIllidan.level = parseFloat(localStorage["illidan.level"]);
  }
  $("#char-logs").prepend("Game has been successfully loaded!<br>");
}

function loadPlayers() {
  if (localStorage.getItem("player") !== null) {
    player.name = parseFloat(localStorage["player.name"]);
    player.money = parseFloat(localStorage["player.money"]);
  }
}