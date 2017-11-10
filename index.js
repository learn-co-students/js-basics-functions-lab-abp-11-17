// Code your solution in this file!
function calculateVertical(start, destination){
  return ((start - destination) * 264);
}

function distanceTravelledInFeet(blockDistance){
  return blockDistance/264;
}

function distanceFromHqInBlocks (userPosition){
  return Math.abs(userPosition - 42);
}


function distanceFromHqInFeet (userPosition){
  var distanceBlock = distanceFromHqInBlocks(userPosition);
  return distanceBlock * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function distanceTravelledInFeet(start, destination){
  return (Math.abs(start - destination) * 264);
}

function calculatesFarePrice(start, destination){
  let correctPrice;

  let price = Math.abs(start - destination);
  let priceFeet = price * 264;

  if (price === 1){
    price = Math.abs(start - destination) - 1;
    return priceFeet = price * 264;
  } else if (priceFeet >= 400 && priceFeet <= 2000) {
    return correctPrice = priceFeet * 0.02;
  } else if (priceFeet > 2000 && priceFeet <= 2500) {
    return correctPrice = 25;
  } else if (priceFeet > 2500) {
    return correctPrice = 'cannot travel that far';
  }

}
