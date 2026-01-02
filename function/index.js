// function functionName(parameter1, parameter2, ...) {
//   // function body
//   // use the parameters
//   return value; // optional but common
// }



function myCalculator(a,b){
  
  const sum = a + b
  return `This is the summation of ${a} and ${b} :${sum}`
}
 const sum = myCalculator(4,5)
 console.log(sum)

 const subtract = myCalculator(9,10);
 console.log(subtract)

 // Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// function calcAge1(birthYear){
//   const age = 2037 - birthYear;
//   return `The age of this man is ${age}`
// }
 
// const newAge = calcAge1(2000)
//  console.log(newAge) 


// Function declaration
function calcAge1(birthYear){
  return 2037 - birthYear;
}
const newAge = calcAge1(2000)
console.log(newAge)


// Function expression

// const calcAge2 = function(birthYear){
//   return 2037 - birthYear;
  
// }
// const newAge2 = calcAge2(2003)
// console.log(newAge,newAge2)

// const newAge3 = function(birthYear){
//    return 2037 - birthYear;
// }
// const age3 = newAge3(2000)
// console.log(age3)


// Function expression

const calcAge2 = function(birthYear){
  return 2037 - birthYear;
  
}
const newAge2 = calcAge2(2003)
console.log(newAge2)

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(2007)
console.log(age3)