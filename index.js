// Code your solution in this file!

function distanceFromHqInBlocks(block){
  if (block > 42) {
    return block-42
  }
  else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block){
  if (block >42) {
    return (block-42)*264
  }
  else if (block < 42) {
    return (42-block)*264
  }
  else {
    return "Please input a valid street number."
  }
}

function distanceTravelledInFeet(start,end) {
  if (start>end) {
    return (start-end)*264
  }
  else if (end>start){
    return (end-start)*264
  }
  else {
    return "Please input valid street numbers."
  }
}

function calculatesFarePrice(x,y) {
  let distance = Math.abs((x-y)*264)
  if (distance<=400) {
    return 0
  } else if (distance>400 && distance<=2000) {
    return distance*.02
  } else if (distance>2000 && distance <=2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
