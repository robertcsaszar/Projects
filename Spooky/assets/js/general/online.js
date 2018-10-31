var online = function() {
  var characters = firebase.database().ref('characters/');
  var userId = localStorage["account.uid"];
  var charOnline = firebase.database().ref('characters/' + userId);

  if (userId) {
    charOnline.update({
      online: 1
    });
  }

  characters.on("child_added", function(snapshot) {
    var values = snapshot.val();
    var onlinePlayers = $("#onlinePlayers");
    var row = $("<tr></tr>");
    var name = $("<td></td>")
    var charClass = $("<td></td>")
    var power = $("<td></td>")
    var span = $("<span>" + values.charName + "</span>")
    var span2 = $("<span>" + values.class + "</span>")
    var span3 = $("<span>" + values.power + "</span>")

    if (values.online == 1) {
      onlinePlayers.append(row);
      row.append(name);
      row.append(charClass);
      row.append(power);
      name.append(span)
      charClass.append(span2)
      power.append(span3)
    }
  })
}

online()