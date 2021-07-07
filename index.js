// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
  return Math.abs(42 - pickupLocation);
}

function distanceFromHqInFeet(pickupLocation){
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(beg, end){
  return Math.abs((end - beg) * 264);
}

function calculatesFarePrice(start, destination){
  if(distanceTravelledInFeet(start, destination) < 400){
    return 0;
  }
  if(distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
    return distanceTravelledInFeet(start, destination) * .02;
  }
  if(distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
    return 25;
  }
  if(distanceTravelledInFeet(start, destination) > 2500){
    return "cannot travel that far";
  }
}
