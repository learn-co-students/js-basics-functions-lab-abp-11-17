// Code your solution in this file!
function distanceFromHqInBlocks(blockNum){
  if(blockNum > 42){
    return blockNum - 42;
  } else{
    return 42 - blockNum;
  }
};

console.log(distanceFromHqInBlocks(blockNum));

function distanceFromHqInFeet (blockNum) {
    return distanceFromHqInBlocks(blockNum) * 264;
};

function distanceTravelledInFeet(origin, destination){
  if(origin < destination){
    return (destination - origin) * 264;
  } else{
    return (origin - destination) * 264;
  }
};

function calculatesFarePrice(origin, destination){
 const distance = distanceTravelledInFeet(origin, destination);

  if(distance<=400){
    return 0;
  } else if (distance > 400 && distance <=2000){
    return distance*0.02;
  } else if (distance >2000 && distance <=2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
};
