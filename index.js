// Code your solution in this file!
function distanceFromHqInBlocks(location){
    return Math.abs(location - 42);
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(start, destination){
  return Math.abs(distanceFromHqInFeet(start)-distanceFromHqInFeet(destination));
}

function calculatesFarePrice(start, destination){
  let totalDistance = distanceTravelledInFeet(start, destination);

  switch (true){
    case (totalDistance >= 2500):
      return "cannot travel that far";
    case (totalDistance < 400):
      return 0;
    case (totalDistance >= 400 && totalDistance <= 2000):
      return (totalDistance*2)/100;
    case (totalDistance > 2000 && totalDistance <2500):
      return 25;
  }
}
