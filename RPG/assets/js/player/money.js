// var percent = Math.floor((43 * 10) / 100) + ' %';

var money = function() {
  var moneyDropLow = Math.floor(Math.random() * 100);
  var moneyDropMedium = Math.floor(Math.random() * 500);
  var moneyDropHigh = Math.floor(Math.random() * 1000);
  var moneyDropVeryHigh = Math.floor(Math.random() * 5000);
  if(enemy.level < 5) {
    player.money += moneyDropLow;
    $("#char-logs").prepend("<span style='lightblue'>You won " + moneyDropLow + " money!</span><br>");
  } else if(enemy.level < 10) {
    player.money += moneyDropMedium;
    $("#char-logs").prepend("<span style='lightblue'>You won " + moneyDropMedium + " money!</span><br>");
  } else if(enemy.level < 15) {
    player.money += moneyDropHigh;
    $("#char-logs").prepend("<span style='lightblue'>You won " + moneyDropHigh + " money!</span><br>");
  } else if(enemy.level < 20) {
    player.money += moneyDropVeryHigh;
    $("#char-logs").prepend("<span style='lightblue'>You won " + moneyDropVeryHigh + " money!</span><br>");
  }
}