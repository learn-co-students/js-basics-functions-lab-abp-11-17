// Code your solution in this file!
function distanceFromHqInBlocks(to) {
  return Math.abs(to - 42);
}

function distanceFromHqInFeet(to) {
  return distanceFromHqInBlocks(to) * 264;
}

function distanceTravelledInFeet(from, to) {
  return Math.abs(from - to) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if(distance < 400){
    return 0;
  } else if(distance >= 400 && distance <= 2000) {
    return distance * 0.02;
  } else if(distance > 2000 && distance <= 2500) {
    return 25
  } else {
    return "cannot travel that far";
  }
}
