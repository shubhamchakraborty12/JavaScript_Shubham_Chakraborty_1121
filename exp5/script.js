const cart = [
  { item: "Wireless Mouse", price: 25.99, quantity: 2, discount: { type: "percentage", value: 10 } },
  { item: "Mechanical Keyboard", price: 105.00, quantity: 1, discount: { type: "flat", value: 15.00 } },
  { item: "Mouse Pad", price: 12.50, quantity: 3, discount: null }
];

function calculateCartTotal(cartItems) {
  return cartItems.reduce((total, cartItem) => {
    let itemTotal = cartItem.price * cartItem.quantity;
    
    // Apply discount logic
    if (cartItem.discount) {
      if (cartItem.discount.type === "percentage") {
        itemTotal -= itemTotal * (cartItem.discount.value / 100);
      } else if (cartItem.discount.type === "flat") {
        itemTotal -= cartItem.discount.value;
      }
    }
    
    // Ensure prices don't drop below zero
    return total + Math.max(0, itemTotal);
  }, 0);
}

const finalTotal = calculateCartTotal(cart);
console.log(`Final Cart Total: $${finalTotal.toFixed(2)}`);
