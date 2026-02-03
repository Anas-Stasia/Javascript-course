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



// Int16Array for audio samples
let audioSamples = new Int16Array(8);

// Simulate audio wave data
for (let i = 0; i < audioSamples.length; i++) {
    audioSamples[i] = Math.sin(i * Math.PI / 4) * 32767; // 16-bit range
}

console.log("Audio Samples:", audioSamples);

// Calculate RMS (Root Mean Square) for volume
let sumSquares = 0;
for (let i = 0; i < audioSamples.length; i++) {
    sumSquares += audioSamples[i] * audioSamples[i];
}
let rms = Math.sqrt(sumSquares / audioSamples.length);
console.log(`Audio Volume (RMS): ${rms.toFixed(2)}`);


// Represent RGB pixels (4x4 image with RGB values)
let imageWidth = 4;
let imageHeight = 4;
let pixelData = new Uint8Array(imageWidth * imageHeight * 3); // RGB

// Fill with red color
for (let i = 0; i < pixelData.length; i += 3) {
    pixelData[i] = 255;     // Red
    pixelData[i + 1] = 0;   // Green
    pixelData[i + 2] = 0;   // Blue
}

// Convert to grayscale
for (let i = 0; i < pixelData.length; i += 3) {
    let gray = (pixelData[i] + pixelData[i + 1] + pixelData[i + 2]) / 3;
    pixelData[i] = pixelData[i + 1] = pixelData[i + 2] = gray;
}

console.log("Grayscale pixel data:", pixelData.slice(0, 12));


// Store 3D vertex positions for a triangle
let vertices = new Float32Array([
    0.0,  0.5, 0.0,  // Top vertex (x, y, z)
   -0.5, -0.5, 0.0,  // Bottom-left vertex
    0.5, -0.5, 0.0   // Bottom-right vertex
]);

console.log("Triangle vertices:", vertices);

// Calculate centroid (center point)
let centroidX = (vertices[0] + vertices[3] + vertices[6]) / 3;
let centroidY = (vertices[1] + vertices[4] + vertices[7]) / 3;
let centroidZ = (vertices[2] + vertices[5] + vertices[8]) / 3;

console.log(`Centroid: (${centroidX}, ${centroidY}, ${centroidZ})`);



// Array with empty slots for available seats
let seats = new Array(20);

// Reserve specific seats
seats[5] = { name: "John", seatNumber: 5 };
seats[12] = { name: "Emma", seatNumber: 12 };
seats[18] = { name: "Mike", seatNumber: 18 };

// Check available seats
console.log("Reserved seats:");
seats.forEach((seat, index) => {
    if (seat) {
        console.log(`Seat ${index}: Reserved by ${seat.name}`);
    }
});

// Count available seats
let availableSeats = seats.filter(seat => seat === undefined).length;
console.log(`Available seats: ${availableSeats}`);


// Different months have different number of weeks
let monthlySales = [
    [1200, 1500, 1300, 1400],           // January (4 weeks)
    [1600, 1800, 1700, 1900, 2000],     // February (5 weeks)
    [2100, 2200, 2300, 2400]            // March (4 weeks)
];

// Calculate total sales per month
monthlySales.forEach((month, index) => {
    let total = month.reduce((sum, week) => sum + week, 0);
    let average = total / month.length;
    console.log(`Month ${index + 1}: Total = $${total}, Average = $${average.toFixed(2)}`);
});

// Find best week overall
let bestWeek = 0;
let bestMonth = 0;
monthlySales.forEach((month, i) => {
    month.forEach((week, j) => {
        if (week > monthlySales[bestMonth][bestWeek]) {
            bestMonth = i;
            bestWeek = j;
        }
    });
});
console.log(`Best week: Month ${bestMonth + 1}, Week ${bestWeek + 1}`);



// To-do list with priorities
let tasks = [
    { id: 1, task: "Buy groceries", priority: "high", completed: false },
    { id: 2, task: "Clean room", priority: "medium", completed: true },
    { id: 3, task: "Study JavaScript", priority: "high", completed: false },
    { id: 4, task: "Watch movie", priority: "low", completed: false },
    { id: 5, task: "Exercise", priority: "medium", completed: true }
];

// Get all incomplete high-priority tasks
let urgentTasks = tasks.filter(t => !t.completed && t.priority === "high");
console.log("Urgent tasks:", urgentTasks);

// Mark task as complete
function completeTask(id) {
    let task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        console.log(`Task "${task.task}" marked as complete!`);
    }
}

completeTask(3);

// Get task summaries
let taskSummaries = tasks.map(t => `[${t.completed ? "✓" : " "}] ${t.task} (${t.priority})`);
console.log("\nAll tasks:");
taskSummaries.forEach(summary => console.log(summary));