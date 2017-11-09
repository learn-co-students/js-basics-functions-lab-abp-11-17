// Code your solution in this file!
function distanceFromHqInBlocks (location) {
  if (location > 42) {
    return location - 42;
  } else if (location < 42) {
    return 42 - location;
  }
}

function distanceFromHqInFeet (location) {
  let blocks = distanceFromHqInBlocks(location);
  return blocks * 264;
}

function distanceTravelledInFeet (start, end) {
  return Math.abs(end - start) * 264;
}

function calculatesFarePrice(start, end) {
  let free = 399;
  let feet = distanceTravelledInFeet(start, end);

  if (feet < 400) {
    return 0;
  } else if (feet >= 400 && feet <= 2000) {
    return feet * 0.02;
  } else if (feet <= 2500 && feet > 2000) {
    return 25;
  } else if (feet > 2500) {
    return 'cannot travel that far';
  }
}
