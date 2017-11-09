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
  if (start < end) {
    return (end - start) * 264;
  } else {
  if (start > end) {
    return (start - end) * 264
  }
}
