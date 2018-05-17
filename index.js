// Code your solution in this file!

function distanceFromHqInBlocks (intNum) {
         if (intNum-42 <0) {
           return 8;
         } else {
           return (intNum - 42);
         }
}

function distanceFromHqInFeet(intNum){
         return (distanceFromHqInBlocks(intNum)*264);
}

function distanceTravelledInFeet (numStartBlock, numEndBlock) {
         return (Math.abs((numEndBlock - numStartBlock)*264));
}

/*function calculatesFarePrice(numStartBlock, numEndBlock){
         distanceTravelled = distanceTravelledInFeet (numStartBlock, numEndBlock);
         if distanceTravelled <= 399 {
            return 0;
         } else if (distanceTravelled <=400 && distanceTravelled <=2000) {
           return (distanceTravelled*0.02);
         } else if (distanceTravelled >=2000) {
           return (distanceTravelled*25);
         } else (distanceTravelled >2500) {
           return "cannot travel that far";
         }
}*/

function calculatesFarePrice(numStartBlock, numEndBlock){
         distance = distanceTravelledInFeet(numStartBlock,numEndBlock);
         console.log(distance);
         if (distance <= 399 || distance === undefined){
           return 0;
         } else if (distance >= 400 && distance <= 1999){
           return (distance-400)*0.02;
         } else if (distance >=2000 && distance <=2499){
           return 25;
         } else if (distance >= 2500){
           return 'cannot travel that far';
         }
}
