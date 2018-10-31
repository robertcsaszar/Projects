var createDungeon = function() {

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