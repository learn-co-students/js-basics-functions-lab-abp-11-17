// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(42 - num);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(from, to) {
  return Math.abs(from - to) * 264;
}

function calculatesFarePrice(from, to) {
  var distanceInFeet = distanceTravelledInFeet(from, to);
  if(distanceInFeet <= 400) {
    return 0;
  } else if(distanceInFeet > 400 && distanceInFeet <= 2000) {
    return distanceInFeet * .02;
  } else if(distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else{
    return "cannot travel that far";
  }
}
