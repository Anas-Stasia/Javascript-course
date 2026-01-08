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

if (friends.includes('Stasia')){
 console.log('He is part')
}else{
    console.log('He is not part')
}


// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 4

