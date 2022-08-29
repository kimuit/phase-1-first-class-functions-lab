// Code your solution in this file!
let Drivers = [ 'Antonia', 'Nuru', 'Amari', 'Mo' ];

const returnFirstTwoDrivers = (Drivers) => Drivers.slice(0, 2);
// console.log(returnFirstTwoDrivers);
const returnLastTwoDrivers  =  (Drivers) => Drivers.slice(2);
console.log(returnLastTwoDrivers);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// console.log(selectingDrivers);
let createFareMultiplier = fare => {
    return function quadruplesFare(times){
        return fare * times
}
}
function fareDoubler(fare) {
  return fare * 2;
}
// const fareTwice = createFareMultiplier(2);
// function fareDoubler(double) {
//     return fareTwice(double)
// }
function fareTripler(fare) {
  return fare * 3;
}
const selectDifferentDrivers = function (Drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(Drivers);
}
    // console.log(selectDiferentDrivers);
