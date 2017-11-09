const ftPerBlock = 264;
const hqLoc = 42;

// Code your solution in this file!
function distanceFromHqInBlocks (location) {
  if (location > hqLoc) {
    return location - hqLoc;
  }
  else {
    return hqLoc - location;
  }
}

function distanceFromHqInFeet (location) {
  return ftPerBlock*distanceFromHqInBlocks(location);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function distanceTravelledInFeet(start, end) {
  let blocks = 0;
  if (end > start)  {
    blocks = end - start;
  }
  else {
    blocks = start - end;
  }

  return blocks*ftPerBlock;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
      return 0;
  }
  else if (distance < 2000) {
    return distance * .02;
  }
  else if (distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
