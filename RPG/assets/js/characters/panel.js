// function Items(options) {
//   options = options || {};
//   this.id = options.id;
//   this.name = options.name;
//   this.icon = options.icon;
//   this.defense = options.defense;
//   this.attack = options.attack;
//   this.category = options.category;
//   this.equipped = options.equipped;
// }


// var helmet = [
//   "http://wow.zamimg.com/images/wow/icons/large/inv_helm_plate_legiondungeon_c_03.jpg",
//   "http://wow.zamimg.com/images/wow/icons/large/inv_helm_plate_legiondungeon_c_02.jpg",
//   "http://wow.zamimg.com/images/wow/icons/large/inv_helm_plate_legionquest100_b_01.jpg",
//   "http://wow.zamimg.com/images/wow/icons/large/inv_helm_plate_zandalardungeon_c_01.jpg",
//   "http://wow.zamimg.com/images/wow/icons/large/inv_helm_plate_kultirasdungeon_c_01.jpg"
// ]

// var itemNames = [
//   "Helm 1",
//   "Helm 2",
//   "Helm 3",
//   "Helm 4",
//   "Helm 5"
// ]

// var inventoryTest = []

// var generateRandomItem = new Items({
//   id: Math.floor(Math.random() * 1000),
//   name: itemNames[Math.floor(Math.random() * itemNames.length)],
//   icon: helmet[Math.floor(Math.random() * helmet.length)],
//   defense: Math.floor(Math.random() * 20),
//   attack: Math.floor(Math.random() * 20),
//   category: Math.floor(Math.random() * 11 + 1),
// })

// var generateItem = function() {
//   var dropRate = Math.floor(Math.random() * 100);
//   var inventorySlot = $("#inv-slots");
//   var html = "";
//   if (dropRate > 80) {
//     generateRandomItem;
//     inventoryTest.push(generateRandomItem);
//     console.log("Inventory: ", inventoryTest)
//     html += "<li class='char-slots' id='epic' style='background-image: url(" + generateRandomItem.icon + ")' draggable='true' ondragstart='drag(event)' </li>";
//     inventorySlot.html(html);
//   }
//   if (dropRate < 50) {
//     generateRandomItem;
//     inventoryTest.push(generateRandomItem);
//     console.log("Inventory: ", inventoryTest)
//     html += "<li class='char-slots' id='common' style='background-image: url(" + generateRandomItem.icon + ")' draggable='true' ondragstart='drag(event)' </li>";
//     inventorySlot.html(html);
//   }
//   if (dropRate < 10) {
//     generateRandomItem;
//     inventoryTest.push(generateRandomItem);
//     console.log("Inventory: ", inventoryTest)
//     html += "<li class='char-slots' id='legendary' style='background-image: url(" + generateRandomItem.icon + ")' draggable='true' ondragstart='drag(event)' </li>";
//     inventorySlot.html(html);
//   }
// }

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
//   for (var i = 0; i < inventoryTest.length - inventoryTest.length + 1; i++) {
//     var equipped = function() {
//       for (var j = 0; j < player.items.length; j++) {
//         var itemCategory = player.items[j];
//         var invItemCategory = inventoryTest[i];
//       }
//       player.defense += inventoryTest[i].defense;
//       player.attack += inventoryTest[i].attack;
//     }
//     equipped();
//   }
//   playerStats();
// }

$(domLoaded)

function domLoaded() {
  console.log("Dom loaded")
  
  $(".upgrade").on("click", function(event) {
      
  })
   
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}