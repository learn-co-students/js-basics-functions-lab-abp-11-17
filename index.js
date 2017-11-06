// Code your solution in this file!
const HQ = 42;

function distanceFromHqInBlocks(location) {
  let distance = Math.abs(location-HQ);
  return distance
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, end) {
  let distance = Math.abs(end-start) * 264;
  return distance
}


function calculatesFarePrice(start, end) {
  let distance = Math.abs(end-start) * 264;
  let fare = 0;
  if (distance < 400) {
    fare = 0
    return fare;
  } else if (distance <= 2000) {
    fare = distance * .02
    return fare;
  } else {
    if (distance <= 2500) {
      fare = 25
      return fare;
    } else {
      return 'cannot travel that far'
    }
  }
}
