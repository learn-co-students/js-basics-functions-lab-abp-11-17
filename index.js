// Code your solution in this file!

const hq = 42;

function distanceFromHqInBlocks(userLocation) {
  if (userLocation >= hq) {
    return userLocation - hq
  }
  else {
    return hq - userLocation
  }
}

function distanceFromHqInFeet(userLocationTwo) {
  distanceFromHqInBlocks(userLocationTwo)
    if (userLocationTwo >= hq) {
      return (userLocationTwo - hq) * 264
    }
    else {
      return (hq - userLocationTwo) * 264
    }
}

function distanceTravelledInFeet(pointA, pointB) {
  if (pointA >= pointB) {
    const totalDistance = (pointA - pointB) * 264
    return totalDistance
  }
  else {
    const totalDistance = (pointB - pointA) * 264
    return totalDistance
  }
}
let distance = '';
function calculatesFarePrice(start , destination) {
  if (start >= destination) {
    distance = (start - destination) * 264
  }
  else if (start < destination) {
    distance = (destination - start) * 264
  }
  if (distance <= 400) {
    return 0
  }
  else if (distance <= 2000) {
    return (distance * .02)
  }
  else if (distance > 2000 && distance <= 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
