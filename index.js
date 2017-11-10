// Code your solution in this file!
function distanceFromHqInBlocks (number) {
 return number - 42 > 0 ? number - 42 : 42 - number
}

function distanceFromHqInFeet (number) {
  return distanceFromHqInBlocks(number)*264;
}

function distanceTravelledInFeet (start, end) {
  blocks = start - end > 0 ? start - end : end - start
  return feet = blocks*264
}

function calculatesFarePrice (start, end) {
  distanceTravelledInFeet (start, end)
  if (feet <= 400) {
  return 0 }
  else if  (feet<= 2000) {
  return (feet * .02) }
  else if (feet <=2500) {
  return 25 }
  else {
  return "cannot travel that far"
  }
}
