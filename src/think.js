/**
 * High level decision making
 */
function think() {
  enemyUnits = scope.getUnits({enemyOf: scope.playerNumber});
  enemyBuildings = scope.getBuildings({enemyOf: scope.playerNumber});

  // determine enemy faction via seen units/buildings. Adjust playstyle accordingly

  if (scope.lastScout + 60 > time && !scope.earlyGame) {
    scout();
  }

  if (scope.lastEvaluation + 60 > time) {
    evaluatePosition();
  }

}

function scout() {
  // scout
}

function evaluatePosition() { 
  // are we winning or losing or even?
}