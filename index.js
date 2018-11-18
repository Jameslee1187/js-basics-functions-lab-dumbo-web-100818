function distanceFromHqInBlocks (x){
  if (x >  42) {
    return x -  42 ;
  } else {
    return  42 - x
}
}

function distanceFromHqInFeet(x) {
  return distanceFromHqInBlocks(x) * 264
}

function distanceTravelledInFeet(beginning, destination) {
  if (beginning < destination) {
    return (destination - beginning)*264
  }
  else {
    return (beginning - destination)*264
  }
}

function calculatesFarePrice(beginning, destination) {
  const feetdistance = distanceTravelledInFeet(beginning, destination)
  if (feetdistance <= 400) {
    return 0
  }
  else if (400 < feetdistance && feetdistance <= 2000 ) {
    return .02 * (feetdistance - 400)
  }
  else if (2000 < feetdistance && feetdistance < 2500) {
    return 25
  }
  else {
  return 'cannot travel that far'
}
}
