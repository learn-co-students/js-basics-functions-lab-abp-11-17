// Code your solution in this file!
let blocks=0,feet=0, fare=0;
function distanceFromHqInBlocks(distance){

  return (Math.abs(42-distance));
}
function distanceFromHqInFeet(distance){
    blocks=distanceFromHqInBlocks(distance);
    return (blocks*264);

//  returns distance in feet after calculating;
}
function distanceTravelledInFeet(st,end){
  return (Math.abs(end-st)*264);
}
function calculatesFarePrice(start, destination){
    feet=(Math.abs(destination-start))*264;
    if(feet<=400){
      fare=0;
    }
    else if(feet>400 && feet<=2000)
    {
      fare=(feet-400)*0.02+8;
    }
    else if(feet>2000 && feet<=2500)
    {
      fare=25;
    }
    else {
      fare='cannot travel that far';
    }
    return fare;
}
