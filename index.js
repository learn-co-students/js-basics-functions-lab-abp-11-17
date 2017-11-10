// Code your solution in this file!


function distanceFromHqInBlocks(pickup) {
  if (pickup === 42) {
    let distance = 1
    return distance
  } else if (pickup > 42) {
    let distance = pickup - 42
    return distance
  } else {
    let distance = 42 - pickup
    return distance
  }
};

function distanceFromHqInFeet(blocks) {
  let numfeet = distanceFromHqInBlocks(blocks)*264
  return numfeet;
}

function distanceTravelledInFeet(beg, dest) {
  if (dest > beg) {
    vertical = (dest - beg)*264
    return vertical
  } else if (dest < beg){
    vertical = (beg - dest)*264
    return vertical
  } else {
    vertical = 264
    return vertical
  }
}

function calculatesFarePrice(start, destination) {
  let feet = Math.abs(destination - start) * 264
  if (feet <= 400) {
    charges = 0
    return charges
  } else if (feet <= 2000) {
    charges = feet * .02
    return charges
  } else if (feet <= 2500) {
    charges = 25
    return charges
  } else {
    return "cannot travel that far"
  }
};
