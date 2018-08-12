function saveSelection() {
  var charName = $("#inputName").val();
  localStorage.setItem("Char", charName);
  
  localStorage["sylvanas.select"] = charSylvanas.select;
  
  localStorage["maiev.select"] = charMaiev.select;

  localStorage["illidan.select"] = charIllidan.select;
  
  $('#myModal').hide();
  $('#myModal2').modal('show');
}


function saveCharacters() {
  
  localStorage["sylvanas.char"] = charSylvanas.name;  
  localStorage["sylvanas.name"] = charSylvanas.name;
  localStorage["sylvanas.attack"] = charSylvanas.attack;
  localStorage["sylvanas.defense"] = charSylvanas.defense;
  localStorage["sylvanas.criticalDMG"] = charSylvanas.criticalDMG;
  localStorage["sylvanas.resistCriticalDMG"] = charSylvanas.resistCriticalDMG;
  localStorage["sylvanas.level"] = charSylvanas.level;
  localStorage["sylvanas.xp"] = charSylvanas.xp;

  localStorage["maiev.char"] = charMaiev.name;
  localStorage["maiev.name"] = charMaiev.name;
  localStorage["maiev.attack"] = charMaiev.attack;
  localStorage["maiev.defense"] = charMaiev.defense;
  localStorage["maiev.criticalDMG"] = charMaiev.criticalDMG;
  localStorage["maiev.resistCriticalDMG"] = charMaiev.resistCriticalDMG;
  localStorage["maiev.level"] = charMaiev.level;
  localStorage["maiev.xp"] = charMaiev.xp;

  localStorage["illidan.char"] = charIllidan.name;
  localStorage["illidan.name"] = charIllidan.name;
  localStorage["illidan.attack"] = charIllidan.attack;
  localStorage["illidan.defense"] = charIllidan.defense;
  localStorage["illidan.criticalDMG"] = charIllidan.criticalDMG;
  localStorage["illidan.resistCriticalDMG"] = charIllidan.resistCriticalDMG;
  localStorage["illidan.level"] = charIllidan.level;
  localStorage["illidan.xp"] = charIllidan.xp;
  $("#char-logs").prepend("Game Saved!<br>");
}

function savePlayers() {
  localStorage["player"] = player; 
  localStorage["player.name"] = player.name; 
  localStorage["player.money"] = player.money; 
}