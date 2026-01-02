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


