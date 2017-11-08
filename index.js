// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return blocks =  Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
  return feet = distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, end) {
  return distance = Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end) {
  let fareDistance = distanceTravelledInFeet(start, end)

  let fare;

  if (fareDistance <= 400) {
    return fare = 0;
  } else if (fareDistance > 400 && fareDistance <= 2000) {
    return fare = .02 * fareDistance;
  } else if (fareDistance > 2000 && fareDistance < 2500) {
    return fare = 25;
  } else if (fareDistance > 2500) {
    return 'cannot travel that far';
  }
}
