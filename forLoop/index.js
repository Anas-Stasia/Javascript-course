//for loop keeps running when the statement is true
for(let rep = 1; rep <=30; rep++){
    console.log(`Class time is now ${rep}`)
}


// Calculate total cost with tax
const cart = [
    { name: "Laptop", price: 999.99, quantity: 1 },
    { name: "Mouse", price: 29.99, quantity: 2 },
    { name: "Keyboard", price: 79.99, quantity: 1 }
];

let subtotal = 0;
for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].quantity;
}

const tax = subtotal * 0.08;
const total = subtotal + tax;
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Total with tax: $${total.toFixed(2)}`);




// Validate multiple form fields
const formData = {
    email: "user@example.com",
    password: "Pass123!",
    age: "25",
    username: "john_doe"
};

const errors = [];
for (let field in formData) {
    if (formData[field].trim() === "") {
        errors.push(`${field} is required`);
    }
    
    if (field === "email" && !formData[field].includes("@")) {
        errors.push("Invalid email format");
    }
    
    if (field === "password" && formData[field].length < 8) {
        errors.push("Password must be at least 8 characters");
    }
}

console.log(errors.length === 0 ? "Form is valid!" : errors);



// Add click handlers to multiple buttons
const buttons = document.querySelectorAll('.action-button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        console.log(`Button ${i + 1} clicked`);
        e.target.style.backgroundColor = '#4CAF50';
    });


    // Generate table rows from data
const employees = [
    { id: 1, name: "Sarah Connor", department: "Engineering" },
    { id: 2, name: "John Smith", department: "Marketing" },
    { id: 3, name: "Emma Wilson", department: "Sales" }
];

let tableHTML = '<table><tr><th>ID</th><th>Name</th><th>Department</th></tr>';

for (let i = 0; i < employees.length; i++) {
    tableHTML += `<tr>
        <td>${employees[i].id}</td>
        <td>${employees[i].name}</td>
        <td>${employees[i].department}</td>
    </tr>`;
}

tableHTML += '</table>';
console.log(tableHTML);
}



// Filter and transform API data
const apiResponse = [
    { userId: 1, status: "active", lastLogin: "2024-01-10" },
    { userId: 2, status: "inactive", lastLogin: "2023-11-15" },
    { userId: 3, status: "active", lastLogin: "2024-01-14" },
    { userId: 4, status: "active", lastLogin: "2024-01-12" }
];

const activeUsers = [];
for (let i = 0; i < apiResponse.length; i++) {
    if (apiResponse[i].status === "active") {
        activeUsers.push({
            id: apiResponse[i].userId,
            lastSeen: apiResponse[i].lastLogin
        });
    }
}

console.log(`Active users: ${activeUsers.length}`);
console.log(activeUsers);



// Countdown timer with for loop
function startCountdown(seconds) {
    let count = seconds;
    
    const interval = setInterval(() => {
        console.log(`Time remaining: ${count} seconds`);
        count--;
        
        if (count < 0) {
            clearInterval(interval);
            console.log("Countdown complete!");
        }
    }, 1000);
}

// Alternative: Generate time slots for scheduling
const timeSlots = [];
for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        timeSlots.push(time);
    }
}

console.log("Available appointment times:", timeSlots);
// Output: ["09:00", "09:30", "10:00", "10:30", ...]





// Search products by keyword and price range
const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 89.99 },
    { id: 2, name: "Running Shoes", category: "Sports", price: 120.00 },
    { id: 3, name: "Bluetooth Speaker", category: "Electronics", price: 45.50 },
    { id: 4, name: "Yoga Mat", category: "Sports", price: 29.99 }
];

const searchTerm = "bluetooth";
const maxPrice = 100;
const results = [];

for (let i = 0; i < products.length; i++) {
    const nameMatch = products[i].name.toLowerCase().includes(searchTerm.toLowerCase());
    const priceMatch = products[i].price <= maxPrice;
    
    if (nameMatch && priceMatch) {
        results.push(products[i]);
    }
}

console.log(`Found ${results.length} matching products:`, results);



// Simulate batch processing images with progress tracking
const images = [
    { name: "photo1.jpg", size: 2500 },
    { name: "photo2.jpg", size: 3200 },
    { name: "photo3.jpg", size: 1800 },
    { name: "photo4.jpg", size: 4100 },
    { name: "photo5.jpg", size: 2900 }
];

const targetSize = 1920;
const processedImages = [];

console.log("Starting batch resize...\n");

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const percentage = ((i + 1) / images.length * 100).toFixed(0);
    
    // Simulate processing
    if (image.size > targetSize) {
        processedImages.push({
            name: image.name,
            originalSize: image.size,
            newSize: targetSize,
            reduced: image.size - targetSize
        });
        console.log(`[${percentage}%] Resized ${image.name}: ${image.size}px → ${targetSize}px`);
    } else {
        console.log(`[${percentage}%] Skipped ${image.name}: already optimized`);
    }
}

console.log(`\nProcessed ${processedImages.length} of ${images.length} images`);


// Remove duplicates from array
const emailList = [
    "user1@example.com",
    "user2@example.com",
    "user1@example.com",
    "user3@example.com",
    "user2@example.com",
    "user4@example.com"
];

const uniqueEmails = [];
const seen = {};

for (let i = 0; i < emailList.length; i++) {
    if (!seen[emailList[i]]) {
        uniqueEmails.push(emailList[i]);
        seen[emailList[i]] = true;
    }
}

console.log(`Original count: ${emailList.length}`);
console.log(`Unique count: ${uniqueEmails.length}`);
console.log('Unique emails:', uniqueEmails);


// Calculate sum of all elements in 2D array (matrix)
const salesData = [
    [1200, 1500, 1800, 2000], // Q1 monthly sales
    [2200, 1900, 2100, 2400], // Q2 monthly sales
    [2600, 2800, 3000, 2900], // Q3 monthly sales
    [3200, 3400, 3100, 3500]  // Q4 monthly sales
];

let totalSales = 0;
const quarterlySales = [];

for (let i = 0; i < salesData.length; i++) {
    let quarterTotal = 0;
    
    for (let j = 0; j < salesData[i].length; j++) {
        quarterTotal += salesData[i][j];
        totalSales += salesData[i][j];
    }
    
    quarterlySales.push(quarterTotal);
    console.log(`Q${i + 1} Total: $${quarterTotal}`);
}

console.log(`Annual Total: $${totalSales}`);



// Analyze password strength
function checkPasswordStrength(password) {
    let score = 0;
    const criteria = {
        length: false,
        uppercase: false,
        lowercase: false,
        numbers: false,
        special: false
    };
    
    // Check length
    if (password.length >= 8) {
        criteria.length = true;
        score += 20;
    }
    
    // Check character types
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        
        if (char >= 'A' && char <= 'Z') criteria.uppercase = true;
        if (char >= 'a' && char <= 'z') criteria.lowercase = true;
        if (char >= '0' && char <= '9') criteria.numbers = true;
        if ('!@#$%^&*()_+-=[]{}|;:,.<>?'.includes(char)) criteria.special = true;
    }
    
    if (criteria.uppercase) score += 20;
    if (criteria.lowercase) score += 20;
    if (criteria.numbers) score += 20;
    if (criteria.special) score += 20;
    
    const strength = score < 40 ? 'Weak' : score < 70 ? 'Medium' : 'Strong';
    return { score, strength, criteria };
}

console.log(checkPasswordStrength("MyP@ss123"));



// Parse CSV string into structured data
const csvData = `Name,Email,Age,City
John Doe,john@email.com,28,New York
Jane Smith,jane@email.com,34,Los Angeles
Bob Johnson,bob@email.com,45,Chicago`;

const lines = csvData.split('\n');
const headers = lines[0].split(',');
const users = [];

for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const user = {};
    
    for (let j = 0; j < headers.length; j++) {
        user[headers[j]] = values[j];
    }
    
    users.push(user);
}

console.log('Parsed users:', users);