// Code your solution in this file!
function distanceFromHqInBlocks(pickupBlock){
  const blocksHQ = Math.abs(pickupBlock-42);
  return blocksHQ;
}


function distanceFromHqInFeet(pickupBlock){
  const feetHQ = distanceFromHqInBlocks(pickupBlock)*264;
  return feetHQ;
}

function distanceTravelledInFeet(a, b){
    const distance = Math.abs(a-b)*264;
    return distance;
}

function calculatesFarePrice(a, b){
  const distance = distanceTravelledInFeet(a, b);
  switch(true){
    case distance<=400:
      return 0;
    case distance<2000:
      return distance*.02;
    case distance<2500:
      return 25;
    case distance>2500:
      return 'cannot travel that far'
  }
}
