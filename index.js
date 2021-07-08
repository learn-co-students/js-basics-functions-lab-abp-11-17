// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
  return Math.abs(dist - 42);
}

function distanceFromHqInFeet(dist) {
  return distanceFromHqInBlocks(dist) * 264;
}

function distanceTravelledInFeet(dist1, dist2) {
  return Math.abs(dist1 - dist2) * 264;
}

function calculatesFarePrice(start, destination) {
  // console.log(dist);
  const dist = distanceTravelledInFeet(start, destination);
  console.log(dist);
  if (dist < 400) {
    return 0;
  }
  if (dist < 2000) {
  // return Math.abs(dist - 400);
    return dist * 0.02;
  }
  if (dist < 2500) {
    return 25;
  }
  return "cannot travel that far";

}
