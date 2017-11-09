// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
  return Math.abs(pickup-42);
}

function distanceFromHqInFeet(pickup){
  return distanceFromHqInBlocks(pickup)*264;
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start-end)*264;
}

function calculatesFarePrice(start,end){
  const distance=distanceTravelledInFeet(start,end);
  let price;
  if (distance>2500){
    price = 'cannot travel that far';
  }
  else if (distance <= 400){
    price=0;
  } else if (distance > 400 && distance <= 2000){
    price= (distance*2)/100;
  } else if (distance > 2000 && distance <= 2500){
    price= 25;
  }
  return price;
}
