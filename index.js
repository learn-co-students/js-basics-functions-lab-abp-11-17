const feetPerBlock = 264;
const hqStreet = 42;

function distanceFromHqInBlocks(location) {
  if (location > hqStreet) {
    return location - hqStreet;
  } else {
    return hqStreet - location;
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock > endBlock) {
    return (startBlock - endBlock) * feetPerBlock;
  } else {
    return (endBlock - startBlock) * feetPerBlock;
  }
}

function  calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);

  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance <= 2500 && distance > 2000) {
    return 25;
  } else if (distance <= 2000 && distance > 400) {
    return distance * 0.02;
  } else {
    return 0;
  }
}
