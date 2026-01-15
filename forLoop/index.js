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