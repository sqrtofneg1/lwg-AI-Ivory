/**
 * Macro
 */
function macro() {
  gold = scope.getGold();
  supply = scope.getCurrentSupply();
  maxSupply = scope.getMaxSupply();

  workers = scope.getUnits({type: "Worker", player: scope.playerNumber});
  idleWorkers = scope.getUnits({type: "Worker", player: scope.playerNumber, order: "Stop"});

  castles = scope.getBuildings({type: "Castle", player: scope.playerNumber});
  fortresses = scope.getBuildings({type: "Fortress", player: scope.playerNumber});

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

function make(str) {
  let buildings = ["Castle", "Barracks", "Watchtower", "Watchtower (detection)", "House", "Mages Guild", "Workshop", "Forge", "Dragons Lair", "Wolves Den", "Animal Testing Lab", "Advanced Workshop", "Werewolves Den", "Church", "Snake Charmer", "Mill", "Armory"];
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
  //train unit
}