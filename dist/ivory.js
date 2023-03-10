function chat(msg) {
  let message = getColour() + ": " + msg
  scope.chatMsg(message);
}

function getColour(){
  switch(scope.playerNumber){
    case 1:
      return "Red";
    case 2:
      return "Blue";
    case 3:
      return "Green";
    case 4:
      return "White";
    case 5:
      return "Black";
    case 6:
      return "Yellow";
    default:
      return null;
  }
}
if (!scope.initialized) {
  initialize();
}



function initialize() {
  scope.playerNumber = scope.getMyPlayerNumber();
  scope.teamNumber = scope.getMyTeamNumber();
  chat("Ivory AI initialized.");
  console.log("Ivory AI initialized.");
  chat("glhf!");
  scope.initialized = true;
}
