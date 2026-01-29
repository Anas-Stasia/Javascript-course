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