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


// function validateLogin(password) {
//   if (password.length >= 8) {
//     return "Login successful";
//   }
//   return "Password too short";
// }

// const message = validateLogin("mypassword123");
// console.log(message);function calculateTotal(price, quantity, taxRate) {
//   const subtotal = price * quantity;
//   const tax = subtotal * taxRate;
//   return subtotal + tax;
// }

// const total = calculateTotal(50, 2, 0.1);
// console.log(total);


// function isAdult(birthYear) {
//   const age = 2037 - birthYear;
//   return age >= 18;
// }

// console.log(isAdult(2000));


// function calculateBMI(weight, height) {
//   return weight / (height ** 2);
// }

// const bmi = calculateBMI(78, 1.69);
// console.log(bmi);


// function orderSummary(item, quantity) {
//   return `You ordered ${quantity} ${item}(s).`;
// }

// console.log(orderSummary("Burger", 3));



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

// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);