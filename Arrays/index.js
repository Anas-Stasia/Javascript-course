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

const calcTip = (bill) => {
    if(bill >= 50 && bill >= 300){
        return bill * 0.15
    }else {
        return bill * 0.15
    }
}
console.log(calcTip(100))

const bills = [ 125, 555, 44]

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[3])
] 

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[3]
]
console.log(bills, total, tips);




const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills1 = [125, 555, 44];
const tips1 = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);



// Store shopping cart items
let cart = ["Laptop", "Mouse", "Keyboard", "Monitor"];

// Add item
cart.push("Headphones");

// Remove item
cart.splice(2, 1); // Remove Keyboard

// Display cart
console.log("Shopping Cart:", cart);
console.log("Total items:", cart.length);



// 2D array for game board
let board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

// Display board
for (let i = 0; i < board.length; i++) {
    console.log(board[i].join(" | "));
    if (i < board.length - 1) console.log("---------");
}

// Check winner
function checkWinner(board) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0];
        }
    }
    return null;
}



// Store student information
let students = [
    { id: 1, name: "Alice", grade: 85, subject: "Math" },
    { id: 2, name: "Bob", grade: 92, subject: "Science" },
    { id: 3, name: "Charlie", grade: 78, subject: "Math" },
    { id: 4, name: "Diana", grade: 88, subject: "English" }
];

// Calculate average grade
let totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
let averageGrade = totalGrade / students.length;
console.log(`Average Grade: ${averageGrade}`);

// Find top student
let topStudent = students.reduce((top, student) => 
    student.grade > top.grade ? student : top
);
console.log(`Top Student: ${topStudent.name} with ${topStudent.grade}`);