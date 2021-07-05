// Code your solution in this file!
const scuberLocation = 42;
//const destinationLocation;

function distanceFromHqInBlocks(destinationLocation) {
  return Math.abs(scuberLocation - destinationLocation)
};

function distanceFromHqInFeet(destinationLocation) {
  return distanceFromHqInBlocks(destinationLocation) * 264
}


function distanceTravelledInFeet(startingLocation, destinationLocation) {
  var verticalDistance = (Math.abs(startingLocation - destinationLocation)) * 264
  return verticalDistance
}

// function calculatesFarePrice(startingLocation, destinationLocation) {
//
//   if (distanceTravelledInFeet(startingLocation, destinationLocation) >= 2500) {
//       return "cannot travel that far"
//   } else if (distanceTravelledInFeet(startingLocation, destinationLocation) >= 2000) {
//       return 25.00
//   } else if (distanceTravelledInFeet(startingLocation, destinationLocation) < 400) {
//       return 0
//   } else if (distanceTravelledInFeet(startingLocation, destinationLocation) >= 400) {
//       return .02 * distanceTravelledInFeet(startingLocation, destinationLocation)
//     }
// };

function calculatesFarePrice(startingLocation, destinationLocation) {

  if (distanceTravelledInFeet(startingLocation, destinationLocation) < 400) {
      return 0
  } else if (distanceTravelledInFeet(startingLocation, destinationLocation) >= 400 && distanceTravelledInFeet(startingLocation, destinationLocation) <=2000 ) {
      return .02 * distanceTravelledInFeet(startingLocation, destinationLocation)
  } else if (distanceTravelledInFeet(startingLocation, destinationLocation) > 2000 && distanceTravelledInFeet(startingLocation, destinationLocation) < 2500 ) {
      return 25
  } else if (distanceTravelledInFeet(startingLocation, destinationLocation) >= 2500) {
      return "cannot travel that far"
    }
};
