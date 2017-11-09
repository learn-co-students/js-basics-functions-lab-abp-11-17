// Code your solution in this file!
const hq = 42
const toFeet = 264

function distanceFromHqInBlocks(start){
  return Math.abs(start - hq)
};

function distanceFromHqInFeet(start){
    return distanceFromHqInBlocks(start) * toFeet
};

function distanceTravelledInFeet(start, end){
  const blocksTraveled = Math.abs(start - end)
  const result =  blocksTraveled * toFeet
  return blocksTraveled * toFeet
}

function calculatesFarePrice(start, end){
  const trip = distanceTravelledInFeet(start,end)

  if (trip < 400){
    return 0
  } else if (trip > 400 && trip <= 2000){
    return trip * .02
  } else if (trip > 2000 && trip < 2500){
    return 25
  } else if (trip >= 2500){
    return('cannot travel that far')
  }
}
