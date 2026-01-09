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



// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);
