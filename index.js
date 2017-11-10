// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks >= 42) {
    return (blocks - 42)
  }
  else if (42 > blocks) {
    return (42 - blocks)
    }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks)*264
}

function distanceTravelledInFeet(a,b) {
  if (a >= b) {
    return (a - b)*264
  }
  else if (b > a) {
    return (b - a)*264
    }
}

function calculatesFarePrice(start,destination) {
  let tripDistance = distanceTravelledInFeet(start,destination);
  if (tripDistance < 400) {
    return 0
  } else
  if (tripDistance > 2500) {
    return 'cannot travel that far'
  } else
  if (tripDistance > 2000) {
    return 25
  } else {
    return (tripDistance)*.02
  }
}
