// Code your solution in this file!

function distanceFromHqInBlocks(block) {
return Math.abs(block-42)
}

function distanceTravelledInFeet(beg,dest) {
 return Math.abs(beg-dest)*264
}


function distanceFromHqInFeet(x) {
return distanceFromHqInBlocks(x)*264
}

function calculatesFarePrice(start,destination) {
let total = distanceTravelledInFeet(start,destination)

  if(total <400)
   {
  return cost = 0;
}
  else if(total >= 400 && total <2000) {
  return cost = .02 * total;
}
  else if(total >= 2000 && total <= 2500) {
    return cost = 25;
  }
  else {return "cannot travel that far"}
}
