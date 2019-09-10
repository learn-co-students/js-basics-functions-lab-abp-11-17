// Code your solution in this file!
const distanceFromHqInBlocks = (distance) => {
  return Math.abs(distance - 42);
}

const distanceFromHqInFeet = (distance) => {
  return distanceFromHqInBlocks(distance) * 264;
}

const distanceTravelledInFeet = (beginning, end) => {
  return Math.abs(beginning - end) * 264;
}

const calculatesFarePrice = (beginning, end) => {
  const distance = distanceTravelledInFeet(beginning, end);
  if(distance <= 400) return 0;
  if(distance > 400 && distance <= 2000) return 0.02 * (distance - 400);
  if(distance > 2000 && distance <= 2500) return 25;
  else return 'cannot travel that far';
}
