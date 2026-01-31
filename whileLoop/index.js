// Efficiently search a sorted array
let sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
let target = 23;
let left = 0;
let right = sortedArray.length - 1;
let found = false;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (sortedArray[mid] === target) {
        console.log(`${target} found at index ${mid}`);
        found = true;
        break;
    } else if (sortedArray[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

if (!found) {
    console.log(`${target} not found`);
}



// Find the GCD of two numbers
let a = 48;
let b = 18;
let originalA = a;
let originalB = b;

while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

console.log(`GCD of ${originalA} and ${originalB} is ${a}`); // Output: GCD of 48 and 18 is 6