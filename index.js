// Code your solution in this file!
function distanceFromHqInBlocks (yourBlock) {
  const blockDistance = yourBlock - 42;


  return Math.abs(blockDistance);
}
function distanceFromHqInFeet (yourBlock) {
  const feetDistance = distanceFromHqInBlocks (yourBlock) * 264;

  return feetDistance;
}
function distanceTravelledInFeet (startingBlock, destination) {
  const distance = (startingBlock - destination) * 264;

  return Math.abs(distance);
}
function calculatesFarePrice (startingBlock, destination) {
  const yourDistance = distanceTravelledInFeet(startingBlock, destination);
  if  (yourDistance <= 400) {
    return 0;
  }
  else if (yourDistance > 400 && yourDistance <= 2000){

    return yourDistance * 0.02;
  }
  else if (yourDistance > 2000 && yourDistance <= 2500) {

    return 25;
  }
  else if (yourDistance > 2500) {

    return 'cannot travel that far';
  }

}
