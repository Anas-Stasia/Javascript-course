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