import { products } from './products.js';

let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const MAX_PRODUCTS = 2;


const clickCounts = {};

export function addToCart(id) {
  
    clickCounts[id] = clickCounts[id] ? clickCounts[id] + 1 : 1;

    
    if (clickCounts[id] >= MAX_PRODUCTS) {
        alert('Je hebt het maximale aantal producten in je winkelwagen bereikt voor dit product.');
        return; 
    }

   
    cartItems.push(id);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartDisplay();
}