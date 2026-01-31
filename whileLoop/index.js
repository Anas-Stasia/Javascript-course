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



// Display items in pages
let items = ["Apple", "Banana", "Cherry", "Mango", "Grape", 
             "Orange", "Pear", "Peach", "Plum", "Kiwi",
             "Watermelon", "Pineapple"];
let pageSize = 3;
let currentPage = 0;
let totalPages = Math.ceil(items.length / pageSize);
let browsing = true;

while (browsing) {
    let start = currentPage * pageSize;
    let end = start + pageSize;
    let pageItems = items.slice(start, end);

    console.log(`\n--- Page ${currentPage + 1} of ${totalPages} ---`);
    pageItems.forEach((item, index) => {
        console.log(`${start + index + 1}. ${item}`);
    });

    let choice = prompt("Enter 'n' for next, 'p' for previous, or 'q' to quit:").toLowerCase();

    if (choice === "n" && currentPage < totalPages - 1) {
        currentPage++;
    } else if (choice === "p" && currentPage > 0) {
        currentPage--;
    } else if (choice === "q") {
        browsing = false;
        console.log("Exited pagination.");
    } else {
        console.log("Invalid choice or no more pages.");
    }
}


// Convert a decimal number to binary
let decimal = 43;
let binary = "";
let num = decimal;

if (num === 0) {
    binary = "0";
}

while (num > 0) {
    let remainder = num % 2;
    binary = remainder.toString() + binary;
    num = Math.floor(num / 2);
}

console.log(`Decimal ${decimal} in binary is ${binary}`); // Output: Decimal 43 in binary is 101011

// Verify using built-in method
console.log(`Verification: ${(decimal).toString(2)}`);