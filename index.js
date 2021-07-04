let start
let destination

function calculateVertical (start, destination){
    return Math.abs(start - destination)
  }

function distanceFromHqInBlocks (start){
 return Math.abs(start-42);
}

function distanceFromHqInFeet (start) {
  return distanceFromHqInBlocks (start) * 264;

}

function distanceTravelledInFeet (start, destination){
  return calculateVertical (start, destination) * 264;
}

function calculatesFarePrice (start, destination){
  let trip = distanceTravelledInFeet(start, destination);
  if (trip > 2500){
   return `cannot travel that far`; 
  } else if (trip > 2000 && trip < 2500){
    return 25;
  } else if (trip >= 400 && trip <= 2000 ){
    return trip * 0.02;
  } else{
    return 0;
  }
  
}