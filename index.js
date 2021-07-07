// Code your solution in this file!

// ensure that its headquarters is near its customers.

// write a function that takes in a pickup location for a passenger, and returns the number of blocks from it's headquarters on 42nd street.

//This can be used for another function that translates the number of blocks from headquarters to the distance in feet.



function distanceFromHqInBlocks (pickup) {
  return Math.abs(pickup - 42);
}

function distanceFromHqInFeet (pickup){
  return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet (start, destination) {
  return Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination) );
}

function calculatesFarePrice (start, destination) {
var distance = distanceTravelledInFeet(start, destination);
    switch (true) {
      case (distance >= 2500 ): return 'cannot travel that far';
      case (distance < 400): return 0;
      case (distance > 400 && distance < 2000) : return distance * .02;
      case (distance > 2000 && distance < 2500) : return 25;
    }
}
