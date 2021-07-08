// Code your solution in this file!
//a function that takes in a pickup location for a passenger,
// and returns the number of blocks from it's headquarters
// on 42nd street.
function distanceFromHqInBlocks(pickup){
let blocksFromHQ  = 42-pickup;
  if (blocksFromHQ <0) {
    return blocksFromHQ *-1;
  }else {
    return blocksFromHQ *1;
  }
};
distanceFromHqInBlocks(43);
//that takes in the beginning and destination blocks
//and returns the number of feet travelled.
function distanceFromHqInFeet(blocks){
  let feet = distanceFromHqInBlocks(blocks)*264;
  return feet;
};
distanceFromHqInFeet(34);


 //Calculates the number of feet a passenger travels given a
 // starting block and an ending block
function distanceTravelledInFeet(start,destination){
  let travelByFoot = (start-destination)*264;
    if (travelByFoot <0) {
      return travelByFoot *-1;
    }else {
      return travelByFoot *1;
    }
};
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination)  {
  let distance = ((start-destination)*264);
    if (distance<0){
    	   distance = distance*-1
    };
    if (distance >= 2500){
      return 'cannot travel that far';
    } else if (distance <= 400){
      return 0;
    } else if (distance <=2000){
      return distance*(2/100);
    } else if (distance >=2000){
      return 25;
    }
};
calculatesFarePrice(50,58);
