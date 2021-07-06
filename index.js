// Code your solution in this file!
const blockLengthInFeet = 264

function distanceFromHqInBlocks(start) {
  return Math.abs(start - 42)
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start) * blockLengthInFeet
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * blockLengthInFeet
}

function calculatesFarePrice(start, destination) {
  travelDistance = distanceTravelledInFeet(start, destination)
  if (travelDistance <= 400) {
    return 0
  }
  else if (travelDistance <= 2000) {
    return travelDistance * 0.02
  }
  else if (travelDistance <= 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}