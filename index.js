
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
  return blockNumber - 42;
} else { return 42 - blockNumber;
 }
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks (blockNumber) * 264
}

function distanceTravelledInFeet (startBlock, endBlock) {
  return Math.abs(endBlock - startBlock) * 264;
}

function calculatesFarePrice (startBlock, endBlock) {
  const feet = distanceTravelledInFeet(startBlock, endBlock);
  let price;

  switch (true) {
    case feet < 400:
      price = 0;
      return price;

    case feet < 2000:
      price = feet * 0.02
      return price;

    case feet < 2500:
      price = 25
      return price;

    case feet > 2500:
      return 'cannot travel that far';

    }
  }
