let anas = {
    firstName:'Anastasia',
    lastName:'Ndanwea',
    age:2037 - 1991,
    job: 'Student',
    friends: ['Alex', 'Jonas', 'Adwoa', 'Viera']

}
console.log(anas.firstName)
console.log(anas['lastName'])

const nameKey = 'Name';
console.log(anas['first' + nameKey]);
console.log(anas['last' + nameKey]);

// console.log(anas.'last' + nameKey)

// const interestedIn = prompt('What do you want to know about Anas? Choose between firstName, lastName,age,job, and friends');

// if(anas[interestedIn]){
//     console.log(anas[interestedIn])
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }
// console.log(anas[interestedIn])

// anas.location = 'Ghana';
// anas['twitter'] = '@Anastasia';
// console.log(anas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${anas.firstName} has ${anas.friends.length} friends, and his best friend is called ${anas.friends[0]}`);

console.log(`${anas.firstName} has 3 friends: ${anas.friends[0]},${anas.friends[1]}, ${anas.friends[2]} and his best friend is called ${anas.friends[3]} `)

console.log(`${anas.firstName} has ${anas.friends.length} friends and his best friend is called ${anas.friends[3]} `)


// Initial shopping cart
let shoppingCart = ['Milk', 'Bread', 'Eggs'];
console.log('Initial cart:', shoppingCart);

// Add a new item to the end using push()
shoppingCart.push('Butter'); //
console.log('Cart after adding Butter:', shoppingCart);

// Remove the second item ('Bread') using splice()
// splice(startIndex, deleteCount)
shoppingCart.splice(1, 1); //
console.log('Cart after removing Bread:', shoppingCart);


const productsInCents = [1200, 799, 2500];

// Convert prices from cents to dollars
const productsInDollars = productsInCents.map(price => price / 100); //

console.log('Prices in Cents:', productsInCents);
console.log('Prices in Dollars:', productsInDollars);
// Output: Prices in Dollars: [ 12, 7.99, 25 ]


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get only the even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0); //

console.log('Original numbers:', numbers);
console.log('Even numbers:', evenNumbers);
// Output: Even numbers: [ 2, 4, 6, 8, 10 ]

const monthlySales = [15000, 22000, 18000, 31000];

// Calculate the total annual sales
const totalSales = monthlySales.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // The 0 is the initial value for the accumulator

console.log('Monthly sales:', monthlySales);
console.log('Total sales:', totalSales);
// Output: Total sales: 86000

const stack = [];

// Push items onto the stack (add to the end)
stack.push('Task 1');
stack.push('Task 2');
stack.push('Task 3');
console.log('Stack after pushes:', stack);

// Pop the last item off the stack (remove from the end)
const lastTask = stack.pop();
console.log('Removed item:', lastTask); // Output: Task 3
console.log('Stack after pop:', stack);

const stasia = {
  firstName: 'Anas',
  lastName: 'Ndanwea',
  birthYeah: 2006,
  job: 'student',
  friends: ['Viera', 'Nina', 'Enoch'],
  hasDriversLicense: true,

//   calcAge: function () {
//     return 2037 - this.birthYear
//   }
// }
// console.log(stasia.calcAge())

// console.log(stasia['calcAge'](2003))
calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age
},

  getSummary : function() {
    return `${this.firstName} is a ${this.calcAge()} year old ${anas.jobjob} and he has  ${hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
}
   console.log(anas.age)
   console.log(anas.getSummary)

//Challenge
// Jonas is a 46-year old teacher, and he has driver's license

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height:1.69,

     calcBMI:  function(){
    this.bmi = this.mass/this.height **2
    return this.bmi
}
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height:1.95,

    calcBMI:  function(){
    this.bmi = this.mass/this.height **2
}
}
   mark.calcBMI();
   john.calcBMI();
   console.log(mark.bmi,john.bmi)

   if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`
  );
}

// Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

 