// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  var distance = Math.abs(pickupLocation - 42);
  return distance;
}

function calculateVertical(start, destination) {
  return Math.abs(destination - start) * 264;
}

function distanceFromHqInFeet(pickupLocation) {
  var distance1 = Math.abs(pickupLocation - 42) * 264;
  return distance1;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  var feet = distanceTravelledInFeet(start, destination);
  if (feet > 2500) {
    return 'cannot travel that far';
  } else if (feet >= 400 && feet < 2000) {
    return feet * 0.02;
  } else if (feet > 2000) {
    return 25;
  } else {
    return 0;
  }

}
