// function schoolSupplies(pens, notebooks) {
//   let mySupplies = `I have ${pens} pens and ${notebooks} notebooks.`;
//   return mySupplies;
// }
// let pens = prompt('how many pens do you have?');
// let notebooks = prompt('how many notebooks do you have?');
// let mySupplies = schoolSupplies(pens, notebooks);
// console.log(mySupplies);

// Function declaration
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// const age1 = calcAge1(1957);

// Function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// }
// const age2 = calcAge2(1957);
// console.log(age1, age2);

// arrow f() expression shorthand using =>
// const CurrentAge = (birthYr) => 2022 - birthYr;
// let myAge = CurrentAge(1957);
// console.log(`I am ${myAge} years old.`);

//simple f() expression
// let myJob = function(work) {
//   return console.log(`My job is a ${work}.`);
// }

//arrow f() expression...eliminates keywords function and return (implicit)
// let myJob = (work) => console.log(`My job is a ${work}.`);
// let worky = myJob("designer"); //assign the return value to a variable
// console.log(worky); //output the return value

//a more complex arrow function
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const currentAge = 2022 - birthYear;
//   const retirement = 66 - currentAge;
  // return retirement;
  // return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1957, "Chris"));

// funtion calling function
// const fruitPieces = function (pieces) {
//   return pieces * 4;
// };

// const processFruit = function (fruit1, fruit2) {
//   const fruitPieces1 = fruitPieces(fruit1);
//   const fruitPieces2 = fruitPieces(fruit2);
//   const fruit = `You have ${fruitPieces1} pieces of fruit, and you have ${fruitPieces2} of another fruit.`;
//   return fruit;
// };
// console.log(processFruit(3, 4));
