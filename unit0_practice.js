/************************************************************
 ONLINE SHOPPING APP - UNIT 0 PRACTICE
************************************************************/
/*
PSEUDOCODE:
1. Define product values (name and price)
2. Store product list in an array
3. Display welcome message to user
4. Allow user to view products using a loop
5. Add selected items to cart array
6. Calculate total and check if user can pay
*/

// ===============================
// 1. Values, Data Types, and Operations
// ===============================

// number (price), string (name), boolean (availability)
let productPrice = 50; 
let tax = 5;

// operation: addition
let totalPrice = productPrice + tax;

console.log("Total Price: $" + totalPrice);
// Skill: Values, Data Types, and Operations


// ===============================
// 2. Stringing Characters Together
// ===============================

let userName = "Kala Umapathy";

// string concatenation
let welcomeMessage = "Welcome to ShopEasy, " + userName + "!";

console.log(welcomeMessage);
// Skill: Stringing Characters Together


// ===============================
// 3. Control Structures and Logic
// ===============================

let userBalance = 90;

if (userBalance >= totalPrice) {
    console.log("Purchase Approved!");
} else {
    console.log("Not enough balance to complete purchase.");
}
// Skill: Control Structures and Logic



// ===============================
// 4. Building Arrays
// ===============================

// array of products
let products = ["Laptop", "Phone", "Headphones", "Tablet"];

// Skill: Building Arrays
console.log("Product List Created");


// ===============================
// 5. Using Arrays
// ===============================

let cart = [];

// adding items
cart.push(products[0]); // Laptop
cart.push(products[2]); // Headphones

console.log("Cart Items: " + cart);
// Skill: Using Arrays (push + accessing elements)


// ===============================
// 6. Working With Loops
// ===============================

// loop through products
for (let i = 0; i < products.length; i++) {
    console.log("Available Product: " + products[i]);
}
// Skill: Working With Loops


/************************************************************
 END OF UNIT 0 EXAMPLE CODE
************************************************************/
