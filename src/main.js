/**
 * Main
 */
if (!scope.initialized) {
  initialize();
}

const time = scope.getCurrentGameTimeInSec();

if (!scope.micro) {
  macro();
} else {
  micro();
}

think();

scope.micro = !scope.micro;

function initialize() {
  scope.playerNumber = scope.getMyPlayerNumber();
  scope.teamNumber = scope.getMyTeamNumber();
  scope.mapWidth = scope.getMapWidth();
  scope.mapHeight = scope.getMapHeight();
  scope.earlyGame = true;
  scope.build = getRandomBuildOrder();
  scope.buildOrderStep = 0;
  scope.lastScount = 0;
  scope.lastEvaluation = 0;

  chat("Ivory AI initialized.");
  console.log("Ivory AI initialized.");
  chat("glhf!");
  scope.initialized = true;
}
