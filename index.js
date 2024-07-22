// Code your solution in this file!
const returnFirstTwoDrivers = function(driversNames){ 
    return [...driversNames].slice(0, 2)
    
}
console.log(returnFirstTwoDrivers(['Marion', 'Nuru', 'Lynn', 'Odaya'])) 

const returnLastTwoDrivers = function(driversNames1){
    return[...driversNames1].slice(-2)
}
console.log(returnLastTwoDrivers['Marion', 'Nuru', 'Lynn', 'Odaya'])

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return (function multiplyFare(fare){
            const multiply = fare * integer
            return multiply
    } )
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driversNames, returnDriversFunction){
    return returnDriversFunction(driversNames);
}
