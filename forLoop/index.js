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