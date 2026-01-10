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



