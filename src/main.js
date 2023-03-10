if (!scope.initialized) {
  initialize();
}

if (!scope.micro) {
  macro();
} else {
  micro();
}

function initialize() {
  scope.playerNumber = scope.getMyPlayerNumber();
  scope.teamNumber = scope.getMyTeamNumber();
  chat("Ivory AI initialized.");
  console.log("Ivory AI initialized.");
  chat("glhf!");
  scope.initialized = true;
}
