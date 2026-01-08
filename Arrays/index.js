// let friends = ['Anas', 'Nina', 'Enoch', 'Viera']
// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[3] = 'Patrick';

// let calcAge4 = (birthYear) => 2037 - birthYear;

// const years = [1990,2000,20004,2006,2009,2001];
// let age1 = calcAge4(years[0])
// console.log(age1)
//Push add elements to the end
let friends = ['Anas', 'Nina', 'Enoch', 'Viera']
let newLength = friends.push('Stasia')
console.log(newLength)
console.log(friends)
console.log(friends[friends.length - 1])


//Unshift add elements to the beginning
friends.unshift('Patrick')
console.log(friends)

// Remove last elements 
friends.pop();
const popped = friends.pop();
console.log(popped)
console.log(friends)

//Remove first element
friends.shift();
console.log(friends)

console.log(friends.indexOf('Anas'))

//checks if the element is in the array
console.log(friends.includes('Stasia'))
console.log(friends.includes('Enoch'))