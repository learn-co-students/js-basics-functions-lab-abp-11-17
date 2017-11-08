// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    let headquarters=42
    let distances=pickup-headquarters
    distances = Math.abs(distances);
    return distances

}
function distanceFromHqInFeet(pickup){
  return distanceFromHqInBlocks(pickup) * 264;
}
function distanceTravelledInFeet(start,destination){
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}
function calculatesFarePrice(start,destination){
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400){
    return 0;
  } else if (distance > 400 && distance <=2000){
    return .02 * distance;
  } else if (distance > 2000 && distance <2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
