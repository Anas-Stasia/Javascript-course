// function functionName(parameter1, parameter2, ...) {
//   // function body
//   // use the parameters
//   return value; // optional but common
// }



// function myCalculator(a,b){
  
//   const sum = a + b
//   return `This is the summation of ${a} and ${b} :${sum}`
// }
//  const sum = myCalculator(4,5)
//  console.log(sum)

//  const subtract = myCalculator(9,10);
//  console.log(subtract)

//  // Functions
// function logger() {
//   console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

// // function calcAge1(birthYear){
// //   const age = 2037 - birthYear;
// //   return `The age of this man is ${age}`
// // }
 
// // const newAge = calcAge1(2000)
// //  console.log(newAge) 


// // Function declaration
// function calcAge1(birthYear){
//   return 2037 - birthYear;
// }
// const newAge = calcAge1(2000)
// console.log(newAge)


// // Function expression

// // const calcAge2 = function(birthYear){
// //   return 2037 - birthYear;
  
// // }
// // const newAge2 = calcAge2(2003)
// // console.log(newAge,newAge2)

// // const newAge3 = function(birthYear){
// //    return 2037 - birthYear;
// // }
// // const age3 = newAge3(2000)
// // console.log(age3)


// // Function expression

// const calcAge2 = function(birthYear){
//   return 2037 - birthYear;
  
// }
// const newAge2 = calcAge2(2003)
// console.log(newAge2)

// // Arrow functions(One parameter)
// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(2007)
// console.log(age3)

// const retirementAge = birthYear => {
//   const age = 2037 - birthYear
//   const retirement = 65 - age
// }
// const reAge = retirementAge(2010)
// console.log(reAge)

// // Arrow functions(Two parameter)

// const retirementAge2 = (birthYear, firstName)=>{
//   const age1 = 2037 - birthYear
//   const retirement = 65 - age1
//   return `${firstName} retires when he is ${retirement} years old`
// }

// const reAge1 = retirementAge2(2000, "Abu")
// console.log(reAge1)

// // Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// function yearsUntilRetirement1(birthYear, firstName){
// const age5 = 2037 - birthYear
// const retirement = 65 - age5;
// return `${firstName} retires when he is ${retirement} years old`
// }

// const newAge5 = yearsUntilRetirement1(2008,'Patrick')
// console.log(newAge)

// const yearsUntilRetirement1 = function(birthYear,firstName){
//   const age5 = 2037 - birthYear
// const retirement = 65 - age5;
// return `${firstName} retires when he is ${retirement} years old`
// }

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 2

const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;
let avgDolphins = calcAverage(44,23,71)
let avgKoalas = calcAverage(65,54,49)
console.log(avgDolphins,avgKoalas)

function checkWinner(avgDolphins,avgKoalas){
if(avgDolphins >= avgKoalas){
 console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  }else{
    console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`)
  }
}
checkWinner(avgDolphins,avgKoalas)

checkWinner(576, 111);

// Test 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);


 // Write a function addNumbers that:
// Takes two numbers
// Returns their sum

const  addNumbers = (a,b) => a + b;
const sum = addNumbers(4, 5)
console.log(sum)

function addNumber(a,b){
  const sum = a + b;
  return sum
}

const total = addNumber(4,6)
console.log(total)


// Write a function calcAge that:
// Takes birthYear
// Returns the age in the year 2037


const calcAge = (birthYear) => 2037 - birthYear;
const age = calcAge(2000);
console.log(age)


function calcAge2(birthYear){
  return 2037 - birthYear
}

const age2 = calcAge2(2008);
console.log(age2)

const calcAge3 = function(birthYear){
  return 2037 - birthYear
}

const age3 = calcAge2(2008);
console.log(age3)

// Create an arrow function calcAverage that:
// Takes 3 scores
// Returns the average

 let calcAverage2 = (a, b, c) => (a + b + c)/3;
 let avgTotal = calcAverage2(10,20,30)
 console.log(avgTotal)

//  Write a function isEven that:
//  Takes a number
//  Returns true if even, otherwise false

function isEven(number){
  if(number =  even){
    console.log('true')
  }else{
    console.log('false')
  }
}

 isEven(8)