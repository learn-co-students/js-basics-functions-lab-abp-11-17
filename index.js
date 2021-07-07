// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber){
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet (blockNumber) {
  let blocks = distanceFromHqInBlocks(blockNumber);

  return blocks * 264;
}

function distanceTravelledInFeet (startBlock, endBlock){

  if (endBlock > startBlock){
    return (endBlock - startBlock) * 264;
  } else {
    return (startBlock - endBlock) * 264;
  }
}

function calculatesFarePrice(startBlock, endBlock) {
  let feetTravelled = Math.abs(endBlock - startBlock) * 264;

  if (feetTravelled < 400){
    return 0;
  } else if (feetTravelled > 400 && feetTravelled <= 2000) {
    return feetTravelled * .02;
  } else if (feetTravelled > 2000 && feetTravelled < 2500) {
    return 25;
  } else if (feetTravelled > 2500) {
    return "cannot travel that far";
  }
}
