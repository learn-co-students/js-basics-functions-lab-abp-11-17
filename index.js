// Code your solution in this file!
function distanceFromHqInBlocks(street){
  return Math.abs(street-42)
}
function distanceFromHqInFeet(street){
  return (distanceFromHqInBlocks(street)*264);
}
function distanceTravelledInFeet(street1,street2){
  return Math.abs (street1-street2)*264;
}

function calculatesFarePrice(street1,street2){

  if (distanceTravelledInFeet(street1,street2)<=400) {
    return 0;
  }
  else if (distanceTravelledInFeet(street1,street2)<=2000) {
  return (distanceTravelledInFeet(street1,street2)-400)*0.02;
  }
else if (distanceTravelledInFeet(street1,street2)<=2500){
    return 25;
  }
  else {
    return "cannot travel that far";
  }

}
