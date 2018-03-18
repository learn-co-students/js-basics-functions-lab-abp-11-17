// Code your solution in this file!
//1
function distanceFromHqInBlocks (number) {
  let blocks
  if (number > 42){
    blocks = number - 42
    return blocks
  } else {
    blocks = 42 - number
    return blocks
  }
}

//2
function distanceFromHqInFeet(number){
  let feet
  feet = distanceFromHqInBlocks (number) * 264
  return feet
}

//3
function distanceTravelledInFeet(start,destination){
  if((start - destination > 0)){
    return (start - destination) * 264
  } else {
    return (destination - start) * 264
  }
}

//4
function calculatesFarePrice(start, destination){
  let price
  if (distanceTravelledInFeet(start,destination) < 400){
    return price = 0
  } else if ( 400 < distanceTravelledInFeet(start,destination) && distanceTravelledInFeet(start,destination) < 2000) {
    return price = distanceTravelledInFeet(start,destination) * 0.02
  } else if (2000 < distanceTravelledInFeet(start,destination) && distanceTravelledInFeet(start,destination) < 2500) {
    return price = 25
  } else {
    return price = "cannot travel that far"
  }
}
