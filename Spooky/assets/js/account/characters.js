var renderCharacters = function(char) {
  var dracula = localStorage["class"];
  var frankenstein = localStorage["class"];
  var witch = localStorage["class"];
  // Main container
  var userOnline = $("#userOnline");
  // Rows
  var newRow = $("<div></div>").addClass("row");
  var newRow2 = $("<div></div>").addClass("row");
  var newRow3 = $("<div></div>").addClass("row");
  // Cols
  var newCol = $("<div></div>").addClass("col-md-4");
  var newCol2 = $("<div></div>").addClass("col-md-8");
  var newCol3 = $("<div id='user-energy'></div>").addClass("col-md-12");
  var newCol4 = $("<div id='user-stats'></div>").addClass("col-md-12");
  // Separators
  var newSeparator = $('<img src="https://robert-csaszar.com/projects/spooky/assets/img/navigation/Right-Light.png" class="separator img-fluid" alt="">');
  var newSeparator2 = $('<img src="https://robert-csaszar.com/projects/spooky/assets/img/navigation/Right-Light.png" class="separator img-fluid" alt="">');
  var newSeparator3 = $('<img src="https://robert-csaszar.com/projects/spooky/assets/img/navigation/Right-Light.png" class="separator img-fluid" alt="">');
  // User Infos
  var newAvatar = $("<div id='avatar'></div>").addClass("text-center");
  var userStatus = $("<div id='user-status'></div>");
  var newName = $("<span>" + char.charName + "</span>").addClass("name");
  var newClass = $("<span>" + char.class + "</span>").addClass("class");
  var newCandy = $("<span>Candy" + " : " + char.money + "</span>").addClass("status");
  // User Energy
  var energy = $("<p>Energy: </p>");
  var energyVal = $("<span id='energy'>" + char.energy + " % " + "</span>");
  var energyBar = $("<div id='energy-bar'></div>").addClass("progress mb-2");
  var energyBarVal = $("<div style='width:100%'></div>").addClass("progress-bar");
  // User stats
  var int = $("<p>Intelligence: </p>");
  var str = $("<p>Strength: </p>");
  var dex = $("<p>Dexterity: </p>");
  var armor = $("<p>Armor: </p>");
  var power = $("<p>Power: </p>");
  var newInt = $("<span id='int'>" + char.int + "</span>");
  var newStr = $("<span id='str'>" + char.str + "</span>");
  var newDex = $("<span id='dex'>" + char.dex + "</span>");
  var newArmor = $("<span id='armor'>" + char.armor + "</span>");
  var newPower = $("<span id='power'>" + char.power + "</span>");

  if (dracula == "Dracula") {
    newAvatar.append('<img src="https://robert-csaszar.com/projects/spooky/assets/img/avatar/Dracula.png" alt="" style="width:70px">');
  } else if (frankenstein == "Frankenstein") {
    newAvatar.append('<img src="https://robert-csaszar.com/projects/spooky/assets/img/avatar/Frankenstein.png" alt="" style="width:70px">');
  } else if (witch == "Witch") {
    newAvatar.append('<img src="https://robert-csaszar.com/projects/spooky/assets/img/avatar/Witch.png" alt="" style="width:70px">');
  } else {
    "No avatar"
  }

  // Render the user details //

  userOnline.append(newRow);

  // User Avatar //
  newRow.append(newCol);
  newCol.append(newAvatar);

  // User Status //
  newRow.append(newCol2);
  newCol2.append(userStatus);
  userStatus.append(newName);
  userStatus.append(newClass);
  userStatus.append(newCandy);

  // Separator //
  userOnline.append(newSeparator);

  // User energy //
  userOnline.append(newRow2);
  newRow2.append(newCol3);
  newCol3.append(energy);
  energy.append(energyVal);
  newCol3.append(energyBar);
  energyBar.append(energyBarVal);

  // Separator //
  userOnline.append(newSeparator2);

  // User Stats //
  userOnline.append(newRow3);
  newRow3.append(newCol4);
  newCol4.append(int);
  int.append(newInt);
  newCol4.append(str);
  str.append(newStr);
  newCol4.append(dex);
  dex.append(newDex);
  newCol4.append(armor);
  armor.append(newArmor);
  newCol4.append(power);
  power.append(newPower);

  // Separator //
  userOnline.append(newSeparator3);

}

var createCharacter = function() {

  var name = $("#charName").val()
  var account = firebase.auth().currentUser.uid
  var charClass = localStorage["class"];

  var charInfo = {
    accountId: account,
    charName: name,
    class: charClass,
    int: 10,
    str: 10,
    dex: 10,
    armor: 20,
    energy: 100,
    power: 0,
    money: 0,
    image: "https://google.com"
  };

  var updates = {};
  updates['/characters/' + account] = charInfo;

  $("#createChar").modal("hide")
  location.reload();

  return firebase.database().ref().update(updates);

}
