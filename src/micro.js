/**
 * Micro
 */
function micro() {

  soldiers = scope.getUnits({type: "Soldier", player: scope.playerNumber});
  archers = scope.getUnits({type: "Archer", player: scope.playerNumber});
  mages = scope.getUnits({type: "Mage", player: scope.playerNumber});
  priests = scope.getUnits({type: "Priest", player: scope.playerNumber});
  raiders = scope.getUnits({type: "Raider", player: scope.playerNumber});
  wolves = scope.getUnits({type: "Wolf", player: scope.playerNumber});
  snakes = scope.getUnits({type: "Snake", player: scope.playerNumber});
  wereWolves = scope.getUnits({type: "Werewolf", player: scope.playerNumber});
  dragons = scope.getUnits({type: "Dragon", player: scope.playerNumber});
  gats = scope.getUnits({type: "Gatling Gun", player: scope.playerNumber});
  gyros = scope.getUnits({type: "Gyrocraft", player: scope.playerNumber});
  catapults = scope.getUnits({type: "Catapult", player: scope.playerNumber});
}