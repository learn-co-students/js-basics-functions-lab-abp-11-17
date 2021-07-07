// Code your solution in this file!
function distanceFromHqInBlocks(address){
  if(address > 42){
    return address - 42
  }else{
    return 42-address
  }
}

function distanceFromHqInFeet(n){
   return distanceFromHqInBlocks(n) * 264

}

function distanceTravelledInFeet(start, end){
  if (end > start){
    let distance = (end - start) * 264
    return distance;
} else {
  let distance = (start - end) * 264
  return distance;
  }
}




function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)

    if (distance < 400){
      return 0

    } else if (400 < distance && distance < 2000){
      return distance * .02

    } else if (distance < 2500){
      return 25

    } else {
      return "cannot travel that far"
    }}
