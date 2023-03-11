/**
 * Misc functions
 */
function chat(msg) {
  let message = "Ivory - " + getColour() + ": " + msg
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