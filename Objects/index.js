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



// Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
