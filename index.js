// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return 264 * Math.abs(startingBlock-endingBlock);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  switch (true) {
    case (distance >2500):
      return 'cannot travel that far';
    case (distance <400):
      return 0;
    case (400 <distance && distance <2000):
      return distance * .02;
    case (distance > 2000):
      return 25;
    default:

  }
}
