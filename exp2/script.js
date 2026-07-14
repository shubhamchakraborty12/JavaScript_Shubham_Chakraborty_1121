// 1. Declare constants that won't change
const TAX_RATE = 0.05; // 5% tax
const SHIPPING_FEE = 120.00;

// 2. Simulate User Input: A standard invoice containing items and customer details
const userInputOrder = {
    customerName: "Rajesh Kumar",
    items: [
        { name: "Wireless Mouse", price: 799.00 },
        { name: "Mechanical Keyboard", price: 3499.00 }
    ]
};

// 3. Destructuring: Unpacking the customer name and items array
const { customerName, items } = userInputOrder;

// 4. Using 'var' and 'let' to demonstrate scoping and value reassignment
var totalCost = 0; 

for (let i = 0; i < items.length; i++) {
    // let is used here because 'itemPrice' changes in each loop
    let itemPrice = items[i].price; 
    totalCost += itemPrice;
}

// 5. Calculate final bill
let taxAmount = totalCost * TAX_RATE;
let finalTotal = totalCost + taxAmount + SHIPPING_FEE;

// 6. Template Literals: Embedding variables directly in backtick-enclosed strings
const invoiceString = `
--- INVOICE ---
Customer: ${customerName}

Subtotal: ₹${totalCost.toFixed(2)}
Tax (5%): ₹${taxAmount.toFixed(2)}
Shipping: ₹${SHIPPING_FEE.toFixed(2)}

Total Due: ₹${finalTotal.toFixed(2)}
----------------
`;

console.log(invoiceString);
