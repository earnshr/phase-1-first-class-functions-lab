const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia' ]

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2)
}


function returnLastTwoDrivers (drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (fareMultiplier) {
  return function (fare) {
    return fareMultiplier * fare
  }
}

const fareDoubler = function createFareMultiplier (fare) {
  return fare*2
}
// or const fareDoubler = createFareMultiplier(2);

const fareTripler = function createFareMultiplier (fare){
  return fare*3
}
//or const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers, fnTwoDrivers){
  return fnTwoDrivers(drivers)
}




















// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

// //should return a new array containing the first two drivers from the passed-in array

// const returnFirstTwoDrivers = function (drivers) {
//     return drivers.slice(0,2);
// }

// //should return an array of the last two drivers

// const returnLastTwoDrivers = function (drivers) {
//     return drivers.slice(2,4);
// }

// // has the `returnFirstTwoDrivers` function to as its first element
// // has the `returnLastTwoDrivers` function to as its last element
// // allows us to invoke either function from the array

// // 1) returns a function
// // 2) should multiply a given value using the created multiplier

// // selectingDrivers
// // ✓ has the `returnFirstTwoDrivers` function to as its first element
// // ✓ has the `returnLastTwoDrivers` function to as its last element
// // ✓ allows us to invoke either function from the array
// // createFareMultiplier()
// // ✓ returns a function
// // ✓ should multiply a given value using the created multiplier
// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// const createFareMultiplier = function (fareMultiplier) {
//     return function(num) {
//       return fareMultiplier * num;
//     }
//   }

// //   ✓ is a function
// //   ✓ doubles fares
// const fareDoubler = createFareMultiplier(2);

// // ✓ is a function
// // ✓ triples fares
// const fareTripler = createFareMultiplier(3);


// // ✓ returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// // ✓ returns the last two drivers when passed returnLastTwoDrivers() as the second argument
// function selectDifferentDrivers(drivers, funct) {
//     return funct(drivers);
// }
