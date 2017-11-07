// Code your solution in this file!
function calculateVertical(x1, x2) {
  return Math.abs(x2 - x1) * 264;
}

function distanceFromHqInBlocks(distance) {
  return Math.abs(42 - distance);
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264 ;
}

function distanceTravelledInFeet(x1, x2) {
  return calculateVertical(x1, x2);
}

function calculatesFarePrice(x1, x2) {
  const distance = calculateVertical(x1, x2);
  if (distance <= 400) {
    return 0;
  }
  if (distance > 400 && distance <= 2000) {
    return distance * .02;
  }
  if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
