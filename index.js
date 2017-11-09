// Code your solution in this file!
function calculateVertical(start, end) {
  return Math.abs(start-end)*264;
}

function distanceFromHqInBlocks(pickup) {
  return Math.abs(42-pickup);
}

function distanceFromHqInFeet(pickup) {
  return calculateVertical(pickup, 42);
}
