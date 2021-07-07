
function distanceFromHqInBlocks(number) {
  let blocks;
  (number>42) ? blocks = number-42 : blocks = 42-number;
  return blocks;
}

function distanceFromHqInFeet(number) {
  const feet=distanceFromHqInBlocks(number);
  return feet*264;
}

function distanceTravelledInFeet(starting,ending){
  let distance;
  (starting>ending) ? distance=starting-ending : distance=ending-starting;
  return distance*264;
}

function calculatesFarePrice(starting,ending) {
  let fare=distanceTravelledInFeet(starting,ending);
  if(fare<400){
    return 0;
  }
  else if(fare>400 && fare<2000){
    return fare*0.02
  }
  else if(fare>2000 && fare<2500){
    return 25;
  }
  else{
    return "cannot travel that far"
  }
}
