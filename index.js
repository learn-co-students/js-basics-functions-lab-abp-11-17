// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location >42) {
    return location - 42;
  } else {
    return 42 - location;
  }
}

function distanceFromHqInFeet(location) {
  if (location >42) {
    return (location - 42) * 264;
  } else {
    return (42 - location) * 264;
  }
}

function distanceTravelledInFeet(start, end) {
  let distance;
(end - start>0) ? distance=end-start : distance=start-end;
    return distance * 264;
  }

function calculatesFarePrice(start, end) {
  let cost=distanceTravelledInFeet(start, end);
  if (cost<400) {
    return 0;
  } else if (cost>400 && cost<2000) {
    return cost * 0.02;
  } else if (cost>2000 && cost<2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
