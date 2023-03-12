/**
 * Macro
 */
function macro() {

  intializeMacro();

  if (scope.earlyGame) {
    if (make(scope.build.buildOrder[scope.buildOrderStep])) {
      scope.buildOrderStep += 1;
      if (scope.buildOrderStep >= scope.build.buildOrder.length) {
        scope.earlyGame = false;
      }
    }
  } else {
    //regular macro stuff (non build order)
  }
}

function intializeMacro() {
  gold = scope.getGold();
  supply = scope.getCurrentSupply();
  maxSupply = scope.getMaxSupply();

  workers = scope.getUnits({type: "Worker", player: scope.playerNumber});
  idleWorkers = scope.getUnits({type: "Worker", player: scope.playerNumber, order: "Stop"});

  castles = scope.getBuildings({type: "Castle", player: scope.playerNumber});
  fortresses = scope.getBuildings({type: "Fortress", player: scope.playerNumber});
  bases = castles.concat(fortresses);

  houses = scope.getBuildings({type: "House", player: scope.playerNumber});
  towers = scope.getBuildings({type: "Watchtower", player: scope.playerNumber});
  rax = scope.getBuildings({type: "Barracks", player: scope.playerNumber});
  forges = scope.getBuildings({type: "Forge", player: scope.playerNumber});
  labs = scope.getBuildings({type: "Animal Testing Lab", player: scope.playerNumber});
  guilds = scope.getBuildings({type: "Mages Guild", player: scope.playerNumber});
  churches = scope.getBuildings({type: "Church", player: scope.playerNumber});
  dens = scope.getBuildings({type: "Wolves Den", player: scope.playerNumber});
  wwDens = scope.getBuildings({type: "Werewolves Den", player: scope.playerNumber});
  dragonsLairs = scope.getBuildings({type: "Dragons Lair", player: scope.playerNumber});
  snakeCharmer = scope.getBuildings({type: "Snake Charmer", player: scope.playerNumber});
  workshops = scope.getBuildings({type: "Workshop", player: scope.playerNumber});
  mills = scope.getBuildings({type: "Mill", player: scope.playerNumber});
  advWorkshops = scope.getBuildings({type: "Advanced Workshop", player: scope.playerNumber});

  trainingDictionary = {
    "Worker": bases,
    "Bird": bases,
    "Soldier": rax,
    "Archer": rax,
    "Raider": rax,
    "Mage": rax,
    "Priest": churches,
    "Wolf": dens,
    "Snake": dens,
    "Dragon": dragonsLairs,
    "Werewolf": wwDens,
    "Gatling Gun": workshops,
    "Catapult": workshops,
    "Gyrocraft": mills,
    "Airship": advWorkshops,
    "Ballista": advWorkshops
  }

  costDictionary = {
    "Worker": 50,
    "Bird": 75,
    "Soldier": 80,
    "Archer": 80,
    "Raider": 110,
    "Mage": 125,
    "Priest": 100,
    "Wolf": 45,
    "Snake": 50,
    "Dragon": 140,
    "Werewolf": 225,
    "Gatling Gun": 95,
    "Catapult": 110,
    "Gyrocraft": 110,
    "Airship": 100,
    "Ballista": 150
  }
}

function make(str) {
  let buildings = ["Castle", "Barracks", "Watchtower", "House", "Mages Guild", "Workshop", "Forge", "Dragons Lair", "Wolves Den", "Animal Testing Lab", "Advanced Workshop", "Werewolves Den", "Church", "Snake Charmer", "Mill", "Armory"];
  let units = ["Worker", "Soldier", "Archer", "Raider", "Mage", "Priest", "Wolf", "Bird", "Snake", "Dragon", "Werewolf", "Gatling Gun", "Catapult", "Airship", "Gyrocraft", "Ballista"];
  if (buildings.includes(str)) {
    return build(str);
  } else if (units.includes(str)) {
    return train(str);
  } else {
    return false;
  }
}

function build(building) {
  //build building
}

function train(unit) {
  if (gold >= costDictionary[unit]) {
    for (i = 0; i < trainingDictionary[unit].length; i++) {
      if(!trainingDictionary[unit][i].getUnitTypeNameInProductionQueAt(1)) {
        scope.order("Train " + unit, [trainingDictionary[unit][i]]);
        gold -= costDictionary[unit];
        return true;
      }
    }
  }
  return false;
}