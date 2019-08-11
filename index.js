// Code your solution in this file!
// function calculateVertical(start, destination){
//  return (destination - start)*264;}
function distanceFromHqInBlocks(start){
  return Math.abs(start -42);
}

function distanceFromHqInFeet(start){
return (Math.abs(start -42))*264;
}

function distanceTravelledInFeet(start, destination){
return (Math.abs(start -destination))*264;
}

function calculatesFarePrice(start, destination){
let distance = (Math.abs(start -destination))*264;

if (distance < 400){
  let fare = 0;

  return fare;
}

if (distance >= 400 && distance < 2000){
  let fare = (distance *2)/100;

  return fare;
}

if (distance >= 2000 && distance < 2500){
  let fare = 25;
  return fare;
}

if (distance >= 2500){
  return "cannot travel that far";
}


}
