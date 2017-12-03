// Code your solution in this file!
function distanceFromHqInBlocks(start){
  return Math.abs(start-42);
}

function distanceFromHqInFeet(start){
  return distanceFromHqInBlocks(start)*264;
}

function distanceTravelledInFeet(start,end){
  let distBlocks=Math.abs(end-start);
  return distBlocks*264;
}

//Should probablydress this up with a switch statement.
function calculatesFarePrice(start, destination){
  let feetTrip=distanceTravelledInFeet(start, destination);
  if(feetTrip>2500){
    return "cannot travel that far"
  }else if(feetTrip<400){
    return 0;
  }else if(feetTrip>400 && feetTrip<2000){
    return 0.02*feetTrip;
  }else{
    return 25.00
  }
}
