// Code your solution in this file!
function distanceFromHqInBlocks(block){
    if (block>= 42) {
        return block -42;
    }
     else if (block < 42) {
    return 42 - block;
} 
}

function distanceFromHqInFeet(hq){
return distanceFromHqInBlocks(hq) *264;
}

function distanceTravelledInFeet(feet1,feet2) {
    if (feet2 >feet1){
        return (feet2 -feet1) * 264
    } else {
        return (feet1 -feet2) * 264
    }
}
function calculatesFarePrice(start,destination){
    let distance = (distanceTravelledInFeet(start,destination))
    if (distance >400){
        return 0;
    } else if (distance > 400 && distance < 2000){
        return (distance-400) * 02;
    }
        else if(distance >2000 && distance <2500){
            return Math.floor(distance -400) * 015;
        }
    
    else {
        return 'cannot travel that far'
    }
}






