// Code your solution in this file!
function calculateBlocks (start, end) {
  const distance = (start - end);
  return Math.abs(distance);
}

function calculateFeet (blocks) {
  return blocks * 264;
}

function distanceTravelledInFeet (start, end) {
  return calculateFeet(calculateBlocks(start, end));
}

function distanceFromHqInBlocks (street) {
  return calculateBlocks (street, 42);
}

function distanceFromHqInFeet (street) {
  return distanceFromHqInBlocks(street) * 264;
}

function calculatesFarePrice (start, end) {
  const feet = distanceTravelledInFeet(start, end);
  let price;

  switch (true) {
    case feet > 2500:
      price = 'cannot travel that far';
      break
    case feet > 2000:
      price = 25;
      break
    case feet >= 400 && feet <= 2000:
      price = feet * .02;
      break
    case feet < 400:
      price = 0;
  }

  return price;
}
