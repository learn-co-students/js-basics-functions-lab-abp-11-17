// Code your solution in this file!
function distanceFromHqInBlocks(x){
  if(x > 42){
    return x - 42
  }else{
    return 42 - x
  }
}

function distanceFromHqInFeet(d){
  return distanceFromHqInBlocks(d) * 264
}

function distanceTravelledInFeet(a, b){
  if( a > b){
    return (a - b) * 264
  } else
    return (b - a) * 264
}

function calculatesFarePrice(start, destination){
  let distance = 0
  if(start > destination){
     distance = (start - destination) * 264
  }else{
     distance = (destination - start) * 264
  }

  if( distance <= 264){
    return 0
  }else if(distance > 400 && distance <= 2000){
    return distance * 0.02
  }else if(distance > 2000 && distance <= 2500){
    return 25
  }else if (distance > 2500){
    return 'cannot travel that far'
  }
}
