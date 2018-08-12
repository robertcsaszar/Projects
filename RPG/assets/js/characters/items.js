function Items(options) {
  options = options || {};
  this.id = options.id;
  this.name = options.name;
  this.icon = options.icon;
  this.defense = options.defense;
  this.attack = options.attack;
  this.cost = options.cost;
  this.upgrade = options.upgrade;
  this.quality = "Common";
}

var items = [
  new Items({
    id: 1,
    name: "Training Helm",
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_helmet_24.jpg'>",
    defense: 2,
    cost: 0,
    upgrade: 1
  }),
  new Items({
    id: 2,
    name: "Training Amulet",
    defense: 2,
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_110.jpg' >",
    cost: 0,
    upgrade: 1
  }),
  new Items({
    id: 3,
    name: "Training Shoulder",
    defense: 2,
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_misc_desecrated_plateshoulder.jpg' >",
    cost: 0,
    upgrade: 1
  }),
  new Items({
    id: 4,
    name: "Training Chest",
    defense: 2,
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_chest_chain_10.jpg' >",
    cost: 0,
    upgrade: 1
  }),
  new Items({
    id: 5,
    name: "Training Back",
    defense: 2,
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_misc_cape_15.jpg' >",
    cost: 0,
    upgrade: 1
  }),
  new Items({
    id: 6,
    name: "Training Wirst",
    defense: 2,
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_bracer_07.jpg' >",
    cost: 0,
    upgrade: 1
  }),
  new Items({
    id: 7,
    name: "Training Gloves",
    defense: 2,
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_gauntlets_29.jpg' >",
    cost: 0,
    upgrade: 1
  }),
  new Items({
    id: 8,
    name: "Training Waist",
    defense: 2,
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_belt_22.jpg' >",
    cost: 0,
    upgrade: 1
  }),
  new Items({
    id: 9,
    name: "Training Pants",
    defense: 2,
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_misc_desecrated_platepants.jpg' >",
    cost: 0,
    upgrade: 1
  }),
  new Items({
    id: 10,
    name: "Training Boots",
    defense: 2,
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_boots_chain_02.jpg' >",
    cost: 0,
    upgrade: 1
  }),
  new Items({
    id: 11,
    name: "Training Ring",
    defense: 2,
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_70_quest_ring7a.jpg' >",
    cost: 0,
    upgrade: 1
  }),
  new Items({
    id: 12,
    name: "Training Weapon",
    attack: 5,
    icon: "<img class='item-slot' src='http://wow.zamimg.com/images/wow/icons/large/inv_weapon_glave_01.jpg' >",
    cost: 0,
    upgrade: 1
  })
]