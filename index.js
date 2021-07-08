// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  let blocks = Math.abs(pickupLocation - 42);
  return blocks;
}

function distanceFromHqInFeet(pickupLocation) {
  let blocks = distanceFromHqInBlocks(pickupLocation);
  let feet = blocks * 264;
  return feet;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  let blocks = Math.abs(startingBlock-endingBlock);
  let feet = blocks * 264;
  return feet;
}

function calculatesFarePrice(startingBlock, endingBlock) {
  let feet = distanceTravelledInFeet(startingBlock, endingBlock);
  let fare;

  if (feet >= 1 && feet <= 400) {
    return fare = 0;
  } else if (feet >= 400 && feet <= 2000) {
    fare = feet * 0.02;
    return fare;
  } else if (feet >= 2000 && feet <= 2500) {
    return fare = 25;
  } else if (feet > 2500) {
    return 'cannot travel that far';
  }
}
