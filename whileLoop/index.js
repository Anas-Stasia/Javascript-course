// Keep asking until valid input is received
let age;
while (age === undefined || age < 0 || age > 120) {
    age = parseInt(prompt("Enter your age (0-120):"));
    if (isNaN(age) || age < 0 || age > 120) {
        alert("Invalid age! Try again.");
        age = undefined;
    }
}
console.log(`Valid age entered: ${age}`);


// Process array elements
let numbers = [5, 12, 8, 20, 3, 15];
let i = 0;
let sum = 0;

while (i < numbers.length) {
    sum += numbers[i];
    i++;
}
console.log(`Sum: ${sum}`);

// Find first number divisible by 7
let num = 1;
while (num % 7 !== 0 || num === 0) {
    num = Math.floor(Math.random() * 100) + 1;
}
console.log(`Found number divisible by 7: ${num}`);



// Simple number guessing game
let gameRunning = true;
let targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

while (gameRunning) {
    let guess = parseInt(prompt("Guess a number between 1 and 10:"));
    attempts++;
    
    if (guess === targetNumber) {
        alert(`Correct! You won in ${attempts} attempts!`);
        gameRunning = false;
    } else if (guess < targetNumber) {
        alert("Too low! Try again.");
    } else {
        alert("Too high! Try again.");
    }
}


// Countdown timer
let countdown = 5;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("Lift off!");

// Calculate factorial
let n = 6;
let factorial = 1;
let counter = n;

while (counter > 0) {
    factorial *= counter;
    counter--;
}
console.log(`${n}! = ${factorial}`); // Output: 6! = 720


// Remove all spaces from a string
let text = "Hello World From JavaScript";
let result = "";
let i = 0;

while (i < text.length) {
    if (text[i] !== " ") {
        result += text[i];
    }
    i++;
}
console.log(result); // Output: HelloWorldFromJavaScript

// Reverse a string
let str = "JavaScript";
let reversed = "";
let j = str.length - 1;

while (j >= 0) {
    reversed += str[j];
    j--;
}
console.log(reversed); // Output: tpircSavaJ


// Check if a number is prime
let number = 29;
let divisor = 2;
let isPrime = true;

while (divisor <= Math.sqrt(number)) {
    if (number % divisor === 0) {
        isPrime = false;
        break;
    }
    divisor++;
}

console.log(`${number} is ${isPrime ? "prime" : "not prime"}`);




// Linear search for an element
let array = [23, 45, 12, 67, 89, 34, 56];
let target = 67;
let index = 0;
let found = false;

while (index < array.length) {
    if (array[index] === target) {
        found = true;
        break;
    }
    index++;
}

if (found) {
    console.log(`${target} found at index ${index}`);
} else {
    console.log(`${target} not found`);
}




// Generate Fibonacci sequence up to n terms
let m = 10;
let count = 0;
let a = 0, b = 1;

console.log("Fibonacci Sequence:");
while (count < m) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    count++;
}
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34