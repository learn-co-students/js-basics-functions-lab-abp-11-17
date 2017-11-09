// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks (streetNum) {
  return Math.abs(streetNum - hq);
}

/*
The standard block in Manhattan is about 264 by 900 feet (80 m × 274 m); and in some U.S. cities standard blocks are as wide as 660 feet (200 m).
*/
function distanceFromHqInFeet (streetNum) {
  return 264 * distanceFromHqInBlocks (streetNum);
}

function distanceTravelledInFeet (start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice (start, end) {
  let distance = Math.abs(start - end) * 264;
  let price = 0;

  /*
  if (distance < 400) {
    return 0;
  } else if (distance <= 2000) {
    return 0.02 * distance;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
  */

  switch (true) {
    case (distance < 400): return 0;
    case (distance <= 2000): return 0.02 * distance;
    case (distance <= 2500): return 25;
    case (distance> 2500): return 'cannot travel that far';
  } // end switch
}
