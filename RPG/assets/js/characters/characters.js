// Characters //
// function Character(options) {
//   options = options || {};
//   this.name = options.name;
//   this.hp = 100;
//   this.mana = 100;
//   this.attack = options.attack;
//   this.defense = options.defense;
//   this.criticalDMG = options.criticalDMG;
//   this.resistCriticalDMG = options.resistCriticalDMG;
//   this.level = 1;
//   this.xp = 0;
//   this.select = options.select;
// }

// var sylvanas = new Character({
//   name: "Sylvanas",
//   attack: 10,
//   defense: 15,
//   criticalDMG: 20,
//   resistCriticalDMG: 15
// })

// var maiev = new Character({
//   name: "Maiev",
//   attack: 15,
//   defense: 10,
//   criticalDMG: 15,
//   resistCriticalDMG: 10
// })

// var illidan = new Character({
//   name: "Illidan Stormrage",
//   attack: 20,
//   defense: 10,
//   criticalDMG: 25,
//   resistCriticalDMG: 20
// })

var charactersCreation = [{
    name: "Sylvanas",
    hp: 100,
    mana: 100,
    attack: 10,
    defense: 15,
    criticalDMG: 20,
    resistCriticalDMG: 15,
    level: 1,
    xp: 0,
    select: 0
  },
  {
    name: "Maiev",
    hp: 100,
    mana: 100,
    attack: 15,
    defense: 10,
    criticalDMG: 15,
    resistCriticalDMG: 10,
    level: 1,
    xp: 0,
    select: 0
  },
  {
    name: "Illidan Stormrage",
    hp: 100,
    mana: 100,
    attack: 20,
    defense: 10,
    criticalDMG: 25,
    resistCriticalDMG: 20,
    level: 1,
    xp: 0,
    select: 0
  }
]

// Add the characters //

var sylvanasBtn = $("#sylvanas:checked");
var maievBtn = $("#maiev:checked");
var illidanBtn = $("#illidan:checked");

player.characters.push(charactersCreation[0]);
player.characters.push(charactersCreation[1]);
player.characters.push(charactersCreation[2]);

var sylvanasCheck = function() {
  if(player.characters[0].select === 0) {
    player.selectSylvanas = 1
    player.characters[0].select = 1
  } else if(player.characters[1].select === 1) {
    player.selectSylvanas = 0
    player.characters[0].select = 0
  } else if(player.caracters[2].select === 1) {
    player.selectSylvanas = 0
    player.characters[0].select = 0
  }
}

var maievCheck = function() {
  if(player.characters[1].select === 0) {
    player.selectMaiev = 1
    player.characters[1].select = 1
  } else if(player.characters[0].select === 1) {
    player.selectMaiev = 0
    player.characters[1].select = 0
  } else if(player.caracters[2].select === 1) {
    player.selectMaiev = 0
    player.characters[1].select = 0
  }
}

var illidanCheck = function() {
  if(player.characters[2].select === 0) {
    player.selectIllidan = 1
    player.characters[2].select = 1
  } else if(player.characters[0].select === 1) {
    player.selectIllidan = 0
    player.characters[2].select = 0
  } else if(player.caracters[1].select === 1) {
    player.selectIllidan = 0
    player.characters[2].select = 0
  }
}

var charSylvanas = player.characters[0];
var charMaiev = player.characters[1];
var charIllidan = player.characters[2];

// Add items on all characters (Training Set) //

charSylvanas.items = items;
charMaiev.items = items;
charIllidan.items = items;

// Equip the Training Set //

var equiptItems = function() {
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
  if (charSylvanas.select === 1) {
    charSylvanas.defense += helm.defense
    charSylvanas.defense += amulet.defense
    charSylvanas.defense += shoulder.defense
    charSylvanas.defense += chest.defense
    charSylvanas.defense += back.defense
    charSylvanas.defense += wrist.defense
    charSylvanas.defense += gloves.defense
    charSylvanas.defense += waist.defense
    charSylvanas.defense += pants.defense
    charSylvanas.defense += boots.defense
    charSylvanas.defense += ring.defense
    charSylvanas.attack += weapon.attack
  } else if (charMaiev.select === 1) {
    charMaiev.defense += helm.defense
    charMaiev.defense += amulet.defense
    charMaiev.defense += shoulder.defense
    charMaiev.defense += chest.defense
    charMaiev.defense += back.defense
    charMaiev.defense += wrist.defense
    charMaiev.defense += gloves.defense
    charMaiev.defense += waist.defense
    charMaiev.defense += pants.defense
    charMaiev.defense += boots.defense
    charMaiev.defense += ring.defense
    charMaiev.attack += weapon.attack
  } else if (charIllidan.select === 1) {
    charIllidan.defense += helm.defense
    charIllidan.defense += amulet.defense
    charIllidan.defense += shoulder.defense
    charIllidan.defense += chest.defense
    charIllidan.defense += back.defense
    charIllidan.defense += wrist.defense
    charIllidan.defense += gloves.defense
    charIllidan.defense += waist.defense
    charIllidan.defense += pants.defense
    charIllidan.defense += boots.defense
    charIllidan.defense += ring.defense
    charIllidan.attack += weapon.attack
  }
}